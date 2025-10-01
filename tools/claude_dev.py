#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os, sys, argparse, json, re, pathlib, textwrap, time
from typing import List, Dict, Optional
import anthropic

# -------------------------
# Константы/настройки
# -------------------------
MODEL = os.getenv("ANTHROPIC_MODEL", "claude-sonnet-4-20250514")
MAX_FILE_CHARS = int(os.getenv("CLAUDE_MAX_FILE_CHARS", "20000"))
MAX_TREE_ITEMS = int(os.getenv("CLAUDE_MAX_TREE_ITEMS", "300"))
INCLUDE_EXT = {".ts", ".tsx", ".js", ".jsx", ".json", ".py", ".md", ".yml", ".yaml", ".css", ".scss", ".html"}
IGNORE_DIRS = {".git", "node_modules", "dist", "build", ".next", ".turbo", ".venv", "venv", ".idea", ".pytest_cache", ".cache"}
HISTORY_FILE = ".claude_history.json"

SYSTEM_PROMPT = """Ты — строгий, практичный AI-помощник разработчика. Пиши коротко, по делу.
Если даёшь код — только рабочие фрагменты. Объясняй причины правок в 2–5 пунктах.
Если видишь архитектурный косяк — укажи. Если не хватает контекста — явно запроси его.
Когда предлагаешь изменения, по возможности давай минимально-инвазивный дифф/патч.
"""

# -------------------------
# Вспомогательные
# -------------------------

def safe_read_text(path: pathlib.Path, limit=MAX_FILE_CHARS) -> str:
    try:
        data = path.read_text(encoding="utf-8", errors="ignore")
        if len(data) > limit:
            return data[:limit] + f"\n\n/* ... truncated ({len(data)-limit} chars) ... */\n"
        return data
    except Exception as e:
        return f"<<cannot read {path}: {e}>>"

def list_project_tree(root: pathlib.Path) -> List[str]:
    items = []
    for p in root.rglob("*"):
        if any(part in IGNORE_DIRS for part in p.parts):
            continue
        if p.is_dir():
            continue
        if p.suffix.lower() in INCLUDE_EXT:
            try:
                rel = p.relative_to(root).as_posix()
            except Exception:
                rel = str(p)
            items.append(rel)
            if len(items) >= MAX_TREE_ITEMS:
                break
    return items

IMPORT_RE = re.compile(r"""import\s+(?:[\w*{}\s,]+from\s+)?["']([^"']+)["']|require\(\s*["']([^"']+)["']\s*\)""")

def resolve_imports(code: str, file_path: pathlib.Path, project_root: pathlib.Path, max_files=6) -> Dict[str, str]:
    """Примитивно вытягиваем локальные импорты вида ./../x или /src/x"""
    found = {}
    for m in IMPORT_RE.finditer(code):
        mod = m.group(1) or m.group(2)
        if not mod:
            continue
        if mod.startswith(".") or mod.startswith("/"):
            # возможные кандидаты
            candidates = []
            base = (file_path.parent / mod).resolve()
            if base.is_file():
                candidates.append(base)
            else:
                # пробуем с расширениями
                for ext in [".ts", ".tsx", ".js", ".jsx", ".json"]:
                    if base.with_suffix(ext).is_file():
                        candidates.append(base.with_suffix(ext))
                # index.*
                if base.is_dir():
                    for ext in [".ts", ".tsx", ".js", ".jsx"]:
                        cand = base / f"index{ext}"
                        if cand.is_file():
                            candidates.append(cand)
            for cand in candidates:
                try:
                    cand_rel = cand.relative_to(project_root)
                except Exception:
                    continue
                if cand_rel.suffix.lower() in INCLUDE_EXT and len(found) < max_files:
                    found[cand_rel.as_posix()] = safe_read_text(cand)
    return found

def load_history(project_root: pathlib.Path) -> List[Dict]:
    f = project_root / HISTORY_FILE
    if f.exists():
        try:
            return json.loads(f.read_text(encoding="utf-8"))
        except Exception:
            return []
    return []

def save_history(project_root: pathlib.Path, history: List[Dict]):
    f = project_root / HISTORY_FILE
    try:
        f.write_text(json.dumps(history, ensure_ascii=False, indent=2), encoding="utf-8")
    except Exception:
        pass

def assemble_context(project_root: pathlib.Path, file_path: Optional[pathlib.Path], selection: Optional[str], ask: Optional[str]) -> List[Dict]:
    msgs: List[Dict] = []
    msgs.append({"role": "system", "content": SYSTEM_PROMPT})

    # Проект: дерево
    tree = list_project_tree(project_root)
    if tree:
        msgs.append({"role": "user", "content": "Проект: дерево файлов (усечено):\n```\n" + "\n".join(tree) + "\n```"})

    # Текущий файл
    if file_path and file_path.exists():
        content = safe_read_text(file_path)
        msgs.append({"role": "user", "content": f"Текущий файл: {file_path.relative_to(project_root).as_posix()}\n```{file_path.suffix[1:]}\n{content}\n```"})

        # Импорты → подтянуть соседние файлы
        extra = resolve_imports(content, file_path, project_root)
        if extra:
            block = []
            for rel, txt in extra.items():
                ext = "." + rel.split(".")[-1]
                block.append(f"### {rel}\n```{ext[1:]}\n{txt}\n```")
            msgs.append({"role": "user", "content": "Импортируемые файлы (усечено):\n" + "\n\n".join(block)})

    # Выделение
    if selection and selection.strip():
        msgs.append({"role": "user", "content": "Выделенный фрагмент:\n```ts\n" + selection + "\n```"})

    # Вопрос/задача
    if ask and ask.strip():
        msgs.append({"role": "user", "content": "Задача:\n" + ask.strip()})

    return msgs

def stream_reply(client: anthropic.Anthropic, messages: List[Dict]):
    # Потоковый ответ, как «пишет вживую»
    with client.messages.stream(
        model=MODEL,
        max_tokens=1200,
        messages=messages,
    ) as stream:
        for text in stream.text_stream:
            print(text, end="", flush=True)
        final = stream.get_final_message()
        print()  # перенос
        return final

# -------------------------
# CLI
# -------------------------

def main():
    parser = argparse.ArgumentParser(description="Mini Claude Code for PyCharm (Anthropic API).")
    parser.add_argument("--mode", choices=["oneshot", "chat"], default="oneshot")
    parser.add_argument("--project", required=True, help="Project root dir")
    parser.add_argument("--file", help="Current file path")
    parser.add_argument("--selection", help="Selected text (PyCharm macro $SelectedText$)")
    parser.add_argument("--ask", help="User instruction / prompt")
    args = parser.parse_args()

    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("ERROR: env ANTHROPIC_API_KEY is not set.", file=sys.stderr)
        sys.exit(1)

    client = anthropic.Anthropic(api_key=api_key)

    project_root = pathlib.Path(args.project).resolve()
    file_path = pathlib.Path(args.file).resolve() if args.file else None

    if args.mode == "oneshot":
        msgs = assemble_context(project_root, file_path, args.selection, args.ask or "Объясни и предложи улучшения.")
        stream_reply(client, msgs)
        # Историю в oneshot не пишем
        return

    # mode == chat
    history = load_history(project_root)
    if not history:
        # первая системка
        history.append({"role": "system", "content": SYSTEM_PROMPT})
        # добавить дерево для первого запуска
        tree = list_project_tree(project_root)
        if tree:
            history.append({"role": "user", "content": "Проект: дерево файлов (усечено):\n```\n" + "\n".join(tree) + "\n```"})

    print("💬 Mini-Claude Code (API). Введи сообщение. 'exit' — выйти.\n")
    while True:
        try:
            user_in = input("Ты: ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\n👋 Выход.")
            break
        if user_in.lower() in {"exit", "quit", "выход"}:
            print("👋 Выход.")
            break

        # Соберём контекст запроса: приклеим файл/импорты по необходимости, если есть открытый файл
        msgs = history.copy()
        extra_msgs = assemble_context(project_root, file_path, None, user_in)
        # приклеиваем только user-сообщения (кроме системки)
        for m in extra_msgs:
            if m["role"] == "user":
                msgs.append(m)

        final = stream_reply(client, msgs)
        # Сохраним в историю только последнее взаимодействие (сжато)
        history.append({"role": "user", "content": user_in})
        # Антропик может вернуть массив контента — берём текстовые куски
        answer = ""
        for part in final.content:
            if part.get("type") == "text":
                answer += part.get("text", "")
        history.append({"role": "assistant", "content": answer[:5000]})
        save_history(project_root, history)

if __name__ == "__main__":
    main()

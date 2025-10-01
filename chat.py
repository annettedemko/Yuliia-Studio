import os
import anthropic

client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

def main():
    print("💬 Claude API Chat (без лимитов). Напиши 'exit', чтобы выйти.\n")

    history = []  # здесь будем хранить диалог, как контекст

    while True:
        user_input = input("Ты: ")
        if user_input.lower() in ["exit", "quit", "выход"]:
            print("👋 Завершение чата.")
            break

        history.append({"role": "user", "content": user_input})

        response = client.messages.create(
            model="claude-sonnet-4-20250514",   # или "claude-3.5-sonnet", если есть
            max_tokens=500,
            messages=history
        )

        answer = response.content[0].text
        print(f"\nClaude: {answer}\n")

        history.append({"role": "assistant", "content": answer})

if __name__ == "__main__":
    main()
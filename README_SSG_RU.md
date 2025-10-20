# 📝 Краткая инструкция по SSG сборке

## ✅ Что сделано:

Сайт преобразован в **статический (SSG)** для улучшения SEO. Теперь Google видит полноценный HTML-контент без JavaScript.

---

## 🔹 Структура URL:

- `/de/` - немецкие страницы (по умолчанию)
- `/ru/` - русские страницы
- `/` - редирект на `/de`

**Примеры:**
- `/de/about` - страница "О нас" на немецком
- `/ru/about` - страница "О нас" на русском
- `/de/preis` - цены (динамическая)
- `/ru/preis` - цены (динамическая)

---

## 🔹 Что статично, что динамично:

### ✅ Статические (pre-rendered, SEO оптимизированы):
- `/de/about`, `/ru/about`
- `/de/services`, `/ru/services`
- `/de/laser-haarentfernung-muenchen`, `/ru/laser-haarentfernung-muenchen`
- `/de/alexandrit-gegen-diodenlaser`, `/ru/alexandrit-gegen-diodenlaser`
- `/de/icoone-laser-muenchen`, `/ru/icoone-laser-muenchen`
- `/de/manikuere-pedikuere-muenchen`, `/ru/manikuere-pedikuere-muenchen`
- `/de/redtouch-laser-muenchen`, `/ru/redtouch-laser-muenchen`
- `/de/deka-geraeteverkauf`, `/ru/deka-geraeteverkauf`
- `/de/redtouch-pro`, `/ru/redtouch-pro`
- `/de/motus-pro`, `/ru/motus-pro`
- `/de/motus-ax`, `/ru/motus-ax`
- `/de/physiq360`, `/ru/physiq360`
- `/de/again-cos`, `/ru/again-cos`
- `/de/kontakt`, `/ru/kontakt`
- `/de/impressum`, `/ru/impressum`
- `/de/datenschutzerklaerung`, `/ru/datenschutzerklaerung`

### ⚡ Динамические (загружают данные из Supabase):
- `/de/`, `/ru/` - главные страницы (блок "Абонементы")
- `/de/preis`, `/ru/preis` - страница цен
- `/de/deka`, `/ru/deka` - DEKA события
- `/de/deka-anna`, `/ru/deka-anna`
- `/de/deka-lera`, `/ru/deka-lera`
- `/de/deka-liudmila`, `/ru/deka-liudmila`
- `/de/deka-day`, `/ru/deka-day`

---

## 🚀 Команды:

### Разработка:
```bash
npm run dev
```

### Сборка для production:
```bash
npm run build:ssg
```

### Просмотр после сборки:
```bash
npm run preview
```

---

## 📊 Что проверить после сборки:

1. **Структура папок:**
```bash
ls -la dist/de/
ls -la dist/ru/
```

2. **Проверить HTML (немецкая версия):**
```bash
cat dist/de/about/index.html | head -10
```
Должно быть: `<html lang="de">`

3. **Проверить HTML (русская версия):**
```bash
cat dist/ru/about/index.html | head -10
```
Должно быть: `<html lang="ru">`

---

## 🌐 Деплой на Vercel:

Vercel автоматически использует:
```
buildCommand: "npm run build:ssg"
```

После деплоя все статические страницы будут доступны как готовый HTML.

---

## ⚠️ Важно:

❌ **НИЧЕГО НЕ КОММИТИТЬ И НЕ ПУШИТЬ БЕЗ РАЗРЕШЕНИЯ!**

✅ `contacts_n8n.csv` защищен через `.gitignore`

---

## 📞 Вопросы?

Если что-то непонятно - спрашивайте!

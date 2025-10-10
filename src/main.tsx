import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Очистка старого кэша и Service Workers при загрузке
// Это гарантирует что пользователи получат новую версию после деплоя
(async () => {
  try {
    // 1. Удаляем все Service Workers (если есть)
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        await registration.unregister();
        console.log('🧹 Service Worker unregistered');
      }
    }

    // 2. Очищаем все кэши (если есть)
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => {
          console.log('🧹 Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }

    console.log('✅ Cache cleanup completed');
  } catch (error) {
    console.error('⚠️ Cache cleanup error:', error);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);

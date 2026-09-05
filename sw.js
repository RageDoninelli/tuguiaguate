// Service Worker mínimo — necesario para que el navegador ofrezca "Instalar app".
// Por ahora no cachea nada de forma agresiva; solo deja pasar las peticiones normales,
// así siempre ves los negocios actualizados de Supabase.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});

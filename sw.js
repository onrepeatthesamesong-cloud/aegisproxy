const CACHE_NAME = 'aegisproxy-pwa-v3.1';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        CORE_ASSETS.map((asset) => cache.add(asset).catch(() => null))
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Jangan pernah intercept atau cache request ke relay proxy eksternal
  if (
    url.hostname.includes('allorigins.win') ||
    url.hostname.includes('corsproxy.io') ||
    url.hostname.includes('codetabs.com') ||
    url.hostname.includes('thingproxy')
  ) {
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((networkRes) => {
          if (
            networkRes &&
            networkRes.status === 200 &&
            (url.origin === self.location.origin ||
              url.hostname.includes('cdn.tailwindcss.com') ||
              url.hostname.includes('unpkg.com') ||
              url.hostname.includes('fonts.'))
          ) {
            const clone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone)).catch(() => {});
          }
          return networkRes;
        })
        .catch(() => cached);

      return cached || fetchPromise.catch(() => {
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('', { status: 408, statusText: 'Offline' });
      });
    })
  );
});

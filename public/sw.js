const CACHE_NAME = 'dakeek-cache-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Network-first strategy for now to ensure freshness, falling back to cache if offline
    // For specialized resources (images/fonts), we could use cache-first
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                return caches.match(event.request);
            })
    );
});

const CACHE_NAME = 'dcas-cpg-v3'; // Changed to v2 to force update
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',       // <--- CRITICAL: This fixes the unformatted look
  './app.js',           // <--- CRITICAL: This fixes the navigation logic
  './manifest.json',
  './icons/icon.png'
];

// Install event – Pre-cache core assets immediately
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      console.log('Opened cache & pre-caching shell');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch event – Cache First strategy
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Return cached file if found
      if (response) {
        return response;
      }
      // Otherwise, go to network and update cache
      return fetch(event.request).then(networkResponse => {
        // Check if we received a valid response
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        // Clone and cache the new file
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      });
    })
  );
});

// Activate event – Clean up old v1 caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

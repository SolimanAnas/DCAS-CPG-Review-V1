const CACHE_NAME = 'dcas-cpg-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/content/c0.js',
  '/content/c1.js',
  '/content/c2.js',
  '/content/c2-2.js',
  '/content/c3.js',
  '/content/c-index.js',
  '/chapters/c0.html',
  '/chapters/c1.html',
  '/chapters/c2.html',
  '/chapters/c2-2.html',
  '/chapters/c3.html',
  '/chapters/c-index.html',
  // Add any other chapter files as you create them
  // Add any images you use
];

// Install event: cache all essential files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Not in cache - fetch from network
        return fetch(event.request).then(
          networkResponse => {
            // Check if we received a valid response
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            // Clone the response - one to return, one to cache
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return networkResponse;
          }
        );
      })
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
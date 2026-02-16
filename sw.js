const CACHE_NAME = 'dcas-v1';
const ASSETS = [
  'index.html',
  'styles.css',
  'app.js',
  'chapters/c1.html',
  'chapters/c2.html',
  'content/c1.js',
  'content/c2.js',
  'icon.png'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Assets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

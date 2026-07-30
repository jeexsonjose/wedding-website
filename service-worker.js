const CACHE_NAME = 'wedding-site-v1';
const urlsToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/script.js',
  './manifest.json',
  './images/favicon.png',
  './images/couple.jpg',
  './images/couple1.jpg',
  './images/jeexson.jpg',
  './images/julie.jpg',
  './images/top_leaf.png',
  './images/bottom_leaf.png',
  './images/gallery1.jpg',
  './images/gallery2.jpg',
  './images/gallery3.jpg',
  './images/gallery4.jpg',
  './images/gallery5.jpg',
  './images/gallery6.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        const cache = caches.open(CACHE_NAME);
        return cache.then(cacheStore => {
          cacheStore.put(event.request, copy);
          return response;
        });
      })
      .catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html')))
  );
});

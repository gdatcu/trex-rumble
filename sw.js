const CACHE_NAME = 'dino-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  // Assets assumed from your code:
  './trex.png',
  './meat.png',
  './enemy.png',
  './jungle_rhythm.mp3',
  './jump.mp3',
  './roar.mp3',
  './chomp.mp3',
  './crash.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
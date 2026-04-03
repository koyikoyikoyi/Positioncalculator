self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('xing-terminal-v1').then(cache =>
      cache.addAll(['/index.html', '/manifest.json', '/author.jpg', '/bg1.jpg', '/bg2.jpg', '/bg3.jpg', '/bg4.jpg', '/bg5.jpg', '/icon-512.png'])
    )
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

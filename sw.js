self.addEventListener('install', e => {
  e.waitUntil(caches.open('xing-v1').then(c => c.addAll(['/index.html','/author.jpg','/bg1.jpg','/bg2.jpg','/bg3.jpg','/bg4.jpg','/bg5.jpg','/icon-512.png'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

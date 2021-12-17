const staticToroRojo = "Toro-Rojo";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/script.js",
  "/sw.js",
  "/img/logo1.jpg",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticToroRojo).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});


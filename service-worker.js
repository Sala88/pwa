const cacheName = "static-shell-v1"

const resourceToPrecache = [
//  'index.php',
];

self.addEventListener('install', function(e) {

  console.log("Service worker install event!");

  e.waitUntil(
    caches.open(cacheName)
          .then(function(cache) {
            return cache.addAll(resourceToPrecache);
          })
  );
});

self.addEventListener('fetch', function(e) {

  console.log(e.request.url);

  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );

  
});


self.addEventListener('fetch', function(event) {});

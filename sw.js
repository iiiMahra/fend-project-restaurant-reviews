 var staticCacheName = 'restaurant-v';

/*-------------------------------------------------------------------------------------*/

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache){
      return cache.addAll([
           '/',
           '/index.html',
           '/restaurant.html',
           '/css/styles.css',
           '/js/dbhelper.js',
           '/js/main.js',
           '/js/restaurant_info.js',
           '/js/register.js',
           '/data/restaurants.json',
           '/img/',
           '/img/1.jpg',
           '/img/2.jpg',
           '/img/3.jpg',
           '/img/4.jpg',
           '/img/5.jpg',
           '/img/6.jpg',
           '/img/7.jpg',
           '/img/8.jpg',
           '/img/9.jpg',
           '/img/10.jpg'
      ]);
    })
  );
});
/*-------------------------------------------------------------------------------------*/
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames){
      return Promise.all(cacheNames.map(function(cacheName){
        if(cacheName !== staticCacheName){
          return caches.delete(cacheName);
        }
      }))
    })
  );
});
/*-------------------------------------------------------------------------------------*/

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

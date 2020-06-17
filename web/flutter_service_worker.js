'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "348e6a8a3950d9a9a2450799ce32b21f",
"assets/assets/comida.png": "2f86f691e33e9241a50df3a0d19ff6dd",
"assets/FontManifest.json": "ed9cd32fa597ae46abed4ac894b9902b",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "fcfcfc23a3d374d1eeaf7cbcb473b8f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c8ac3c0d80ca7151379d273cdf9ea1b6",
"/": "c8ac3c0d80ca7151379d273cdf9ea1b6",
"main.dart.js": "22a6daa01fc2b0c8acb1717b8e3e5871",
"manifest.json": "7a887bd0611e338b50cba3376f023fe9"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

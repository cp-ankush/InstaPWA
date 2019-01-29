
self.addEventListener('install', function(event) {
  console.log("[Service Worker] Service Worker is installed ...", event)
})

self.addEventListener('activate', function(event) {
  console.log("[Service Worker] Activating Service Worker ...", event)
  return self.clients.claim()
})

self.addEventListener('fetch', function(event) {
  console.log("Fetching something...", event)
  event.respondWith(fetch(event.request))
})

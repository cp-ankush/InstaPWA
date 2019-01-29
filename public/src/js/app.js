
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js', {scope: '/'}) // scope can be restricted to folders inside parent folder of sw.js,
      // but can not be given to the folders outside the parent folder of the sw.js 
    .then(function() {
      console.log("service worker registered")
    })
}

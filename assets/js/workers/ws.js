
console.log("on passe la");
// On install, cache some resource.
self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');


//Ask the service worker to keep installing until the returning promise resolves.

  evt.waitUntil(active());
});


function active() {
// Service Worker Active
self.addEventListener('activate', function(event){
    console.log('activated!');
});
}


self.addEventListener('message', function(event){
    console.log("SW Received Message: " + event.data);
});
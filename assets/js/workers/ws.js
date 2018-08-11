
/////////////////////////////////////////
//INIT
/////////////////////////////////////////
// Install.
self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');
  evt.waitUntil(active());
});

// Activate
function active() {
self.addEventListener('activate', function(event){
    console.log('activated!');
});
}
//////////////////////////////////////////////





self.addEventListener('message', function(event){
    console.log("SW Received Message: " + event.data);
});
self.addEventListener('message', function(e) {
	console.log(e);
  self.postMessage(e.data);
}, false);
self.addEventListener('fetch', function (event) {
    // it can be empty if you just want to get rid of that error
});
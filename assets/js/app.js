import { Lifer } from './services/Lifer.js';
import Controller from './controller/Controller.js';

let name = "app";
Lifer.addMe(name);

let css = document.createElement("style");
			css.type = "text/css";
			css.id = "divContentEditable_css_style";
			css.innerHTML = `[contenteditable=true]:empty::before {
			  					content: attr(placeholder);
								}
							 body{
							 	overscroll-behavior-y : contain;
							 }
							`;

		document.head.appendChild(css);




////////////////////////////////////////////////////////
//GROS HACK POUR FAIRE DU FULL SCREEN

/*window.addEventListener("click", function(e){

	//Chrome, Opéra, Safari
	document.documentElement.webkitRequestFullscreen();

	if(!document.webkitFullscreenEnabled){

		//Firefox
		document.documentElement.mozRequestFullScreen();

	}

});

let LinkEvent = new CustomEvent('click', {'detail' : {}});
 window.dispatchEvent(LinkEvent);*/
 
///////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////
/*let screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;

if (screen.lockOrientationUniversal("portrait-primary")) {
  // orientation was locked
} else {
  // orientation lock failed
}*/
screen.orientation.lock("portrait-primary");
//////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
//resize de la frame sur chrome si ça change de taille
//onsole.log(window.onresize);


///////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
//Init service worker
if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('build/ws.js').then(function(sw) {
      console.log("Registered!");
    }).catch(function(err) {
      console.log("Error");
    });

} else {
  ChromeSamples.setStatus('This browser does not support service workers.');
}

 navigator.serviceWorker.ready.then(function(reg) {
 	console.log("in try");
      try {

        reg.active.postMessage({
          text: "Hi!",
          port: messageChannel && messageChannel.port2
        }, [messageChannel && messageChannel.port2]);
      }
      catch (e) {
        // getting a cloning error in Firefox
        reg.active.postMessage({
          text: "Hi!"
        });
      }
    });


/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.whenReady
  .then(function(registration) {
    console.log('A service worker is active:', registration.active);

    // At this point, you can call methods that require an active
    // service worker, like registration.pushManager.subscribe()
  });
} else {
  console.log('Service workers are not supported.');
}
*/


/*navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
  // Let's see if you have a subscription already
   console.log('envoi de data au service worker');
  navigator.serviceWorker.controller.postMessage({'data': dataToServiceWorker});

  return serviceWorkerRegistration.pushManager.getSubscription();
})
.then(function(subscription) {
  if (!subscription) {
    // You do not have subscription
  }
  // You have subscription.
  // Send data to service worker
  console.log('envoi de data au service worker');
  navigator.serviceWorker.controller.postMessage({'data': dataToServiceWorker});

})
*/


/*
function sendMessage(message) {
  // This wraps the message posting/response in a promise, which will resolve if the response doesn't
  // contain an error, and reject with the error if it does. If you'd prefer, it's possible to call
  // controller.postMessage() and set up the onmessage handler independently of a promise, but this is
  // a convenient wrapper.
  return new Promise(function(resolve, reject) {
    var messageChannel = new MessageChannel();
    messageChannel.port1.onmessage = function(event) {
      if (event.data.error) {
        reject(event.data.error);
      } else {
        resolve(event.data);
      }
    };

    // This sends the message data as well as transferring messageChannel.port2 to the service worker.
    // The service worker can then use the transferred port to reply via postMessage(), which
    // will in turn trigger the onmessage handler on messageChannel.port1.
    // See https://html.spec.whatwg.org/multipage/workers.html#dom-worker-postmessage
    navigator.serviceWorker.controller.postMessage(message,
      [messageChannel.port2]);
  });
}*/




////////////////////////////////////////////////////////////



const LiferApp = new Controller(name);



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
navigator.serviceWorker.register('build/ws.js', {
  scope: 'build/'
});

navigator.serviceWorker.ready.then(console.log('ready to use'));
let msg = "coucou c'est mouah";
navigator.serviceWorker.controller.postMessage("Client 1 says '"+msg+"'");
////////////////////////////////////////////////////////////



const LiferApp = new Controller(name);



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
							`;

		document.head.appendChild(css);




//GROS HACK POUR ANDROID
alert(navigator.appName);

window.addEventListener("click", function(e){

	document.documentElement.webkitRequestFullscreen();

});

let LinkEvent = new CustomEvent('click', {'detail' : {'frame' : 'Home'}});
 window.dispatchEvent(LinkEvent);



const LiferApp = new Controller(name);



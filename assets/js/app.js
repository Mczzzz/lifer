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

		document.body.appendChild(css);


const LiferApp = new Controller(name);



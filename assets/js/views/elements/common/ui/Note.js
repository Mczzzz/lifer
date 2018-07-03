import Footer from '../sections/footer.js';
import Header from '../sections/header.js';
import superViews from "../super/views.js"

export default class Note extends superViews{
	

	constructor(parent,MyClass,path){

		super(parent, MyClass , path);

		this.init();

		
	}


	init(){


		this.background();
		this.addHeader();
		this.addMain();
		this.addFooter();
	}



	background(){

		this.container.style.position = "absolute";
		this.container.style.top = "0.5%";
		this.container.style.left = "0.5%";
		this.container.style.height = "99%";
		this.container.style.width = "99%";
		this.container.style.display = "flex";
		this.container.style.flexDirection = "column";
		this.container.style.background = "white";
		this.container.style.boxShadow = "0px 0px 10px 10px green";


	}


	addHeader(){

		let Note = new Header(this.MyClass);
		Note.setBkgdColor("linear-gradient(45deg, rgb(234, 234, 234) 0%, rgb(216, 216, 216) 100%)");
		Note.setHeight(60);
		Note.setBack();
		
	}


	addMain(){

		//add css for placeholder div
		let css = document.createElement("style");
			css.type = "text/css";
			css.id = "divContentEditable_css_style";
			css.innerHTML = `[contenteditable=true]:empty::before {
			  					content: attr(placeholder);
								}
							`;
			document.body.appendChild(css);
		

		this.Main = document.createElement("div");
		this.Main.className = "mainNote";
		this.container.append(this.Main);

		this.Main.style.background = "white";
		this.Main.style.display = "flex";
		this.Main.style.overflowY = "scroll";
		this.Main.style.flexDirection = "column";
		this.Main.style.flex = 1;


		this.Title = document.createElement("div");
		this.Title.contentEditable  = "true";
		this.Title.setAttribute("placeholder", "Titre...");
		this.Title.style.fontSize   = "20px";
		this.Title.style.fontWeight = "bold";
		this.Title.style.margin     = "5px";
		this.Title.style.border     = "none";
		this.Title.style.outline    = "none";
		this.Title.style.background = "transparent";
		this.Title.style.color      = "grey";
		this.Title.style.fontFamily = "'Titillium Web',sans-serif,Arial,sans-serif";
		this.Main.append(this.Title);



		this.Texte = document.createElement("div");
		this.Texte.contentEditable  = "true";
		this.Texte.setAttribute("placeholder", "Texte...");
		this.Texte.style.fontSize = "15px";
		this.Texte.style.margin = "5px";
		this.Texte.style.flex = "1";
		this.Texte.style.border = "none";
		this.Texte.style.outline = "none";
		this.Texte.style.background = "transparent";
		this.Texte.style.color = "grey";
		this.Texte.style.fontFamily   = "'Titillium Web',sans-serif,Arial,sans-serif";
		this.Main.append(this.Texte);




	}


	addFooter(){

		this.Footer = document.createElement("div");
		this.Footer.className = "footerNote";
		this.container.append(this.Footer);

		this.Footer.style.background = "red";
		this.Footer.style.height = "40px";
	}

}
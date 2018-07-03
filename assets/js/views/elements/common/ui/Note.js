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

		this.Main = document.createElement("div");
		this.Main.className = "mainNote";
		this.container.append(this.Main);

		this.Main.style.background = "white";
		this.Main.style.display = "flex";
		this.Main.style.flexDirection = "column";
		this.Main.style.flex = 1;


		this.Title = document.createElement("textarea");
		this.Title.placeholder      = "Titre...";
		this.Title.style.fontSize   = "20px";
		this.Title.style.fontWeight = "bold";
		this.Title.style.margin     = "5px";
		this.Title.style.border     = "none";
		this.Title.style.outline    = "none";
		this.Title.style.background = "transparent";
		this.Title.style.color      = "black";
		this.Title.style.fontFamily = "'Titillium Web',sans-serif,Arial,sans-serif";
		this.Main.append(this.Title);



		this.Texte = document.createElement("textarea");
		this.Texte.placeholder="Texte...";
		this.Texte.style.fontSize = "25px";
		this.Texte.style.margin = "5px";
		this.Texte.style.flex = "1";
		this.Texte.style.border = "none";
		this.Texte.style.outline = "none";
		this.Texte.style.background = "transparent";
		this.Texte.style.color = "black";
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
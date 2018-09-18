import superViews from "../../super/views.js";

import Card from "../card.js";

export default class HeaderRessource extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super( MyClass , path);

          this.init();

          this.callBack = [];

     }



     init(){

     	this.card = new Card('Card', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "white");




		let HeaderElement = this.card.setElement("Element");
		this.card.setStyleElement(HeaderElement,"justifyContent","space-between");
		this.card.setStyleElement(HeaderElement,"alignItems","center");

				this.card.push("Text",HeaderElement,"Title","");

				this.card.setAttributeComponent(HeaderElement,"Title","placeholder","Titre Ressource...");

				this.card.setStyleComponent(HeaderElement,"Title","fontSize","18px");
				this.card.setStyleComponent(HeaderElement,"Title","color","grey");
				this.card.setStyleComponent(HeaderElement,"Title","fontWeight","bold");


				this.card.push("Button", HeaderElement,"sep1", "more_vert");

				this.card.setStylePictoComponent(HeaderElement,"sep1","fontSize","25px");
				this.card.setStylePictoComponent(HeaderElement,"sep1","margin","0px");
				this.card.setStylePictoComponent(HeaderElement,"sep1","color","grey");
				this.card.setStylePictoComponent(HeaderElement,"sep1","alignItems","center");





     }





}









 
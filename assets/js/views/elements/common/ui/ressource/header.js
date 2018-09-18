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
		this.card.setStyle("border", "1px solid blue");




		let HeaderElement = this.card.setElement("Element");
		this.card.setStyleElement(HeaderElement,"justifyContent","space-between");

				this.card.push("Text",HeaderElement,"Title","");

				this.card.setAttributeComponent(HeaderElement,"Title","placeholder","Titre Ressource...");

				this.card.setStyleComponent(HeaderElement,"Title","fontSize","13px");
				this.card.setStyleComponent(HeaderElement,"Title","color","grey");
				this.card.setStyleComponent(HeaderElement,"Title","margin","0px 5px 2px 0px");
				this.card.setStyleComponent(HeaderElement,"Title","fontWeight","bold");


				this.card.push("Button", Elt,"sep1", "more_vert");

				this.card.setStylePictoComponent(Elt,"sep1","fontSize","25px");
				this.card.setStylePictoComponent(Elt,"sep1","margin","5px");
				this.card.setStylePictoComponent(Elt,"sep1","color","grey");
				this.card.setStylePictoComponent(Elt,"sep1","alignItems","center");





     }





}









 
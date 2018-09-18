import superViews from "../../super/views.js";

import Card from "../card.js";

export default class HeaderRessource extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super( MyClass , path);

          this.init();

          this.callBack = [];

     }



     init(){

     	this.card = new Card('RessourceHeaderCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "white");
		this.card.setStyle("border", "1px solid blue");




		let HeaderElement = this.card.setElement("RessourceHeaderCardElement");
		this.card.setStyleElement(HeaderElement,"justifyContent","flex-start");

				this.card.push("Text",HeaderElement,"titleRessource","");

				this.card.setAttributeComponent(HeaderElement,"titleRessource","placeholder","Titre Ressource...");

				this.card.setStyleComponent(HeaderElement,"titleRessource","fontSize","13px");
				this.card.setStyleComponent(HeaderElement,"titleRessource","color","grey");
				this.card.setStyleComponent(HeaderElement,"titleRessource","margin","0px 5px 2px 0px");
				this.card.setStyleComponent(HeaderElement,"titleRessource","fontWeight","bold");



     }





}









 
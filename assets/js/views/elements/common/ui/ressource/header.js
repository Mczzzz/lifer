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
		this.card.setStyle("background", "red");




		let HeaderElement = this.card.setElement("RessourceHeaderCardElement");
		this.card.setStyleElement(HeaderElement,"justifyContent","flex-end");

				this.card.push("Text",HeaderElement,"update_new_"+timestamp,updateTs.format('Do MMMM YYYY, HH:mm:ss'));

				this.card.setStyleComponent(HeaderElement,"update_new_"+timestamp,"fontSize","9px");
				this.card.setStyleComponent(HeaderElement,"update_new_"+timestamp,"color","grey");
				this.card.setStyleComponent(HeaderElement,"update_new_"+timestamp,"margin","0px 5px 2px 0px");
				this.card.setStyleComponent(HeaderElement,"update_new_"+timestamp,"fontWeight","normal");



     }





}









 
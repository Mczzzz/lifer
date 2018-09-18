import superViews from "../../super/views.js";

import Card from "../card.js";

import Text   from "./main/text.js";
import Number from "./main/number.js";

export default class MainRessource extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super( MyClass , path);

          this.init();

          this.callBack = [];

     }



     init(){


     	this.card = new Card('RessourceMainCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "yellow");



     }



     addRessource(type){



     }




	text(){

		let text = new Text("EmptyTextForm", this.path);
		this.active = text;

	}



	number(){

		let number = new Number("EmptyNumberForm", this.path);
		this.active = number;

	}



}









 
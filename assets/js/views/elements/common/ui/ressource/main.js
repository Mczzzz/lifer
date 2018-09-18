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

		this.setStyle("borderWidth", "0px");
		this.setStyle("borderRadius", "0px");
		this.setStyle("margin", "0px");
		this.setStyle("padding", "10px");
		this.setStyle("background", "yellow");



     }



     addRessource(type){


		switch (type){

			case 'text':

				this.text();

			break;

			case 'number':

				this.number();

			break;

			//default:

		}


     }




	text(){

		let text = new Text("RessourceTextForm", this.path);


	}



	number(){

		let number = new Number("RessourceNumberForm", this.path);


	}



}









 
import superViews from "../../../super/views.js"

import Card from "../../card.js"

export default class Empty extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path);

		//console.log(path);

		//this.data = this.Lifer.getData(this.path,"Title",2);


		this.init();
		
	}


	init(){

		this.card = new Card(this.container,'NoteEmptyCardText', this.path);
		this.card.setId(0);
		this.card.setProperty("borderWidth", "0px");
		this.card.setProperty("borderRadius", "0px");
		this.card.setProperty("margin", "0px");
		//text, size, color,margin,weight,justify, suffixe
/*		let HeaderElement = this.card.setElement("header");
		this.card.pushElement(HeaderElement,this.data.update,9,"grey","0px 5px 2px 0px","normal","flex-end","update");*/


		let EmptyElement = this.card.setElement("Empty");
		this.card.pushText(EmptyElement,"",20,"black","0px 5px 5px 5px","normal","flex-start","mainNewInput",1);
		this.card.pushButton(EmptyElement,25,"green","flex-end");
		


	}


}
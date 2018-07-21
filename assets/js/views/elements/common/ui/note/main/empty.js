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

		//text, size, color,margin,weight,justify, suffixe
/*		let HeaderElement = this.card.setElement("header");
		this.card.pushElement(HeaderElement,this.data.update,9,"grey","0px 5px 2px 0px","normal","flex-end","update");*/


		let EmptyElement = this.card.setElement("Empty");
		this.card.pushText(EmptyElement,"",20,"black","0px 5px 5px 5px","bold","flex-start","mainNewInput");
		this.card.pushButton(EmptyElement);
		


	}


}
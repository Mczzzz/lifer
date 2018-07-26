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
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("boxShadow", "0px -2px 12px #BBB");
		this.card.setStyle("background", "white");


		let EmptyElement = this.card.setElement("Empty");
		this.card.pushText(EmptyElement,"",18.5,"black","0px 5px 5px 5px","normal","flex-start","mainNewInput",1);
		this.card.pushButton(EmptyElement,25,"green","flex-end");
		


	}


}
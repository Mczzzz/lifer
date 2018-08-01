import superViews from "../../../super/views.js"

import Card from "../../card.js"

export default class Empty extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path);

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
		this.card.setStyleElement(EmptyElement,"justifyContent","flex-start");

		this.card.push("Text", EmptyElement,"mainNewInput", "");

		this.card.setStyleComponent(EmptyElement,"mainNewInput","fontSize","18.5px");
		this.card.setStyleComponent(EmptyElement,"mainNewInput","color","black");
		this.card.setStyleComponent(EmptyElement,"mainNewInput","margin","0px 5px 5px 5px");
		this.card.setStyleComponent(EmptyElement,"mainNewInput","fontWeight","normal");
		this.card.setStyleComponent(EmptyElement,"mainNewInput","flex",1);

		this.card.push("Button", EmptyElement,"mainNewButton","arrow_forward");

		this.card.setStyleComponent(EmptyElement,"mainNewButton","fontSize","25px");
		this.card.setStyleComponent(EmptyElement,"mainNewButton","color","green");
		this.card.setStyleComponent(EmptyElement,"mainNewButton","alignItems","flex-end");



	}


}
import superViews from "../../../super/views.js"

import Card from "../../card.js"

export default class Title extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path);

		this.init();
		
	}


	init(){

		this.card = new Card(this.container,'NoteTitleCard', this.path);
		//let cardTitle = this.textElement('','title',"20px","bold","grey","Titre...");

	}


}

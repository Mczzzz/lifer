import superViews from "../../../super/views.js"

import Card from "../../card.js"

export default class Title extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path);

		//console.log(path);

		this.data = this.Lifer.getData(this.path,"Title",2);


		this.init();
		
	}


	init(){

		this.card = new Card(this.container,'NoteTitleCard', this.path);
		this.card.setId(this.data.id);

		//text, size, color,margin
		this.card.setHeader(this.data.update,9,"grey","0px 5px 2px 0px");

		this.card.setMain(this.data.name,20,"black");

		//console.log(this.data)
		//let cardTitle = this.textElement('','title',"20px","bold","grey","Titre...");

	}


}

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
		this.card.setProperty("borderWidth", "0px");
		this.card.setProperty("borderRadius", "0px");
		this.card.setProperty("margin", "0px");
		this.card.setProperty("padding", "10px");
		this.card.setProperty("boxShadow", "0px 2px 12px #BBB");
		this.card.setProperty("background", "white");
		//text, size, color,margin,weight,justify, suffixe
		let HeaderElement = this.card.setElement("header");
		this.card.pushText(HeaderElement,this.data.update,9,"grey","0px 5px 2px 0px","normal","flex-end","update");


		let MainElement   = this.card.setElement("main");
		console.log('DEBUG');
		console.log(this.data);
		this.card.pushText(MainElement,this.data.name,20,"black","0px 5px 5px 5px","bold","flex-start","main");


	}


}

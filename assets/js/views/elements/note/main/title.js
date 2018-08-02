import superViews from "../../../super/views.js";

import Card from "../../card.js";

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
		
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("boxShadow", "0px 2px 12px #BBB");
		this.card.setStyle("background", "white");



			let HeaderElement = this.card.setElement("header");
			this.card.setStyleElement(HeaderElement,"justifyContent","flex-end");

					this.card.push("Text", HeaderElement,"update",this.data.update);

					this.card.setStyleComponent(HeaderElement,"update","fontSize","9px");
					this.card.setStyleComponent(HeaderElement,"update","color","grey");
					this.card.setStyleComponent(HeaderElement,"update","margin","0px 5px 2px 0px");
					this.card.setStyleComponent(HeaderElement,"update","fontWeight","normal");



			let MainElement   = this.card.setElement("main");
			this.card.setStyleElement(MainElement,"justifyContent","flex-start");

					this.card.push("Text", MainElement,"title", this.data.name);

					this.card.setStyleComponent(MainElement,"title","fontSize","20px");
					this.card.setStyleComponent(MainElement,"title","color","black");
					this.card.setStyleComponent(MainElement,"title","margin","0px 5px 5px 5px");
					this.card.setStyleComponent(MainElement,"title","fontWeight","bold");


	}


}

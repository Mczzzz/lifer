import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class FooterButtons extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path);


		this.init();
		
	}


	init(){

		this.card = new Card(this.container,'ObjectsFooterCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "transparent");


			let ObjectsFooterElement   = this.card.setElement("ObjectsFooterElement");
			this.card.setStyleElement(ObjectsFooterElement,"justifyContent","flex-start");

					this.card.push("Button", ObjectsFooterElement,"addChild", "add_circle");

					this.card.setStyleComponent(ObjectsFooterElement,"addChild","fontSize","25px");
					this.card.setStyleComponent(ObjectsFooterElement,"addChild","color","green");
					this.card.setStyleComponent(ObjectsFooterElement,"addChild","alignItems","center");



					this.card.push("Button", ObjectsFooterElement,"renameChild", "create");

					this.card.setStyleComponent(ObjectsFooterElement,"renameChild","fontSize","25px");
					this.card.setStyleComponent(ObjectsFooterElement,"renameChild","color","orange");
					this.card.setStyleComponent(ObjectsFooterElement,"renameChild","alignItems","center");





					this.card.push("Button", ObjectsFooterElement,"removeChild", "remove_circle");

					this.card.setStyleComponent(ObjectsFooterElement,"removeChild","fontSize","25px");
					this.card.setStyleComponent(ObjectsFooterElement,"removeChild","color","red");
					this.card.setStyleComponent(ObjectsFooterElement,"removeChild","alignItems","center");




	}


}
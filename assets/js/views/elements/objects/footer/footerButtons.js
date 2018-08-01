import superViews from "../../common/super/views.js"

import Card from "../../common/ui/card.js"

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
		this.card.setStyle("padding", "20px");
		this.card.setStyle("background", "transparent");


			let ObjectsFooterElement   = this.card.setElement("ObjectsFooterElement");
			this.card.setStyleElement(ObjectsFooterElement,"justifyContent","space-between");

					let ObjectsFooterElementButton = this.card.push("Button", ObjectsFooterElement,"addChild", "add_circle");

					this.card.setStyleComponent(ObjectsFooterElement,"addChild","fontSize","25px");
					this.card.setStyleComponent(ObjectsFooterElement,"addChild","color","green");
					this.card.setStyleComponent(ObjectsFooterElement,"addChild","alignItems","center");



	}


}
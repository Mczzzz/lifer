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

/*					let HeaderBackButton = this.card.push("Button", HeaderElement,"headerBack", "keyboard_backspace");

					this.card.setStyleComponent(HeaderElement,"headerBack","fontSize","25px");
					this.card.setStyleComponent(HeaderElement,"headerBack","color","green");
					this.card.setStyleComponent(HeaderElement,"headerBack","alignItems","center");

					this.Lifer.dumpMe();
					HeaderBackButton.addEventListener("click",()=>this.parent.remove());


					this.card.push("Button", HeaderElement,"headerLogo", "sentiment_satisfied_alt");

					this.card.setStyleComponent(HeaderElement,"headerLogo","fontSize","25px");
					this.card.setStyleComponent(HeaderElement,"headerLogo","color","green");
					this.card.setStyleComponent(HeaderElement,"headerLogo","alignItems","center");*/



	}


}
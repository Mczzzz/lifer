import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class HeaderButtons extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path);


		this.init();
		
	}


	init(){

		this.card = new Card(this.container,'NoteHeaderCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "20px");
		this.card.setStyle("background", "transparent");


			let HeaderElement   = this.card.setElement("headerNote");
			this.card.setStyleElement(HeaderElement,"justifyContent","space-between");

					let HeaderBackButton = this.card.push("Button", HeaderElement,"headerBack", "keyboard_backspace");

					this.card.setStyleComponent(HeaderElement,"headerBack","fontSize","25px");
					this.card.setStyleComponent(HeaderElement,"headerBack","color","green");
					this.card.setStyleComponent(HeaderElement,"headerBack","alignItems","center");

					HeaderBackButton.addEventListener("click",()=>this.parent.remove());


					this.card.push("Button", HeaderElement,"headerLogo", "widgets");

					this.card.setStyleComponent(HeaderElement,"headerLogo","fontSize","25px");
					this.card.setStyleComponent(HeaderElement,"headerLogo","color","green");
					this.card.setStyleComponent(HeaderElement,"headerLogo","alignItems","center");



	}


}

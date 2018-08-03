import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class HeaderButtons extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);


		this.init();
		
	}


	init(){

		this.card = new Card('ObjectsHeaderCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "transparent");


			let HeaderElement   = this.card.setElement("ObjectsHeaderElement");
			this.card.setStyleElement(HeaderElement,"justifyContent","space-between");

					let HeaderBackButton = this.card.push("Button", HeaderElement,"headerBack", "keyboard_backspace");

					this.card.setStylePictoComponent(HeaderElement,"headerBack","fontSize","25px");
					this.card.setStylePictoComponent(HeaderElement,"headerBack","color","green");
					this.card.setStylePictoComponent(HeaderElement,"headerBack","alignItems","center");

					HeaderBackButton.addEventListener("click",()=>this.BackToHome());


					this.card.push("Button", HeaderElement,"headerLogo", "widgets");

					this.card.setStylePictoComponent(HeaderElement,"headerLogo","fontSize","25px");
					this.card.setStylePictoComponent(HeaderElement,"headerLogo","marginRight","0px");
					this.card.setStylePictoComponent(HeaderElement,"headerLogo","color","green");
					this.card.setStylePictoComponent(HeaderElement,"headerLogo","alignItems","center");



	}


	BackToHome(){

		let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Home'}});
		window.dispatchEvent(LinkEvent);

	}



}
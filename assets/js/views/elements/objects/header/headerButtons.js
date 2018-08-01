import superViews from "../../common/super/views.js"

import Card from "../../common/ui/card.js"

export default class HeaderButtons extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path);


		this.init();
		
	}


	init(){

		this.card = new Card(this.container,'ObjectsHeaderCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "transparent");


			let HeaderElement   = this.card.setElement("ObjectsHeaderElement");
			this.card.setStyleElement(HeaderElement,"justifyContent","space-between");

					let HeaderBackButton = this.card.push("Button", HeaderElement,"headerBack", "keyboard_backspace");

					this.card.setStyleComponent(HeaderElement,"headerBack","fontSize","25px");
					this.card.setStyleComponent(HeaderElement,"headerBack","color","green");
					this.card.setStyleComponent(HeaderElement,"headerBack","alignItems","center");

					HeaderBackButton.addEventListener("click",()=>this.BackToHome());


					this.card.push("Button", HeaderElement,"headerLogo", "widgets");

					this.card.setStyleComponent(HeaderElement,"headerLogo","fontSize","25px");
					this.card.setStyleComponent(HeaderElement,"headerLogo","color","green");
					this.card.setStyleComponent(HeaderElement,"headerLogo","alignItems","center");



	}


	BackToHome(){

		let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Home'}});
		window.dispatchEvent(LinkEvent);

	}



}
import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class FooterButtons extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);


		this.init();
		
	}


	init(){

		this.card = new Card('HomeFooterCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "transparent");


			let FooterElement = this.card.setElement("HomeFooterElement");
			this.card.setStyleElement(FooterElement,"justifyContent","space-between");

					let FooterObjectButton = this.card.push("Button", FooterElement,"toObjects", "widgets");

					this.card.setStylePictoComponent(FooterElement,"toObjects","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"toObjects","color","green");
					this.card.setStylePictoComponent(FooterElement,"toObjects","alignItems","center");

					FooterObjectButton.addEventListener("click",()=>this.goToObject());


	}


	goToObject(){

		let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Objects'}});
		window.dispatchEvent(LinkEvent);

	}


}

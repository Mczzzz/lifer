import superViews from "../../common/super/views.js"

import Card from "../../common/ui/card.js"

export default class FooterButtons extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path);


		this.init();
		
	}


	init(){

		this.card = new Card(this.container,'HomeFooterCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "transparent");


			let FooterElement = this.card.setElement("HomeFooterElement");
			this.card.setStyleElement(FooterElement,"justifyContent","space-between");

					let FooterObjectButton = this.card.push("Button", FooterElement,"toObjects", "widgets");

					this.card.setStyleComponent(FooterElement,"toObjects","fontSize","25px");
					this.card.setStyleComponent(FooterElement,"toObjects","color","green");
					this.card.setStyleComponent(FooterElement,"toObjects","alignItems","center");

					FooterObjectButton.addEventListener("click",()=>this.goToObject());


	}


	goToObject(){

		let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Objects'}});
		window.dispatchEvent(LinkEvent);

	}


}

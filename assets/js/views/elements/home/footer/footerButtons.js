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
			this.card.setStyleElement(FooterElement,"justifyContent","s");



				let StartNote = this.card.push("Button", FooterElement,"HomeAddNote", "note_add");

					this.card.setStylePictoComponent(FooterElement,"HomeAddNote","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"HomeAddNote","marginRight","0px");
					this.card.setStylePictoComponent(FooterElement,"HomeAddNote","color","green");
					this.card.setStylePictoComponent(FooterElement,"HomeAddNote","alignItems","center");

					StartNote.getContainer().addEventListener("click",()=>this.StartNote());


					///////////////
					this.card.push("Button", this.ObjectsFooterElement,"HomeSep1", "more_vert");

					this.card.setStylePictoComponent(this.ObjectsFooterElement,"HomeSep1","fontSize","25px");
					this.card.setStylePictoComponent(this.ObjectsFooterElement,"HomeSep1","margin","5px");
					this.card.setStylePictoComponent(this.ObjectsFooterElement,"HomeSep1","color","#cfcfcf");
					this.card.setStylePictoComponent(this.ObjectsFooterElement,"HomeSep1","alignItems","center");
					//////////////





				let FooterObjectButton = this.card.push("Button", FooterElement,"toObjects", "widgets");

					this.card.setStylePictoComponent(FooterElement,"toObjects","fontSize","25px");
					this.card.setStylePictoComponent(FooterElement,"toObjects","color","green");
					this.card.setStylePictoComponent(FooterElement,"toObjects","alignItems","center");

					FooterObjectButton.getContainer().addEventListener("click",()=>this.goToObject());


	}


	StartNote(){

		let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Note'}});
		window.dispatchEvent(LinkEvent);

	}


	goToObject(){

		let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Objects'}});
		window.dispatchEvent(LinkEvent);

	}


}

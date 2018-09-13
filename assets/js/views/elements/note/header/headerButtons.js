import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class HeaderButtons extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);


		this.init();
		
	}


	init(){

		this.card = new Card('NoteHeaderCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "transparent");


			let HeaderElement   = this.card.setElement("headerNote");
			this.card.setStyleElement(HeaderElement,"justifyContent","space-between");

					let HeaderBackButton = this.card.push("Button", HeaderElement,"NoteHeaderBack", "keyboard_backspace");

					this.card.setStylePictoComponent(HeaderElement,"NoteHeaderBack","fontSize","25px");
					this.card.setStylePictoComponent(HeaderElement,"NoteHeaderBack","color","green");
					this.card.setStylePictoComponent(HeaderElement,"NoteHeaderBack","alignItems","center");

					HeaderBackButton.getContainer().addEventListener("click",()=>this.CloseMe());



					let TheTitle = this.card.push("Text", HeaderElement,"HeaderNotetitle", "");

					this.card.setAttributeComponent(HeaderElement,"HeaderNotetitle","placeholder","Titre...");

					this.card.setStyleComponent(HeaderElement,"HeaderNotetitle","fontSize","12px");
					this.card.setStyleComponent(HeaderElement,"HeaderNotetitle","color","black","property");
					this.card.setStyleComponent(HeaderElement,"HeaderNotetitle","margin","0px 5px 5px 5px");
					this.card.setStyleComponent(HeaderElement,"HeaderNotetitle","fontWeight","bold");
					this.card.setStyleComponent(HeaderElement,"HeaderNotetitle","width","100%");



				/*	this.card.push("Button", HeaderElement,"NoteHeaderLogo", "widgets");

					this.card.setStylePictoComponent(HeaderElement,"NoteHeaderLogo","fontSize","25px");
					this.card.setStylePictoComponent(HeaderElement,"NoteHeaderLogo","marginRight","0px");
					this.card.setStylePictoComponent(HeaderElement,"NoteHeaderLogo","color","green");
					this.card.setStylePictoComponent(HeaderElement,"NoteHeaderLogo","alignItems","center");*/



	}



	CloseMe(){

		let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'NoteRemove'}});
		window.dispatchEvent(LinkEvent);

	}


}

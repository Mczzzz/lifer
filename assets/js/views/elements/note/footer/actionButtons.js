import superViews from "../../../super/views.js";

import Card from "../../card.js";

export default class ActionButtons extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path);


		this.init();
		
	}


	init(){

		this.card = new Card(this.container,'NoteFooterCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "transparent");


			let FooterElement   = this.card.setElement("footer");
			this.card.setStyleElement(FooterElement,"justifyContent","flex-start");

					this.card.push("Button", FooterElement,"footerPhoto", "camera_alt");

					this.card.setStyleComponent(FooterElement,"footerPhoto","fontSize","25px");
					this.card.setStyleComponent(FooterElement,"footerPhoto","color","green");
					this.card.setStyleComponent(FooterElement,"footerPhoto","alignItems","center");


					this.card.push("Button", FooterElement,"footerGallery", "photo");

					this.card.setStyleComponent(FooterElement,"footerGallery","fontSize","25px");
					this.card.setStyleComponent(FooterElement,"footerGallery","color","green");
					this.card.setStyleComponent(FooterElement,"footerGallery","alignItems","center");


					this.card.push("Button", FooterElement,"footerNumbers", "looks_5");

					this.card.setStyleComponent(FooterElement,"footerNumbers","fontSize","25px");
					this.card.setStyleComponent(FooterElement,"footerNumbers","color","green");
					this.card.setStyleComponent(FooterElement,"footerNumbers","alignItems","center");


	}


}

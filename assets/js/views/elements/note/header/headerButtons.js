import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class HeaderButtons extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);


		this.init();
		
	}


	init(){

		this.card = new Card('Card', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "transparent");


			this.HeaderElement   = this.card.setElement("Header");
			this.card.setStyleElement(this.HeaderElement,"justifyContent","space-between");

					let HeaderBackButton = this.card.push("Button", this.HeaderElement,"Back", "keyboard_backspace");

					this.card.setStylePictoComponent(this.HeaderElement,"Back","fontSize","25px");
					this.card.setStylePictoComponent(this.HeaderElement,"Back","color","green");
					this.card.setStylePictoComponent(this.HeaderElement,"Back","alignItems","center");

					HeaderBackButton.getContainer().addEventListener("click",()=>this.CloseMe());




				if(this.Lifer.getData('Note',"This").note.guid != false){

					this.showTitle();


				}




				/*	this.card.push("Button", HeaderElement,"NoteHeaderLogo", "widgets");

					this.card.setStylePictoComponent(HeaderElement,"NoteHeaderLogo","fontSize","25px");
					this.card.setStylePictoComponent(HeaderElement,"NoteHeaderLogo","marginRight","0px");
					this.card.setStylePictoComponent(HeaderElement,"NoteHeaderLogo","color","green");
					this.card.setStylePictoComponent(HeaderElement,"NoteHeaderLogo","alignItems","center");*/



	}



	showTitle(text = ""){

		console.log('in show title');

		let TheTitle = this.card.push("Text", this.HeaderElement,"Title", text);

		this.card.setAttributeComponent(this.HeaderElement,"Title","placeholder","Titre...");

		this.card.setStyleComponent(this.HeaderElement,"Title","fontSize","12px");
		this.card.setStyleComponent(this.HeaderElement,"Title","color","grey","all");
		this.card.setStyleComponent(this.HeaderElement,"Title","margin","0px 5px 5px 5px");
		this.card.setStyleComponent(this.HeaderElement,"Title","fontWeight","bold");
		this.card.setStyleComponent(this.HeaderElement,"Title","width","100%");


	}







	CloseMe(){

		let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'NoteRemove'}});
		window.dispatchEvent(LinkEvent);

	}


}

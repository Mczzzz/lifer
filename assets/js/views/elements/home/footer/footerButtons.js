import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class FooterButtons extends superViews{
	

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


			let Elt = this.card.setElement("Element");
			this.card.setStyleElement(Elt,"justifyContent","flex-start");



				let StartNote = this.card.push("Button", Elt,"AddNote", "note_add");

					this.card.setStylePictoComponent(Elt,"AddNote","fontSize","25px");
					this.card.setStylePictoComponent(Elt,"AddNote","marginRight","0px");
					this.card.setStylePictoComponent(Elt,"AddNote","color","green");
					this.card.setStylePictoComponent(Elt,"AddNote","alignItems","center");

					StartNote.getContainer().addEventListener("click",()=>this.StartNote());



					///////////////
					this.card.push("Button", Elt,"sep1", "more_vert");

					this.card.setStylePictoComponent(Elt,"sep1","fontSize","25px");
					this.card.setStylePictoComponent(Elt,"sep1","margin","5px");
					this.card.setStylePictoComponent(Elt,"sep1","color","#cfcfcf");
					this.card.setStylePictoComponent(Elt,"sep1","alignItems","center");
					//////////////





				let FooterObjectButton = this.card.push("Button", Elt,"toObjects", "widgets");

					this.card.setStylePictoComponent(Elt,"toObjects","fontSize","25px");
					this.card.setStylePictoComponent(Elt,"toObjects","color","green");
					this.card.setStylePictoComponent(Elt,"toObjects","alignItems","center");

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

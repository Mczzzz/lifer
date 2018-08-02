import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";

export default class FooterButtons extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path);


		this.init();
		
	}


	init(){

		this.card = new Card(this.container,'ObjectsFooterCard', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("background", "transparent");


			this.ObjectsFooterElement   = this.card.setElement("ObjectsFooterElement");
			this.card.setStyleElement(this.ObjectsFooterElement,"justifyContent","flex-start");


					let StartNote = this.card.push("Button", this.ObjectsFooterElement,"addNote", "note_add");

					this.card.setStyleComponent(this.ObjectsFooterElement,"addNote","fontSize","25px");
					this.card.setStyleComponent(this.ObjectsFooterElement,"addNote","color","green");
					this.card.setStyleComponent(this.ObjectsFooterElement,"addNote","alignItems","center");

					StartNote.addEventListener("click",()=>this.StartNote());


					///////////////
					this.card.push("Button", this.ObjectsFooterElement,"separator", "more_vert");

					this.card.setStyleComponent(this.ObjectsFooterElement,"separator","fontSize","25px");
					this.card.setStyleComponent(this.ObjectsFooterElement,"separator","margin","5px");
					this.card.setStyleComponent(this.ObjectsFooterElement,"separator","color","#cfcfcf");
					this.card.setStyleComponent(this.ObjectsFooterElement,"separator","alignItems","center");
					//////////////


					this.card.push("Button", this.ObjectsFooterElement,"addChild", "add_circle");

					this.card.setStyleComponent(this.ObjectsFooterElement,"addChild","fontSize","25px");
					this.card.setStyleComponent(this.ObjectsFooterElement,"addChild","color","green");
					this.card.setStyleComponent(this.ObjectsFooterElement,"addChild","alignItems","center");



					this.card.push("Button", this.ObjectsFooterElement,"renameChild", "create");

					this.card.setStyleComponent(this.ObjectsFooterElement,"renameChild","fontSize","25px");
					this.card.setStyleComponent(this.ObjectsFooterElement,"renameChild","color","orange");
					this.card.setStyleComponent(this.ObjectsFooterElement,"renameChild","alignItems","center");


					this.card.push("Button", this.ObjectsFooterElement,"removeChild", "remove_circle");

					this.card.setStyleComponent(this.ObjectsFooterElement,"removeChild","fontSize","25px");
					this.card.setStyleComponent(this.ObjectsFooterElement,"removeChild","color","red");
					this.card.setStyleComponent(this.ObjectsFooterElement,"removeChild","alignItems","center");




	}

	StartNote(){

		let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'Note'}});
		window.dispatchEvent(LinkEvent);

	}

}
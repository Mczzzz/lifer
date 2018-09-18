import superViews from "../../../super/views.js";

import Card from "../../../ui/card.js";


export default class Text extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();
		
	}

	init(){

		this.form();

	}


	form(){

		this.card = new Card('NoteEmptyCardText_'+this.ClassId, this.path);
		this.card.setId(0);
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("boxShadow", "0px -2px 12px #BBB");
		this.card.setStyle("background", "white");


		this.EmptyElement = this.card.setElement("EmptyText_"+this.ClassId);
		this.card.setStyleElement(this.EmptyElement,"justifyContent","flex-start");

		let TheTextElt = this.card.push("Text", this.EmptyElement,"mainNewInput_"+this.ClassId, "");

		this.card.setStyleComponent(this.EmptyElement,"mainNewInput_"+this.ClassId,"fontSize","18.5px");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput_"+this.ClassId,"color","black","property");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput_"+this.ClassId,"margin","0px 5px 5px 5px");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput_"+this.ClassId,"fontWeight","normal");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput_"+this.ClassId,"flex",1);

		let TheSaveButton = this.card.push("Button", this.EmptyElement,"mainNewButton_"+this.ClassId,"arrow_forward");

		this.card.setStyleComponent(this.EmptyElement,"mainNewButton_"+this.ClassId,"alignItems","flex-end");

		this.card.setStylePictoComponent(this.EmptyElement,"mainNewButton_"+this.ClassId,"fontSize","25px");
		this.card.setStylePictoComponent(this.EmptyElement,"mainNewButton_"+this.ClassId,"marginRight","0px");
		this.card.setStylePictoComponent(this.EmptyElement,"mainNewButton_"+this.ClassId,"color","green");

		TheSaveButton.getContainer().addEventListener("click",()=>this.parentThis.saveResource(this.card,this.EmptyElement,TheTextElt));


	}

}
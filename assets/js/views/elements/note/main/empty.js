import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";


export default class Empty extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();
		
	}


	init(){

		this.active = false;

	}



	text(){

		this.card = new Card('NoteEmptyCardText', this.path);
		this.card.setId(0);
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("boxShadow", "0px -2px 12px #BBB");
		this.card.setStyle("background", "white");


		this.EmptyElement = this.card.setElement("Empty");
		this.card.setStyleElement(this.EmptyElement,"justifyContent","flex-start");

		let TheTextElt = this.card.push("Text", this.EmptyElement,"mainNewInput", "");

		this.card.setStyleComponent(this.EmptyElement,"mainNewInput","fontSize","18.5px");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput","color","black","property");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput","margin","0px 5px 5px 5px");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput","fontWeight","normal");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput","flex",1);

		let TheSaveButton = this.card.push("Button", this.EmptyElement,"mainNewButton","arrow_forward");

		this.card.setStyleComponent(this.EmptyElement,"mainNewButton","alignItems","flex-end");

		this.card.setStylePictoComponent(this.EmptyElement,"mainNewButton","fontSize","25px");
		this.card.setStylePictoComponent(this.EmptyElement,"mainNewButton","marginRight","0px");
		this.card.setStylePictoComponent(this.EmptyElement,"mainNewButton","color","green");

		TheSaveButton.getContainer().addEventListener("click",()=>this.saveResource(TheTextElt));

		this.active = this.card;

	}



	number(){

		this.card = new Card('NoteEmptyCardNumber', this.path);
		this.card.setId(0);
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("boxShadow", "0px -2px 12px #BBB");
		this.card.setStyle("background", "white");


		this.EmptyElement = this.card.setElement("Empty");
		this.card.setStyleElement(this.EmptyElement,"justifyContent","flex-start");

		let TheTextElt = this.card.push("Text", this.EmptyElement,"mainNewInput", "");

		this.card.setAttributeComponent(this.EmptyElement,"mainNewInput","placeholder","Légende...");

		this.card.setStyleComponent(this.EmptyElement,"mainNewInput","fontSize","18.5px");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput","color","black","property");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput","margin","0px 5px 5px 5px");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput","fontWeight","normal");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput","flex",1);

		let TheSaveButton = this.card.push("Button", this.EmptyElement,"mainNewButton","arrow_forward");

		this.card.setStyleComponent(this.EmptyElement,"mainNewButton","alignItems","flex-end");

		this.card.setStylePictoComponent(this.EmptyElement,"mainNewButton","fontSize","25px");
		this.card.setStylePictoComponent(this.EmptyElement,"mainNewButton","marginRight","0px");
		this.card.setStylePictoComponent(this.EmptyElement,"mainNewButton","color","green");

		TheSaveButton.getContainer().addEventListener("click",()=>this.saveResource(TheTextElt));

		this.active = this.card;

	}






	show(type){

		if(this.active != false){

			this.active.getContainer().remove();

		}
		

		switch (type){

			case 'text':

				this.text();

			break;

			case 'number':

				this.number();

			break;

			//default:

		}






	}





	saveResource(TheTextElt){

		let NoteResource = this.getObjectThisfromPath("Note/mainNote/noteMainResources");

		if(TheTextElt.getContainer().innerHTML.length > 0){

			let res = {};
			res.text = TheTextElt.getContainer().innerHTML;

			TheTextElt.getContainer().innerHTML = "";
			TheTextElt.getContainer().focus();
//a revoir car pas très propre, l'objet texte devrait comprendre qu'il est vide et il devrait se setter tous seul.
			this.card.setStyleComponent(this.EmptyElement,"mainNewInput","color",TheTextElt.placeHodelColor,"element");

			NoteResource.createCard(res);

		}else{

			TheTextElt.getContainer().focus();
			this.card.setAttributeComponent(this.EmptyElement,"mainNewInput","placeholder","Tapes un truc :) ...");
			this.card.setStyleComponent(this.EmptyElement,"mainNewInput","color","red","element");

		}
		

	}







}
import superViews from "../../common/super/views.js";

import Card from "../../common/ui/card.js";


export default class Empty extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();
		
	}


	init(){

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
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput","color","blue","element");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput","margin","0px 5px 5px 5px");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput","fontWeight","normal");
		this.card.setStyleComponent(this.EmptyElement,"mainNewInput","flex",1);

		let TheSaveButton = this.card.push("Button", this.EmptyElement,"mainNewButton","arrow_forward");

		this.card.setStyleComponent(this.EmptyElement,"mainNewButton","alignItems","flex-end");

		this.card.setStylePictoComponent(this.EmptyElement,"mainNewButton","fontSize","25px");
		this.card.setStylePictoComponent(this.EmptyElement,"mainNewButton","marginRight","0px");
		this.card.setStylePictoComponent(this.EmptyElement,"mainNewButton","color","green");

		TheSaveButton.addEventListener("click",()=>this.saveResource(TheTextElt));


	}


	saveResource(TheTextElt){

		let NoteResource = this.Lifer.getData("Note/mainNote/noteMainResources", "This");

		if(TheTextElt.innerHTML.length > 0){

			let res = {};
			res.text = TheTextElt.innerHTML;

			TheTextElt.innerHTML = "";
			TheTextElt.focus();

			NoteResource.createCard(res);

		}else{

			TheTextElt.focus();
			this.card.setAttributeComponent(this.EmptyElement,"mainNewInput","placeholder","Tapes un truc :) ...");
			this.card.setStyleComponent(this.EmptyElement,"mainNewInput","color","red","element");

		}
		

	}


}
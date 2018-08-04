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


		let EmptyElement = this.card.setElement("Empty");
		this.card.setStyleElement(EmptyElement,"justifyContent","flex-start");

		this.card.push("Text", EmptyElement,"mainNewInput", "");

		this.card.setStyleComponent(EmptyElement,"mainNewInput","fontSize","18.5px");
		this.card.setStyleComponent(EmptyElement,"mainNewInput","color","black",true);
		this.card.setStyleComponent(EmptyElement,"mainNewInput","margin","0px 5px 5px 5px");
		this.card.setStyleComponent(EmptyElement,"mainNewInput","fontWeight","normal");
		this.card.setStyleComponent(EmptyElement,"mainNewInput","flex",1);

		let TheSaveButton = this.card.push("Button", EmptyElement,"mainNewButton","arrow_forward");

		this.card.setStyleComponent(EmptyElement,"mainNewButton","alignItems","flex-end");

		this.card.setStylePictoComponent(EmptyElement,"mainNewButton","fontSize","25px");
		this.card.setStylePictoComponent(EmptyElement,"mainNewButton","marginRight","0px");
		this.card.setStylePictoComponent(EmptyElement,"mainNewButton","color","green");

		TheSaveButton.addEventListener("click",()=>this.saveResource(TheSaveButton));


	}


	saveResource(TheSaveButton){

		console.log("in save Resource");
		let NoteResource = this.Lifer.getData("Note/mainNote/noteMainResources", "This");

		let res = {};
		res.text = TheSaveButton.innerHTML;

		NoteResource.createCard(res);

	}


}
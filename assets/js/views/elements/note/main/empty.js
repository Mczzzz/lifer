import superViews from "../../common/super/views.js";

import Text   from "./empty/text.js";
import Number from "./empty/number.js";


export default class Empty extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();
		
	}


	init(){

		this.active = false;

	}



	text(){

		let text = new Text("EmptyTextForm", this.path);
		this.active = text;

	}



	number(){

		let number = new Number("EmptyNumberForm", this.path);
		this.active = number;

	}






	show(type){

		console.log("INNNN SHOWWW EMPTY");		


/*  width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position: absolute;
     -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration: 2s;
    -webkit-transition-delay: 0.5s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration: 2s;
    transition-delay: 0.5s;
    transition-timing-function: linear;*/


    	this.Lifer.getData('Note/mainNote/noteMainTitle/NoteTitleCard',"This").setStyle("height", "0%");
    	this.Lifer.getData('Note/mainNote/noteMainTitle/NoteTitleCard',"This").setStyle("height", "100px");


		//this.Lifer.getData('Note/mainNote/noteMainTitle/NoteTitleCard',"This").setStyle("display", "none");







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




	saveResource(card,Element, TheTextElt){

		let NoteResource = this.getObjectThisfromPath("Note/mainNote/noteMainResources");

		if(TheTextElt.getContainer().innerHTML.length > 0){

			let res = {};
			res.text = TheTextElt.getContainer().innerHTML;

			TheTextElt.getContainer().innerHTML = "";
			TheTextElt.getContainer().focus();
//a revoir car pas très propre, l'objet texte devrait comprendre qu'il est vide et il devrait se setter tous seul.
			card.setStyleComponent(Element,"mainNewInput","color",TheTextElt.placeHodelColor,"element");

			NoteResource.createCard(res);

		}else{

			TheTextElt.getContainer().focus();
			card.setAttributeComponent(Element,"mainNewInput","placeholder","Tapes un truc :) ...");
			card.setStyleComponent(Element,"mainNewInput","color","red","element");

		}
		

	}







}
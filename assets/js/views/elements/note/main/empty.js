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


		//on fige la taille pour les transitions
    	let TitleCard = this.Lifer.getData('Note/mainNote/noteMainTitle/NoteTitleCard',"This");
    	TitleCard.setStyle("height", TitleCard.getContainerRect("height")+"px");
    	console.log("top");
    	let top = TitleCard.getContainerRect("top");

    	TitleCard.setStyle("position","absolute");
		TitleCard.setStyle("width", "100%");
		TitleCard.setStyle("top", -20+top+"px");
		TitleCard.setStyle("left", "0px");
		

    	
    	console.log("on passe sur la reactivation de l'animation");
		//TitleCard.setStyle("transitionDuration", "0.5s");
    	//TitleCard.setStyle("transitionDelay", "0.5s");
    	//TitleCard.setStyle("transitionTimingFunction", "cubic-bezier(0.15, -0.35, 0.98, 1.27)");
    	//TitleCard.setStyle("transitionProperty", "width height background-color font-size left top color");
    	/* property name | duration | timing function | delay */
    	TitleCard.setStyle("transition", "top 0.5s ease-in-out 1s,left 0.5s ease-in-out 1s");
		//transition: margin-right 4s ease-in-out 1s;


		

	   setTimeout(function() {
	        TitleCard.setStyle("top", "0px");
	        TitleCard.setStyle("left", "100px");
	    }, 17);
		
    	//TitleCard.setStyle("top","0px"); 







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
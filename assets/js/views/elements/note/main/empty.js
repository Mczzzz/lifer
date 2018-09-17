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


		//on fige la taille pour les transitions
    	let TitleCard = this.Lifer.getData('Note/mainNote/noteMainTitle/NoteTitleCard',"This");
    	TitleCard.setStyle("height", TitleCard.getContainerRect("height")+"px");
    	console.log("top");
    	let top = TitleCard.getContainerRect("top");

    	TitleCard.setStyle("position","absolute");
	
    	
		let animation = TitleCard.getContainer().animate([
		   {
		   	// from

            width: "100%",
		    opacity: 1,
		    top: top+"px",
		    left:"0px"
		   },
		   {
		   	// to
		   	width: "50%",
		    opacity: 0.2,
		    top : "0px",
		    left: '50px'
		  }

		], { 
		  // timing options
		  duration: 500,
		  easing: 'ease-in',
		  iterations: 1
		});


		let Lifer = this.Lifer

		animation.onfinish = function(){
			TitleCard.getContainer().remove();
			console.log(Lifer);
			Lifer.getData('Note/headerNote/noteHeaderActionButton',"This").showTitle();

		}
		
		
		





		if(this.active != false){

			//this.active.getContainer().remove();

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
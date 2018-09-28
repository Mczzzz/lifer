import superViews from "../../common/super/views.js";

import Ressource from "../../common/ui/ressource.js";


export default class Empty extends superViews{
	

	constructor( MyClass , path, ressource = false){

		super( MyClass , path);

		this.init();
		
	}


	init(){

		this.setStyle("display","none");
		this.setStyle("overflowY" , "scroll");
		this.setStyle("boxShadow","rgb(187, 187, 187) 0px -2px 12px");
		//this.active = false;
		this.Ressource = new Ressource('Resource' , this.path);

	}





	show(type){

		
		//on fige la taille pour les transitions
    	let TitleCard = this.Lifer.getData('Note-Main-Title-Card',"This");
    	TitleCard.setStyle("height", TitleCard.getContainerRect("height")+"px");

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


		let Lifer = this.Lifer;
		let MyThis = this;

		animation.onfinish = function(){
			TitleCard.getContainer().remove();
			Lifer.getData('Note-Header-Action',"This").showTitle(Lifer.getData('Note',"This").note.Title);
			MyThis.setStyle("display","");

		}
		
		this.Ressource.setTarget("Note-Main-Resources");
		this.Ressource.addItem(type);

	}




	saveResource(card,Element, TheTextElt){

		let NoteResource = this.getObjectThisfromPath("Note-Main-Resources");

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
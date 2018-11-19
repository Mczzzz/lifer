import superViews from "../../common/super/views.js";

import Ressource from "../../common/ui/ressource.js";


export default class Empty extends superViews{
	

	constructor( MyClass , path, ressource = false){

		super( MyClass , path);

		this.init();
		
	}


	init(){

		this.setStyle("display","none");
		this.setStyle("boxShadow","rgb(187, 187, 187) 0px -2px 12px");
		//this.setStyle("maxHeight","70%");
		//this.active = false;
		this.Ressource = new Ressource('Ressource' , this.path);

		this.initialSet = 1;

	}



	addRessource(ressourceTmpId=false,title=false){

		this.Ressource.destroyMe();
		this.Ressource = new Ressource('Ressource' , this.path,ressourceTmpId);
		this.initialSet = 1;

	}



	show(type){

		this.addItem(type);

	}

	addItem(type, ItemId = false, data=false, margin = false){

		console.log("in add item empty");
		if(this.initialSet){
			let TitleCard = this.Lifer.getData('Note-Main-Title-Card',"This");
				TitleCard.getContainer().remove();
				this.Lifer.getData('Note-Header-Action',"This").showTitle(this.Lifer.getData('Note',"This").note.Title);
				this.setStyle("display","");
		//		console.log("animation finish");
	   		 this.Ressource.setTarget("Note-Main-Resources");
	   		this.initialSet = 0;
	   	}
	  
	   this.Ressource.addItem(type,ItemId, data, margin);
	   
		//this.Ressource.addItem(type);
	}


/*	saveResource(card,Element, TheTextElt){

		let NoteResource = this.getObjectThisfromPath("Note-Main-Resources");

		if(TheTextElt.getContainer().innerHTML.length > 0){

			let res = {};
			res.text = TheTextElt.getContainer().innerHTML;

			TheTextElt.getContainer().innerHTML = "";
			TheTextElt.getContainer().focus();
//a revoir car pas très propre, l'objet texte devrait comprendre qu'il est vide et il devrait se setter tous seul.
//			card.setStyleComponent(Element,"mainNewInput","color",TheTextElt.placeHodelColor,"element");

			NoteResource.createCard(res);

		}else{

			TheTextElt.getContainer().focus();
	//		card.setAttributeComponent(Element,"mainNewInput","placeholder","Tapes un truc :) ...");
		//	card.setStyleComponent(Element,"mainNewInput","color","red","element");

		}
		

	}*/







}
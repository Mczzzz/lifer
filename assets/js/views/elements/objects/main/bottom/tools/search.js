import superViews from "../../../../common/super/views.js";
import { SearchServices } from '../../../../../../services/search.js';

import Card from "../../../../common/ui/card.js";

export default class search extends superViews{


	constructor(MyClass,path){

		super(MyClass,path);

		this.init();


	}



	init(){

		this.setStyle("background","#e8eff7");
		this.setStyle("padding","5px");

		this.addInput();
		this.linkSearch();

	}



	addInput(){


	let card = new Card('Card', this.path);
				
				card.setStyle("borderWidth", "0px");
				card.setStyle("borderRadius", "0px");
				card.setStyle("margin", "0px");
				card.setStyle("padding", "5px");
				card.setStyle("background", "transparent");


					let ObjectsSearchCardElement  = card.setElement("Element");
					ObjectsSearchCardElement.setStyle("justifyContent","flex-start");

							this.input = card.push("Text", ObjectsSearchCardElement,"ObjectsSearchCardElementItem", "");

							card.setAttributeComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","placeholder","Recherche...");

							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","fontSize","15px");
							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","border","1px solid silver");
							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","borderRadius","5px");
							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","background","white");
							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","margin","0px");
							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","padding","10px");
							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","width","100%");
							//limiter la largeur
							//limiter a une ligne
							//changer la couleur du texte

	}


	linkSearch(){

		SearchServices.addInput(this.input.getContainer());
		
	}




}
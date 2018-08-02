import superViews from "../../../../common/super/views.js";
import { SearchServices } from '../../../../../../services/search.js';

import Card from "../../../../common/ui/card.js";

export default class search extends superViews{


	constructor(parent,MyClass,path){

		super(parent,MyClass,path);

		this.init();


	}



	init(){

		this.container.style.background = "#e8eff7";
		this.container.style.padding = "5px";

		this.addInput();
		this.linkSearch();

	}



	addInput(){


	let card = new Card(this.container,'ObjectsSearchCard', this.path);
				
				card.setStyle("borderWidth", "0px");
				card.setStyle("borderRadius", "0px");
				card.setStyle("margin", "0px");
				card.setStyle("padding", "5px");
				card.setStyle("background", "transparent");


					let ObjectsSearchCardElement  = card.setElement("ObjectsInfosCardElement");
					card.setStyleElement(ObjectsSearchCardElement,"justifyContent","flex-start");

							this.input = card.push("Text", ObjectsSearchCardElement,"ObjectsSearchCardElementItem", "");

							card.setAttributeComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","placeholder","Recherche...");

							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","fontSize","15px");
							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","border","1px solid silver");
							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","borderRadius","5px");
							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","background","white");
							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","margin","0px");
							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","padding","10px");
							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","width","100%");
							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","width","100%");
							//limiter la largeur
							//limiter a une ligne
							//changer la couleur du texte

	}


	linkSearch(){

		console.log("linkSearch");
		console.log(this.input);

		let res = {};

		res.element = this.input;

		SearchServices.addInput(res);
	}




}
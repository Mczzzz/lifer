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


					let ObjectsSearchCardElement  = card.setElement("ObjectsInfosCardElement_" + info.infos.id);
					card.setStyleElement(ObjectsInfosCardElement,"justifyContent","flex-start");

							card.push("Text", ObjectsSearchCardElement,"ObjectsSearchCardElementItem", "");

							card.setAttributeComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","placeholder","Recherche...");

							card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","fontSize","15px");
							//card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","alignItems","center");
							//card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","color","white");
							//card.setStyleComponent(ObjectsSearchCardElement,"ObjectsSearchCardElementItem","alignItems","center");


/*		this.input = document.createElement("input");
		this.input.className = "toolsInput";
		this.input.type = "text";
		this.input.placeholder   = 'Recherche...';
		this.input.style.padding   = '5px';
		this.input.style.borderRadius   = '5px';
		this.input.style.border   = '1px solid silver';
		this.input.style.height   = '40px';
		this.input.style.boxSizing = 'border-box';
		this.input.style.width   = '100%';

		this.container.append(this.input);*/

	}


	linkSearch(){

		let res = {};

		res.element = this.input;

		SearchServices.addInput(res);
	}




}
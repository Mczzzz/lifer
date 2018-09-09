import superViews from "../../../../common/super/views.js";

import Card from "../../../../common/ui/card.js";


export default class UnitSelector extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();
		
	}

	init(){


		this.setStyle("position", "absolute");
		this.setStyle("top", "10%");
		this.setStyle("left", "5%");
		this.setStyle("width", "90%");
		this.setStyle("height", "70%");
		this.setStyle("background", "grey");
		this.setStyle("display", "flex");
		this.setStyle("flexWrap", "wrap");
		this.setStyle("justifyContent", "center");
		this.setStyle("alignItems", "center");
		this.setStyle("borderRadius", "30px");

		let Types = this.Lifer.getData("Unity","Types");


	     for (let item of Types) {


	     	this.parseType(item);

	      }




	}


	parseType(item){


		let card = new Card('PUPUnitselector'+item.id, this.path);
		card.setStyle("width", "30%");

		let ElementUnitPicto = card.setElement("ElementUnitPicto"+item.id);
		card.setStyleElement(ElementUnitPicto,"justifyContent","center");
		card.push("Button", ElementUnitPicto,"unitSelect"+item.id, {"picto" : item.symbol, "fontType" : "fas"});
		card.setStylePictoComponent(ElementUnitPicto,"unitSelect"+item.id,"marginRight","0px");

		//////////////

		let ElementUnit = card.setElement("ElementUnitselect"+item.id);
		card.setStyleElement(ElementUnit,"justifyContent","center");
		let TheTextElt = card.push("Text", ElementUnit,"unitSelect"+item.id, item.name);

		card.setStyleComponent(ElementUnit,"unitSelect"+item.id,"fontSize","10px");
		card.setStyleComponent(ElementUnit,"unitSelect"+item.id,"textAlign","center");
		card.setStyleComponent(ElementUnit,"unitSelect"+item.id,"color","black","property");
		card.setStyleComponent(ElementUnit,"unitSelect"+item.id,"margin","10px 5px 5px 5px");
		card.setStyleComponent(ElementUnit,"unitSelect"+item.id,"fontWeight","normal");
		card.setStyleComponent(ElementUnit,"unitSelect"+item.id,"flex",1);




	}


/*	

		//On crée un popup up


		let Types = this.Lifer.getData("Unity","Types");


		this.catSelector = document.createElement("select");


		 let opt = false;

	     for (let item of Types) {

	        opt = document.createElement("option");
	        opt.value = item.id;
	        opt.text = item.name;

	        this.catSelector.add(opt, null);

	      }



		//this.catSelector.style.display = "none";
		this.container.append(this.catSelector);
/*		this.catSelector.focus();
		this.catSelector.click();	
	

		 var evt = new MouseEvent("mousedown", {
		    bubbles: true,
		    cancelable: true,
		    view: window
		  });

	    this.catSelector.dispatchEvent(evt);

		this.catSelector.addEventListener("change", ()=>this.ServImgLoader.importPict(this.camLauncher.files[0]));



*/


}
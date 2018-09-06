import superViews from "../../../common/super/views.js";

import Card from "../../../common/ui/card.js";


export default class Number extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();
		
	}

	init(){

		this.form();
	}


	form(){

		this.card = new Card('NoteEmptyCardNumber', this.path);
		this.card.setId(0);
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("boxShadow", "0px -2px 12px #BBB");
		this.card.setStyle("background", "white");


		this.EmptyElementLegend = this.card.setElement("NumberEmptyLegend");
		this.card.setStyleElement(this.EmptyElementLegend,"justifyContent","flex-start");

		let TheTextElt = this.card.push("Text", this.EmptyElementLegend,"mainNewInput", "");

		this.card.setAttributeComponent(this.EmptyElementLegend,"mainNewInput","placeholder","Légende...");

		this.card.setStyleComponent(this.EmptyElementLegend,"mainNewInput","fontSize","18.5px");
		this.card.setStyleComponent(this.EmptyElementLegend,"mainNewInput","color","black","property");
		this.card.setStyleComponent(this.EmptyElementLegend,"mainNewInput","margin","0px 5px 5px 5px");
		this.card.setStyleComponent(this.EmptyElementLegend,"mainNewInput","fontWeight","normal");
		this.card.setStyleComponent(this.EmptyElementLegend,"mainNewInput","flex",1);




		this.EmptyElementValue = this.card.setElement("NumberEmptyValue");
		this.card.setStyleElement(this.EmptyElementValue,"justifyContent","");

		//////
		let TheValueElt = this.card.push("Input", this.EmptyElementValue,"mainNewValue", "");

		this.card.setStyleComponent(this.EmptyElementValue,"mainNewValue","flex",1);


		this.card.setAttributeInputComponent(this.EmptyElementValue,"mainNewValue","placeholder","0000.000");
		this.card.setAttributeInputComponent(this.EmptyElementValue,"mainNewValue","type","number");

		this.card.setStyleInputComponent(this.EmptyElementValue,"mainNewValue","fontSize","18.5px");
		this.card.setStyleInputComponent(this.EmptyElementValue,"mainNewValue","color","black","property");
		this.card.setStyleInputComponent(this.EmptyElementValue,"mainNewValue","margin","0px 5px 5px 5px");
		this.card.setStyleInputComponent(this.EmptyElementValue,"mainNewValue","width","100%");
		

		//on crée un bouton
		let InutiesTool = this.card.push("Button", this.EmptyElementValue,"mainNewUnitButton","straighten");

		this.card.setStyleComponent(this.EmptyElementValue,"mainNewUnitButton","flex","1.2");
		this.card.setStyleComponent(this.EmptyElementValue,"mainNewUnitButton","marginLeft","15px");

		this.card.setStylePictoComponent(this.EmptyElementValue,"mainNewUnitButton","fontSize","25px");
		this.card.setStylePictoComponent(this.EmptyElementValue,"mainNewUnitButton","marginRight","0px");
		this.card.setStylePictoComponent(this.EmptyElementValue,"mainNewUnitButton","color","green");

		InutiesTool.getContainer().addEventListener("click",()=>this.Startselect());




/*
		///
		let TheSelectElt = this.card.push("Select", this.EmptyElementValue,"mainNewSelect", this.Lifer.getData("Unity","Types"));

		this.card.setStyleComponent(this.EmptyElementValue,"mainNewSelect","flex",1);

		this.card.setStyleInputComponent(this.EmptyElementValue,"mainNewSelect","fontSize","18.5px");
		this.card.setStyleInputComponent(this.EmptyElementValue,"mainNewSelect","color","black","property");
		this.card.setStyleInputComponent(this.EmptyElementValue,"mainNewSelect","margin","0px 5px 5px 5px");
		this.card.setStyleInputComponent(this.EmptyElementValue,"mainNewSelect","fontWeight","normal");

		TheSelectElt.addEventListener("change", (e))



		let TheSaveButton = this.card.push("Button", this.EmptyElementValue,"mainNewButton","arrow_forward");

		this.card.setStyleComponent(this.EmptyElementValue,"mainNewButton","alignItems","flex-end");

		this.card.setStylePictoComponent(this.EmptyElementValue,"mainNewButton","fontSize","25px");
		this.card.setStylePictoComponent(this.EmptyElementValue,"mainNewButton","marginRight","0px");
		this.card.setStylePictoComponent(this.EmptyElementValue,"mainNewButton","color","green");

		TheSaveButton.getContainer().addEventListener("click",()=>this.saveResource(TheTextElt));*/

		/*this.active = this.card;
*/
	}


	Startselect(){


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
		this.catSelector.click();
	
		this.catSelector.addEventListener("change", ()=>this.ServImgLoader.importPict(this.camLauncher.files[0]));


	}






}
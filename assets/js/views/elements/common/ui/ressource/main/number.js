import superViews from "../../../super/views.js";

import Card from "../../../ui/card.js";

import Unitslector from "./number/UnitSelector.js";


export default class Number extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path);

		this.init();


		
	}

	init(){

		this.form();
	}


	form(){

		this.card = new Card('NoteEmptyCardNumber_'+this.ClassId, this.path);
		this.card.setId(0);
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("boxShadow", "0px -2px 12px #BBB");
		this.card.setStyle("background", "transparent");


		this.EmptyElementLegend = this.card.setElement("NumberEmptyLegend_"+this.ClassId);
		this.card.setStyleElement(this.EmptyElementLegend,"justifyContent","flex-start");

		let TheTextElt = this.card.push("Text", this.EmptyElementLegend,"mainNewInput_"+this.ClassId, "");

		this.card.setAttributeComponent(this.EmptyElementLegend,"mainNewInput_"+this.ClassId,"placeholder","Légende...");

		this.card.setStyleComponent(this.EmptyElementLegend,"mainNewInput_"+this.ClassId,"fontSize","18.5px");
		this.card.setStyleComponent(this.EmptyElementLegend,"mainNewInput_"+this.ClassId,"color","black","property");
		this.card.setStyleComponent(this.EmptyElementLegend,"mainNewInput_"+this.ClassId,"margin","0px 5px 5px 5px");
		this.card.setStyleComponent(this.EmptyElementLegend,"mainNewInput_"+this.ClassId,"fontWeight","normal");
		this.card.setStyleComponent(this.EmptyElementLegend,"mainNewInput_"+this.ClassId,"flex",1);




		this.EmptyElementValue = this.card.setElement("NumberEmptyValue_"+this.ClassId);
		this.card.setStyleElement(this.EmptyElementValue,"justifyContent","");

		//////
		let TheValueElt = this.card.push("Input", this.EmptyElementValue,"mainNewValue_"+this.ClassId, "");

		this.card.setStyleComponent(this.EmptyElementValue,"mainNewValue_"+this.ClassId,"flex",1);


		this.card.setAttributeInputComponent(this.EmptyElementValue,"mainNewValue_"+this.ClassId,"placeholder","0000.000");
		this.card.setAttributeInputComponent(this.EmptyElementValue,"mainNewValue_"+this.ClassId,"type","number");

		this.card.setStyleInputComponent(this.EmptyElementValue,"mainNewValue_"+this.ClassId,"fontSize","18.5px");
		this.card.setStyleInputComponent(this.EmptyElementValue,"mainNewValue_"+this.ClassId,"color","black","property");
		this.card.setStyleInputComponent(this.EmptyElementValue,"mainNewValue_"+this.ClassId,"margin","0px 5px 5px 5px");
		this.card.setStyleInputComponent(this.EmptyElementValue,"mainNewValue_"+this.ClassId,"width","100%");
		

		//on crée un bouton
		let InutiesTool = this.card.push("Button", this.EmptyElementValue,"mainNewUnitButton_"+this.ClassId,{"picto" : "fas fa-weight-hanging", "fontType" : "fas"});

		this.card.setStyleComponent(this.EmptyElementValue,"mainNewUnitButton_"+this.ClassId,"flex","1.2");
		this.card.setStyleComponent(this.EmptyElementValue,"mainNewUnitButton_"+this.ClassId,"marginLeft","15px");

		this.card.setStylePictoComponent(this.EmptyElementValue,"mainNewUnitButton_"+this.ClassId,"fontSize","25px");
		this.card.setStylePictoComponent(this.EmptyElementValue,"mainNewUnitButton_"+this.ClassId,"marginRight","0px");
		this.card.setStylePictoComponent(this.EmptyElementValue,"mainNewUnitButton_"+this.ClassId,"color","green");

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

		let US = new Unitslector("popUpUnitSelecter_"+this.ClassId, this.path);

	}






}
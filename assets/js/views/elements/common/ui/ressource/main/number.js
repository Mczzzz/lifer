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

		this.card = new Card('Card_'+this.ClassId, this.path);
		this.card.setId(0);
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("boxShadow", "0px -2px 12px #BBB");
		this.card.setStyle("background", "transparent");
		this.card.setStyle("margin", "5px");
		this.card.setStyle("display", "flex");



		this.Dragger = this.card.setElement("Dragger_"+this.ClassId);
		let drag = this.card.push("Button",this.Dragger,"dragger_"+this.ClassId, "drag_indicator");
		this.card.setAttributeComponent(this.Dragger,"dragger_"+this.ClassId,"draggable", "y");
		drag.setStyle("marginRight","0px");


		this.EmptyElement = this.card.setElement("Legend_"+this.ClassId);
		this.card.setStyleElement(this.EmptyElement,"justifyContent","flex-start");
		this.card.setStyleElement(this.EmptyElement,"flexWrap","wrap");


		let TheTextElt = this.card.push("Text", this.EmptyElement,"Input_"+this.ClassId, "");

		this.card.setAttributeComponent(this.EmptyElement,"Input_"+this.ClassId,"placeholder","Légende...");

		this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"fontSize","18.5px");
		this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"color","black","property");
		this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"margin","0px 5px 5px 5px");
		this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"fontWeight","normal");
		this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"flex","1 1 100%");



		let TheValueElt = this.card.push("Input", this.EmptyElement,"Number_"+this.ClassId, "");

		this.card.setStyleComponent(this.EmptyElement,"Number_"+this.ClassId,"flex","1 1 80%");


		this.card.setAttributeInputComponent(this.EmptyElement,"Number_"+this.ClassId,"placeholder","0000.000");
		this.card.setAttributeInputComponent(this.EmptyElement,"Number_"+this.ClassId,"type","number");

		this.card.setStyleInputComponent(this.EmptyElement,"Number_"+this.ClassId,"fontSize","18.5px");
		this.card.setStyleInputComponent(this.EmptyElement,"Number_"+this.ClassId,"color","black","property");
		this.card.setStyleInputComponent(this.EmptyElement,"Number_"+this.ClassId,"margin","0px 5px 5px 5px");
		this.card.setStyleInputComponent(this.EmptyElement,"Number_"+this.ClassId,"width","100%");
		

		//on crée un bouton
		let InutiesTool = this.card.push("Button", this.EmptyElement,"Unit_"+this.ClassId,{"picto" : "fas fa-weight-hanging", "fontType" : "fas"});

		this.card.setStyleComponent(this.EmptyElement,"Unit_"+this.ClassId,"flex","1.2");
		this.card.setStyleComponent(this.EmptyElement,"Unit_"+this.ClassId,"marginLeft","15px");

		this.card.setStylePictoComponent(this.EmptyElement,"Unit_"+this.ClassId,"fontSize","25px");
		this.card.setStylePictoComponent(this.EmptyElement,"Unit_"+this.ClassId,"marginRight","0px");
		this.card.setStylePictoComponent(this.EmptyElement,"Unit_"+this.ClassId,"color","green");

		InutiesTool.getContainer().addEventListener("click",()=>this.Startselect());
		//////
		




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
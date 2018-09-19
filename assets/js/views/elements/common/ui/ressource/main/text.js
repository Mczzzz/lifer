import superViews from "../../../super/views.js";

import Card from "../../../ui/card.js";


export default class Text extends superViews{
	

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
		this.card.setStyle("background", "linear-gradient(45deg, #FCE94F 0%, #F4F14C 100%)");
		this.card.setStyle("margin", "5px");


		this.EmptyElement = this.card.setElement("Text_"+this.ClassId);
		this.card.setStyleElement(this.EmptyElement,"justifyContent","flex-start");
		this.card.setStyleElement(this.EmptyElement,"alignItems","center");



		let TheTextElt = this.card.push("Text", this.EmptyElement,"Input_"+this.ClassId, "");

		this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"fontSize","18.5px");
		this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"color","#626262","all");
		this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"margin","0px");
		this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"fontWeight","normal");
		this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"flex",1);

	/*	let TheSaveButton = this.card.push("Button", this.EmptyElement,"Button_"+this.ClassId,"arrow_forward");

		this.card.setStyleComponent(this.EmptyElement,"Button_"+this.ClassId,"alignItems","flex-end");

		this.card.setStylePictoComponent(this.EmptyElement,"Button_"+this.ClassId,"fontSize","25px");
		this.card.setStylePictoComponent(this.EmptyElement,"Button_"+this.ClassId,"marginRight","0px");
		this.card.setStylePictoComponent(this.EmptyElement,"Button_"+this.ClassId,"color","green");

		TheSaveButton.getContainer().addEventListener("click",()=>this.parentThis.saveResource(this.card,this.EmptyElement,TheTextElt));*/


	}


	Draggable(params){

		let dragButton = this.card.push("Button",this.EmptyElement,"dragger_"+this.ClassId, "drag_indicator");

			console.log("dragButto");
			console.log(dragButton);
		dragButton.setAttributeComponent(this.EmptyElement,"dragger_"+this.ClassId,"draggable", params);


	}



}
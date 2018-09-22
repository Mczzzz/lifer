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
		this.card.setStyle("borderRadius", "12px 0px 6px 12px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "10px");
		this.card.setStyle("boxShadow", "rgb(212, 212, 212) 2px 2px 2px");
		this.card.setStyle("background", "linear-gradient(45deg, #FCE94F 0%, #F4F14C 100%)");
		this.card.setStyle("margin", "5px");
		this.card.setStyle("display", "flex");
		this.card.getContainer().addEventListener("click",()=>this.select());


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


	draggable(path,ancestorMethod){


		this.dragAncestor = {};
		this.dragAncestor.path = path;
		this.dragAncestor.method = ancestorMethod;
					             									  //prepend
		let dragElement = this.card.setElement("dragger_"+this.ClassId,true);
		this.dragButton = this.card.push("Button",dragElement,"dragger_"+this.ClassId, "drag_indicator");
		this.dragButton.setStyle("opacity", "0.3");

		this.dragButton.initTouch(this.path,"ancestorCallBack");
		//dragButton.setAttributeComponent(this.EmptyElement,"dragger_"+this.ClassId,"draggable", params);

	}

	ancestorCallBack(e,type){

		if(type == "start"){

			this.dragButton.setStyle("display","none");
		
		}else if(type == "stop"){

			this.dragButton.setStyle("display","");

		}
		

		let ancestor = this.getObjectThisfromPath(this.dragAncestor.path);
		ancestor[this.dragAncestor.method](this,e,type);

	}

	select(){

		this.card.setStyle("boxShadow", "inset rgb(0, 0, 0) 0px 0px 0px 1px");

	}



}
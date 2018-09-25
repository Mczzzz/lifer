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
		this.card.setStyleElement(this.EmptyElement,"flex",1);


		this.TheTextElt = this.card.push("Text", this.EmptyElement,"Input_"+this.ClassId, "");

		this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"fontSize","18.5px");
		this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"color","#626262","all");
		this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"margin","0px");
		this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"fontWeight","normal");
		//this.card.setStyleComponent(this.EmptyElement,"Input_"+this.ClassId,"flex",1);



	}


	addCollapse(){


		let me = this.getObjectThisfromPath(this.card.path+"-collapser_"+this.ClassId);
		console.log(this.card.path+"-collapser_"+this.ClassId);
		console.log(me);

		if(!me){

			let collapseElement = this.card.setElement("collapser_"+this.ClassId,false);
			this.collapseButton = this.card.push("Button",collapseElement,"collapser_"+this.ClassId, "unfold_more");
			this.collapseButton.setStylePicto("color","grey");
			this.collapseButton.setStylePicto("marginRight","0px");

		}



	}


	focus(first = false){
		console.log('in focus');
		console.log(this.TheTextElt);
		console.log(this.TheTextElt.getContainer());

		this.TheTextElt.getContainer().focus();

/*		if(first){
			let elt = this.TheTextElt;
			setTimeout(function(){  console.log('in function settimeout');elt.getContainer().focus(); }, 1000);	
		}*/


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

/*		if(type == "start"){

			this.dragButton.setStyle("display","none");
		
		}else if(type == "stop"){

			this.dragButton.setStyle("display","");

		}*/
		

		let ancestor = this.getObjectThisfromPath(this.dragAncestor.path);
		ancestor[this.dragAncestor.method](this,e,type);

	}

	select(){

		let style = "rgb(0, 0, 0) 0px 0px 0px 1px inset";

		if(this.card.getContainer().style.boxShadow == style){

			this.card.setStyle("boxShadow", "");

		}else{
			this.card.setStyle("boxShadow", style);
		}

		
		console.log(this.card.getContainer().style.boxShadow);

	}



}
import superViews from "../../../super/views.js";

import Card from "../../../ui/card.js";

import { LoaderImage } from '../../../../../../services/LoaderImage.js';

export default class Image extends superViews{
	

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
		this.card.setStyle("background", "linear-gradient(45deg, rgb(252, 79, 160) 0%, rgb(244, 149, 76) 100%)");
		this.card.setStyle("margin", "5px");
		this.card.setStyle("display", "flex");



				this.camLauncher = document.createElement("input");
		this.camLauncher.type = "file";
		this.camLauncher.accept = "image/*";

		//if(capture){
			this.camLauncher.capture = "camera";	
		//}

		this.camLauncher.style.display = "none";
		this.container.append(this.camLauncher);
		this.camLauncher.click();
		this.camLauncher.addEventListener("change", ()=>LoaderImage.importPict(this.camLauncher.files[0],this.path));

	}


	addThumb(data){


		this.ImageElement = this.card.setElement("Image_"+this.ClassId);
		let ImageElt = this.card.push("Thumb", this.ImageElement,"Pict_"+this.ClassId, data);
		ImageElt.setStyle("marginRight" , "10px");
		ImageElt.setStyle("display" , "flex");
		ImageElt.setStyle("alignItems" , "center");

		ImageElt.getContainer().addEventListener("click",()=>this.ImageViewer());

		this.addLegend();

	}

	ImageViewer(){

	}



	addLegend(){
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
	}


	draggable(path,ancestorMethod){


		this.dragAncestor = {};
		this.dragAncestor.path = path;
		this.dragAncestor.method = ancestorMethod;
					             									  //prepend
		let dragElement = this.card.setElement("dragger_"+this.ClassId,true);
		let button = this.card.push("Button",dragElement,"dragger_"+this.ClassId, "drag_indicator");
		button.setStyle("opacity", "0.3");

		button.initTouch(this.path,"ancestorCallBack");
		//dragButton.setAttributeComponent(this.EmptyElement,"dragger_"+this.ClassId,"draggable", params);

	}

	ancestorCallBack(e,type){

		let ancestor = this.getObjectThisfromPath(this.dragAncestor.path);
		ancestor[this.dragAncestor.method](this,e,type);

	}





	Startselect(){

		let US = new Unitslector("popUpUnitSelecter_"+this.ClassId, this.path);

	}






}
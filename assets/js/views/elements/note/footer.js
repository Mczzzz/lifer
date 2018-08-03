import superViews from "../common/super/views.js";

import ActionButton from "./footer/actionButtons.js";

export default class Footer extends superViews{
	

	constructor( MyClass , path){

		super( MyClass , path)

		this.init();
		
	}


	init(){


		this.setStyle("background" , "linear-gradient(45deg, rgb(234, 234, 234) 0%, rgb(216, 216, 216) 100%)");
		this.setStyle("height" , "40px");
		this.setStyle("display", "flex");
		this.setStyle("alignItems" , "center");
		this.setStyle("color" , "");

		this.initChilds();

	}



	initChilds(){

		this.ActionButton = new ActionButton("noteFooterActionButton",this.path);

	}

/*		let Photo  = new Button(this.container,"inputPhoto",this.path);
		Photo.setPicto("camera_alt");
		Photo.setStyle("marginLeft",15);

		Photo.getElement().addEventListener("click", (e)=>this.launchPict(true));



		let Gallery = new Button(this.container,"inputGallery",this.path);
		Gallery.setPicto("photo");

		Gallery.getElement().addEventListener("click", (e)=>this.launchPict());




		let OneNumber = new Button(this.container,"inputNumber",this.path);
		OneNumber.setPicto("looks_5");*/







/*	launchPict(capture = false){

		this.camLauncher = document.createElement("input");
		this.camLauncher.type = "file";
		this.camLauncher.accept = "image/*";

		if(capture){
			this.camLauncher.capture = "camera";	
		}

		this.camLauncher.style.display = "none";
		this.container.append(this.camLauncher);
		this.camLauncher.click();

		this.camLauncher.addEventListener("change", (e)=>this.importPict(e));
	}	*/







}
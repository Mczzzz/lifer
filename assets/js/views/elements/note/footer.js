import superViews from "../../super/views.js"

import ActionButton from "./footer/actionButtons.js"

export default class Footer extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path)

		this.init();
		
	}


	init(){


		this.background();

		this.addActionButtons();


	}



	background(){

		this.container.style.background = "linear-gradient(45deg, rgb(234, 234, 234) 0%, rgb(216, 216, 216) 100%)";
		this.container.style.height = "40px";
		this.container.style.display = "flex";
		this.container.style.alignItems = "center";
		this.container.style.color = "";

	}


	addActionButtons(){

		this.ActionButton = new ActionButton(this.container,"noteFooterActionButton",this.path);

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
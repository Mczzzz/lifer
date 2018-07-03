import Header from '../sections/header.js';
import superViews from "../super/views.js"

export default class Note extends superViews{
	

	constructor(parent,MyClass,path){

		super(parent, MyClass , path);

		this.init();

		
	}


	init(){


		this.background();
		this.addHeader();


	}



	background(){

		this.container.style.position = "absolute";
		this.container.style.top = "2px";
		this.container.style.left = "2px";
		this.container.style.height = "100% - 4px";
		this.container.style.width = "100% - 4px";
		this.container.style.display = "flex";
		this.container.style.background = "white";
		this.container.style.boxShadow = "0px 0px 10px 10px green";


	}


	addHeader(){

		let Note = new Header(this.MyClass);
		Note.setBkgdColor("linear-gradient(45deg, rgb(255, 255, 255) 0%, rgb(216, 216, 216) 100%)");
		Note.setHeight(40);
		Note.setBack();
		
	}


}
import superViews from "../super/views.js"

export default class Note extends superViews{
	

	constructor(parent,MyClass,path){

		super(parent, MyClass , path);

		this.init();

		
	}


	init(){


		this.background();



	}



	background(){

		this.container.style.position = "absolute";
		this.container.style.top = "1.5%";
		this.container.style.left = "1.5%";
		this.container.style.height = "97%";
		this.container.style.width = "97%";
		this.container.style.display = "flex";
		this.container.style.background = "blue";


	}


}
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
		this.container.style.height = "100%";
		this.container.style.width = "100%";
		this.container.style.display = "flex";
		this.container.style.background = "blue";


	}


}
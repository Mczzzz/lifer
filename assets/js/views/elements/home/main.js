import superViews from "../common/super/views.js"


export default class Main extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path)

		this.init();
		
	}


	init(){


		this.background();

	}



	background(){

		this.container.style.background = "linear-gradient(45deg, rgb(199, 28, 28) 0%, rgb(216, 216, 216) 100%)";
		this.container.style.flex = 1;
		this.container.style.alignItems = "center";
/*		this.container.style.color = "red";*/

	}


}
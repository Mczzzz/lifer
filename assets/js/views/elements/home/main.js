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

		this.container.style.background = "linear-gradient(45deg, rgb(234, 234, 234) 0%, rgb(216, 216, 216) 100%)";
		this.container.flex = 1;
		this.container.style.alignItems = "center";
		this.container.style.color = "red";

	}


}
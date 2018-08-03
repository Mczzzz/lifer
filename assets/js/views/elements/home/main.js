import superViews from "../common/super/views.js";


export default class Main extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path)

		this.init();
		
	}


	init(){

		this.setStyle("background" , "linear-gradient(45deg, rgb(199, 28, 28) 0%, rgb(216, 216, 216) 100%)");
		this.setStyle("flex" , 1);
		this.setStyle("alignItems" , "center");


	}




}
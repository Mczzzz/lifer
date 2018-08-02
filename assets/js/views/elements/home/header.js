import superViews from "../common/super/views.js"

import HeaderButton from "./header/headerButtons.js"

export default class Header extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path)

		this.init();
		
	}


	init(){


		this.container.style.background = "linear-gradient(45deg, rgb(234, 234, 234) 0%, rgb(216, 216, 216) 100%)";
		this.container.style.alignItems = "center";
		this.container.style.color = "";


		this.initChilds();


	}




	initChilds(){

		this.HeaderButton = new HeaderButton(this.container,"HomeHeaderActionButton",this.path);

	}

}

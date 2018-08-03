import superViews from "../common/super/views.js";

import HeaderButton from "./header/headerButtons.js";

export default class Header extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path)

		this.init();
		
	}


	init(){


		this.setStyle("background" , "linear-gradient(45deg, rgb(234, 234, 234) 0%, rgb(216, 216, 216) 100%)");

		this.setStyle("alignItems" , "center");
		this.setStyle("color" , "");

		this.initChilds();


	}


	initChilds(){

		this.HeaderButton = new HeaderButton(this.container,"noteHeaderActionButton",this.path);

	}

}


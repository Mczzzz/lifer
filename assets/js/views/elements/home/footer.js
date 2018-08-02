import superViews from "../common/super/views.js";

import FooterButton from "./footer/footerButtons.js";

export default class Footer extends superViews{
	

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

		this.FooterButton = new FooterButton(this.container,"HomeFooterActionButton",this.path);

	}

}

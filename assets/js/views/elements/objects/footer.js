import superViews from "../common/super/views.js";

import FooterButton from "./footer/footerButtons.js";

export default class Footer extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path)

		this.init();
		
	}


	init(){


		this.setStyle("background" , "linear-gradient(45deg, rgb(234, 234, 234) 0%, rgb(216, 216, 216) 100%)");

		this.setStyle("alignItems" , "center");
		this.setStyle("color" , "");


		this.addActionButtons();


	}





	addActionButtons(){

		this.FooterButton = new FooterButton(this.container,"ObjectsFooterActionButton",this.path);

	}

}
import superViews from "../../super/views.js"

//import ActionButton from "./footer/actionButtons.js"

export default class Header extends superViews{
	

	constructor(parent, MyClass , path){

		super(parent, MyClass , path)

		this.init();
		
	}


	init(){


		this.background();

		this.addActionButtons();


	}



	background(){

		this.container.style.background = "linear-gradient(45deg, rgb(234, 234, 234) 0%, rgb(216, 216, 216) 100%)";
		this.container.style.height = "40px";
		this.container.style.display = "flex";
		this.container.style.alignItems = "center";
		this.container.style.color = "";

	}


	addActionButtons(){

	//	this.ActionButton = new ActionButton(this.container,"noteFooterActionButton",this.path);

	}


/*import superViews from "../../super/views.js"
import HeaderCommon from '../../sections/header.js';

export default class Header extends superViews{
	

	constructor(parent, MyClass,path){

		super(parent, MyClass,path);
	
		this.bkgdHF = 'linear-gradient(45deg, rgb(234, 234, 234) 0%, rgb(216, 216, 216) 100%)';

		this.HeaderObject = new HeaderCommon(MyClass);

		console.log('inconstructor note header');


		this.skin();

	}


	skin(){

		this.HeaderObject.setBkgdColor(this.bkgdHF);
    	this.HeaderObject.setBackToHome(this.parent);
    	this.HeaderObject.setIconPage();
    	this.HeaderObject.setHeight(56);


	}


*/
}


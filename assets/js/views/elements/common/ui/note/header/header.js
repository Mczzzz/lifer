import superViews from "../../../super/views.js"
import HeaderCommon from '../../../sections/header.js';

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
    	this.HeaderObject.setBackToHome();
    	this.HeaderObject.setIconPage();
    	this.HeaderObject.setHeight(56);


	}



}


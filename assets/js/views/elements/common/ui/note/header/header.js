import superViews from "../../../elements/common/super/views.js"
import HeaderCommon from '../../common/sections/header.js';

export default class Header extends superViews{
	

	constructor(parent, MyClass,path){

		super(parent, MyClass,path);
	
		this.bkgdHF = 'linear-gradient(45deg, #43A047 0%, #1de9b6 100%)';

		this.HeaderObject = new HeaderCommon('header');




		this.skin();

	}


	skin(){

		this.HeaderObject.setBkgdColor(this.bkgdHF);
    	this.HeaderObject.setBackToHome();
    	this.HeaderObject.setIconPage();


	}



}
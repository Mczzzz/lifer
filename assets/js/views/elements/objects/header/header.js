import HeaderCommon from '../../common/sections/header.js';

export default class Header {
	

	constructor(){
	
		this.bkgdHF = 'linear-gradient(45deg, #43A047 0%, #1de9b6 100%)';

		this.HeaderObject = new HeaderCommon();




		this.skin();

	}


	skin(){

		this.HeaderObject.setBkgdColor(this.bkgdHF);
    	this.HeaderObject.setBackToHome();
    	this.HeaderObject.setIconPage();


	}



}
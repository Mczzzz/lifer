import superViews from "../../elements/common/super/views.js"
import FooterCommon from '../common/sections/footer.js';

export default class Footer extends superViews{
	

	constructor(parent, MyClass,path){

		super(parent, MyClass,path);
	
		this.bkgdHF = 'linear-gradient(45deg, #43A047 0%, #1de9b6 100%)';

		this.FooterObject = new FooterCommon('footer');


		this.skin();

	}


	skin(){

		this.FooterObject.setBkgdColor(this.bkgdHF);


	}



}
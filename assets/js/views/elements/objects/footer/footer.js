import FooterCommon from '../../common/sections/footer.js';

export default class Footer {
	

	constructor(){
	
		this.bkgdHF = 'linear-gradient(45deg, #43A047 0%, #1de9b6 100%)';

		this.FooterObject = new FooterCommon();


		this.skin();

	}


	skin(){

		this.FooterObject.setBkgdColor(this.bkgdHF);


	}



}
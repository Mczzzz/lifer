import layout from '../layout/layout.js';

import Header from '../elements/common/sections/header.js';
import Main from '../elements/common/sections/main.js';
import Tools from '../elements/home/main/bottom/tools/tools.js';
import Footer from '../elements/common/sections/footer.js';

export default class Home extends layout{



	constructor(){

		super();

		this.bkgdHF = 'linear-gradient(45deg, #8e24aa 0%, #ff6e40 100%)';
		this.headerCustom();
		this.mainCustom();
		this.toolsCustom();
		this.footerCustom();

	}


	headerCustom(){

		let HomeHeader = new Header();
		
		HomeHeader.setBkgdColor(this.bkgdHF);

	}


	mainCustom(){

		let HomeMain = new Main();

		HomeMain.setBkgdTopColor('#E8E8E8');
		HomeMain.setBkgdBottomColor('#E8E8E8');

	}

	toolsCustom(){

		let HomeTools = new Tools();



	}

	footerCustom(){

		let HomeFooter = new Footer();
		
		HomeFooter.setBkgdColor(this.bkgdHF);

	}


}
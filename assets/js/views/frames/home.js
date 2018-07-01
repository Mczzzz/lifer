import { Lifer } from '../../services/Lifer.js';
import layout from '../layout/layout.js';

import Header from '../elements/common/sections/header.js';
import Main from '../elements/common/sections/main.js';
import Tools from '../elements/home/main/bottom/tools/tools.js';
import Footer from '../elements/common/sections/footer.js';

export default class Home extends layout{



	constructor(path){

		super();

		let Me = 'home';

		this.Lifer.addMe(path+"/"+Me);

		
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

		HomeMain.setBkgdTopColor('#e8eff7');
		HomeMain.setBkgdBottomColor('#e8eff7');

	}

	toolsCustom(){

		let HomeTools = new Tools();



	}

	footerCustom(){

		let HomeFooter = new Footer();
		
		HomeFooter.setBkgdColor(this.bkgdHF);

	}


}
import { Lifer } from '../../services/Lifer.js';
import superViews from "../elements/common/super/views.js"

import Header from '../elements/home/header.js';
import Main from '../elements/home/main.js';
/*import Main from '../elements/common/sections/main.js';
import Tools from '../elements/home/main/bottom/tools/tools.js';
import Footer from '../elements/common/sections/footer.js';*/

export default class Home extends superViews{



	constructor(parent, MyClass,path){

		super(parent, MyClass,path);


		this.init();

	}


	init(){

		this.container.style.background = 'linear-gradient(45deg, #8e24aa 0%, #ff6e40 100%)';

		this.addHeader();
		this.addMain();
/*		this.headerCustom();
		this.mainCustom();
		this.toolsCustom();
		this.footerCustom();
*/

	}


	addHeader(){

		this.Header = new Header(this.container,"HomeHeader",this.path);

	}

	addMain(){

		this.Main = new Main(this.container,"HomeMain",this.path);

	}

/*	headerCustom(){

		let HomeHeader = new Header('header');
		
		HomeHeader.setBkgdColor(this.bkgdHF);

	}*/


	mainCustom(){

		let HomeMain = new Main();

		HomeMain.setBkgdTopColor('#e8eff7');
		HomeMain.setBkgdBottomColor('#e8eff7');

	}

	toolsCustom(){

		let HomeTools = new Tools();



	}

	footerCustom(){

		let HomeFooter = new Footer('footer');
		
		HomeFooter.setBkgdColor(this.bkgdHF);

	}


}
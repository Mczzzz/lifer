import superViews from "../elements/common/super/views.js";

import Header from '../elements/home/header.js';
import Main from '../elements/home/main.js';
import Footer from '../elements/home/footer.js';


export default class Home extends superViews{



	constructor( MyClass,path){

		super( MyClass,path);

		this.init();

	}


	init(){

		//this.container.style.background = 'linear-gradient(45deg, #8e24aa 0%, #ff6e40 100%)';
		this.setStyle("display" , "flex");
		this.setStyle("flexDirection" , "column");
		this.setStyle("height" , "100vh - 56px");

		this.initChilds();

	}


	initChilds(){

		this.Header = new Header("HomeHeader",this.path);

		this.Main = new Main("HomeMain",this.path);

		this.Footer = new Footer("HomeFooter",this.path);

	}


}
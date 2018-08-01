import superViews from "../elements/common/super/views.js"

import Header from '../elements/home/header.js';
import Main from '../elements/home/main.js';
import Footer from '../elements/home/footer.js';


export default class Home extends superViews{



	constructor(parent, MyClass,path){

		super(parent, MyClass,path);


		this.init();

	}


	init(){

		this.container.style.background = 'linear-gradient(45deg, #8e24aa 0%, #ff6e40 100%)';
		this.container.style.display = "flex";
		this.container.style.flexDirection = "column";
		this.container.style.height = "100vh";

		this.addHeader();
		this.addMain();
		this.addFooter();

	}


	addHeader(){

		this.Header = new Header(this.container,"HomeHeader",this.path);

	}

	addMain(){

		this.Main = new Main(this.container,"HomeMain",this.path);

	}

	addFooter(){

		this.Footer = new Footer(this.container,"HomeFooter",this.path);

	}


}
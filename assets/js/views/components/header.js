import Rect from '../elements/rect.js';

export default class Header {
	

		constructor(){

     	
     	this.declareContainer();

        this.addElements();

        return this.container;

	}


	declareContainer(){

		this.container = new PIXI.Container();
		this.container.interactive = true;

	}



	addElements(){

		let rect = new Rect(0xE8E8E8 , 0, 0 , 0 , window.innerWidth , 50);
		this.attach(rect);





	}





	attach(components){

		this.container.addChild(components);

	}



}
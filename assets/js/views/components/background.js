import Rect from '../elements/rect.js';

export default class Background {
	

	constructor( color , liStyle, x , y , width , height ){


		this.declareContainer();

		this.addRect( color , liStyle, x , y , width , height);

		return this.container;
	}


	declareContainer(){

		this.container = new PIXI.Container();
		this.container.interactive = true;

	}





	addRect(color , liStyle, x , y , width , height){

	//console.log('background.js addRect');
		let rect = new Rect(color , liStyle, x , y , width , height);
		this.attach(rect);


	}


	attach(element){

		this.container.addChild(element);

	}



	
}
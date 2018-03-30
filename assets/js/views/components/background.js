import Rect from '../elements/rect.js';

export default class Background {
	

	constructor( color , liStyle, x , y , width , height ){


		this.declarecontainer();

		this.addRect( color , liStyle, x , y , width , height);

	}


	declarecontainer(){

		this.container = new PIXI.Container();
		this.container.interactive = true;

	}





	addRect(color , liStyle, x , y , width , height){

		let rect = new Rect(color , liStyle, x , y , width , height);
		this.attach(rect);


	}


	attach(element){

		this.container.addChild(element);

	}



	
}
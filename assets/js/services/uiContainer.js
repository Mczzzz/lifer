export default class uiContainer{
	



	constructor(x,y,width,height){

		console.log('uicontainer constructor');

		this.width = width;
     	this.height = height; 

		this.declareContainer();

		this.fixePosition(x,y);

		


	}






	declareContainer(){

		this.container = new PIXI.Container();
		this.container.interactive = true;
		//a mettre en param
		this.container.buttonMode = true;

	}




	fixePosition(x,y){

		this.container.x = x;
		this.container.y = y;

	}


	attach(components){

		//console.log(components);
		this.container.addChild(components);

	}


	load(){

		console.log('in load');
		this.addElements();

		return this.container;


	}



}
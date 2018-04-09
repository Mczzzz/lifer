export default class uiContainer{
	



	constructor(x,y,width,height){

		console.log('uicontainer constructor');

		this.width = width;
     	this.height = height; 

     	this.x = x;
     	this.y = y;

		this.declareContainer();

		this.fixePosition(x,y);

		//console.log(class.name);

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

		console.log(this.container);
		this.container.addChild(components);

	}


	load(){

		console.log('in load');
		this.addElements();
		console.log('before return');
		return this.container;


	}



}
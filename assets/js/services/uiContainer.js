export default class uiContainer{
	



	constructor(x,y,width,height){

		console.log('uicontainer constructor');

		this.declareContainer();

		this.fixePosition(x,y);

		this.size(width , height);


	}






	declareContainer(){

		this.container = new PIXI.Container();
	//	this.container.interactive = true;

	}




	fixePosition(x,y){

		this.container.x = x;
		this.container.y = y;

	}


	size(w , h){

		this.container.width = w;
		this.container.height = h;

	}



	attach(components){

		console.log('uicontainer Attach');
		this.container.addChild(components);

	}


	load(){

		console.log('uicontainer load');
		this.addElements();
		console.log(this.container.x);
		console.log(this.container.y);
		console.log('uicontainer before return');
		return this.container;


	}



}
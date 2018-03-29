export default class Adder {
	

	constructor(){




		return this.addButton();


	}



	addButton(){

		this.add = new PIXI.Graphics();
	    this.add.beginFill(0xFF0000);
	    this.add.lineStyle(3,0x999999);
	    this.add.drawCircle(0, 0, 60);
	    this.add.endFill();

	    return new PIXI.Sprite(this.add.generateCanvasTexture());


	}



}
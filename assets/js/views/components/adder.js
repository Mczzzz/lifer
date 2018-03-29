export default class Adder {
	

	constructor(){

		this.container = new PIXI.Container();

		this.drawShadow();
		this.drawCircle();

		return this.container;

	}



	addButton(){

		this.add = new PIXI.Graphics();
	    this.add.beginFill(0xFF0000);
	    this.add.lineStyle(2,0x999999);
	    this.add.drawCircle(0, 0, 30);
	    this.add.endFill();

	    this.spriteButton = new PIXI.Sprite(this.add.generateCanvasTexture());


	}


	drawCircle(){

		this.add = new PIXI.Graphics();
	    this.add.beginFill(0xFF0000);
	    this.add.lineStyle(2,0x999999);
	    this.add.drawCircle(0, 0, 30);
	    this.add.endFill();

	    this.spriteButton = new PIXI.Sprite(this.add.generateCanvasTexture());

	    this.container.addChild(this.spriteButton);

	}


	drawShadow(){



		this.addShadow = new PIXI.Graphics();
	    this.addShadow.beginFill(0xFFFFFF);
	    this.addShadow.lineStyle(0);
	    this.addShadow.drawCircle(0, 0, 60);
	    this.addShadow.endFill();

	    this.spriteShadow = new PIXI.Sprite(this.addShadow.generateCanvasTexture());
	    this.spriteShadow.x = 2;
	    this.spriteShadow.y = 2;

	    this.dropShadowFilter = new PIXI.filters.BlurFilter();
       	this.dropShadowFilter.blur = 30;
		this.spriteShadow.filters = [this.dropShadowFilter];

		this.container.addChild(this.spriteShadow);






	}


}
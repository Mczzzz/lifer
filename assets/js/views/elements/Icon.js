export default class Icon {


	constructor(x,y,texture, tint){



		let element = this.drwPict(x,y,texture, tint);

		return element;
	}


	drwPict(x,y,texture, tint){

 		let addIcon = new PIXI.extras.TilingSprite(texture);
 		addIcon.interactive = true;
 		addIcon.anchor.set(0.5,0.5);
/*     		addIcon.tileScale.x = 2; 
		addIcon.tileScale.y = 2;*/
		addIcon.tint = tint;
		addIcon.x = x;
		addIcon.y = y;
		addIcon.width  = 72;
		addIcon.height = 72;

		return addIcon; 

	}

}


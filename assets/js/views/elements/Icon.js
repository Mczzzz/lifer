import UIContainer from '../../services/uiContainer.js';

export default class Icon extends UIContainer{


	constructor(x,y,w,h,texture, tint){

		super(x,y,w,h);

		this.texture = texture;
		this.tint = tint;

	}


	addElements(){



		this.drwPict();


	}



	drwPict(){

 		let addIcon = new PIXI.extras.TilingSprite(this.texture);
 		addIcon.interactive = true;
 		addIcon.anchor.set(0.5,0.5);
/*     		addIcon.tileScale.x = 2; 
		addIcon.tileScale.y = 2;*/
		addIcon.tint = this.tint;
		addIcon.x = this.x;
		addIcon.y = this.y;
		addIcon.width  = 72;
		addIcon.height = 72;

		this.attach(addIcon);

	}

	drwSelect(){

		let addSelect = new PIXI.Circle(x + 36, y + 36, 40 );


	}

	rmSelect(){


	}
}


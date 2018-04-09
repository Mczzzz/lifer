import UIContainer from '../../services/uiContainer.js';

export default class Icon extends UIContainer{


	constructor(x,y,w,h,texture, tint){

		super(x,y,w,h);

		this.texture = texture;
		this.tint = tint;

	}


	addElements(){

		console.log('addElementIcon');

		this.drwPict();


	}



	drwPict(){

 		let addIcon = new PIXI.extras.TilingSprite(this.texture);
 		addIcon.interactive = true;
 		addIcon.anchor.set(0.5,0.5);
/*     		addIcon.tileScale.x = 2; 
		addIcon.tileScale.y = 2;*/
		addIcon.tint = this.tint;
		addIcon.x = 0;
		addIcon.y = 0;
		addIcon.width  = this.width;
		addIcon.height = this.height;
		console.log('before attach drwPict Icon');
		this.attach(addIcon);

	}

	drwSelect(){

		let addSelect = new PIXI.Circle(this.width / 2, this.height / 2, (this.width / 2) * 1.2 );
		this.attach(addselect);

	}

	rmSelect(){


	}



}


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

		let add = new PIXI.Graphics();
        add.beginFill(0xFF0000);
        add.lineStyle(2,0x999999);
		    add.drawCircle(0, 0, 40);
		add.endFill()

		this.attach(add);

	}

	rmSelect(){


	}



}


import UIContainer from '../../services/uiContainer.js';

export default class Icon extends UIContainer{


	constructor(x,y,w,h,texture, tint){

		super(x,y,w,h);

		this.texture = texture;
		this.tint = tint;

	}


	addElements(){

		console.log('addElementIcon');

		this.drwSelect();
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

		this.select = new PIXI.Graphics();
        this.select.beginFill(0xFF0000,0);
        this.select.lineStyle(10,0xFF0000);
		this.select.drawCircle(0, 0, 40);
		this.select.endFill()

		this.select.alpha = 0;

		this.attach(this.select);

	}

	ChgSelect(){

		if(this.select.alpha == 0){

			this.select.alpha = 1;

		}else{

			this.select.alpha = 0;
		}


	}



}


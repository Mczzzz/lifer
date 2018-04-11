import UIContainer from '../../services/uiContainer.js';

export default class Linky extends UIContainer{


	constructor(x,y,w,h,text){

		super(x,y,w,h);

		this.text = text;


	}


	addElements(){

	//	console.log('addElementIcon');

		this.drwSelect();
		this.drwSelect2();
/*		this.drwRext();
		this.drwText();*/

	}



/*	drwPict(){

 		let addIcon = new PIXI.extras.TilingSprite(this.texture);
 		addIcon.interactive = true;
 		addIcon.anchor.set(0.5,0.5);
     		addIcon.tileScale.x = 2; 
		addIcon.tileScale.y = 2;
		addIcon.tint = this.tint;
		addIcon.x = 0;
		addIcon.y = 0;
		addIcon.width  = this.width;
		addIcon.height = this.height;
		console.log('before attach drwPict Icon');
		this.attach(addIcon);

	}*/

	drwSelect(){


		let rect = new PIXI.Graphics();
        rect.beginFill(0x999999);
        rect.lineStyle(2,0xFFFFFF,0.3);
        rect.drawRoundedRect(0, 0, this.width, this.height, 10);
        rect.endFill();
   		//.anchor.set(0.5);
   		rect.position.x = this.x;
   		rect.position.y = this.y
		this.attach(rect);

	}

	drwSelect2(){


/*		let rect = new PIXI.Graphics();
        rect.beginFill(0x999999);
        rect.lineStyle(2,0xFFFFFF,0.3);
        rect.drawRoundedRect(0, 0, this.width, this.height, 10);
        rect.endFill();
   		//.anchor.set(0.5);
   		rect.position.x = this.x + 200;
   		rect.position.y = this.y + 200;
		this.attach(rect);*/

		let graphics = new PIXI.Graphics();
		graphics.lineStyle(2, 0xFF00FF, 1);
		graphics.arc(200, 200, 100, 0, Math.PI);
		this.attach(graphics);



	}


	ChgSelect(){

		if(this.select.alpha == 0){

			this.select.alpha = 1;

		}else{

			this.select.alpha = 0;
		}


	}



}


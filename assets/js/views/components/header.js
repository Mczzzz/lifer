import moment from 'moment-es6';
import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';


export default class Header  extends UIContainer{
	

	constructor(x,y,w,h){
	
		console.log('header before super');
		super(x,y,w,h);

		moment.locale('fr');
     	


	}


	addElements(){

		this.addBkgd();

		this.addDate();

		this.addMenu();

	}


	addBkgd(){

		this.addShadowBackground();
		this.addBackground();

	}


	addShadowBackground(){

		let Srect = new Rect(0x000000 , 0, 0 , 0 , window.innerWidth , 100);

		let dropShadowFilter = new PIXI.filters.BlurFilter();
	    dropShadowFilter.blur = 3;

		Srect.filters = [dropShadowFilter];
		this.attach(Srect);
	}


	addBackground(){

		let rect = new Rect(0x0081cb , 0, 0 , 0 , window.innerWidth , 100);
		this.attach(rect);


	}



	addDate(){

		this.addLiteralDate();
		this.addWeekDate();

	}


	addLiteralDate(){

		let text = new PIXI.Text(moment().format('dddd Do MMMM YYYY'),{fontFamily : 'Arial', fontSize: 30, fill : 0xFFFFFF, align : 'center'});
		text.x = window.innerWidth - text.width - 10;
		text.y = 10;
		this.attach(text);

	}



	addWeekDate(){


		let text = new PIXI.Text("S: "+ moment().format('WW'),{fontFamily : 'Arial', fontSize: 24, fill : 0xFFFFFF, align : 'center'});
		text.x = window.innerWidth - text.width - 10;
		text.y = 40;
		this.attach(text);

	}


	addMenu(){


	this.loader = PIXI.loader;
		this.loader.add('hamburger', 'assets/glyphs/ic_menu_white_36px.svg');

		this.loader.load((loader, resources) => {
     		this.hamburger = new PIXI.extras.TilingSprite(resources.hamburger.texture);
     		this.hamburger.interactive = true;
     		this.hamburger.anchor.set(0.5,0.5);
/*     		this.hamburger.tileScale.x = 2; 
			this.hamburger.tileScale.y = 2;*/
			this.hamburger.tint = 0xFFFFFF;
			this.hamburger.x = 72;
			this.hamburger.y = 50;
			this.hamburger.width  = 72;
			this.hamburger.height = 72;

     		this.realSizeX = resources.hamburger.texture.baseTexture.realWidth;
     		this.realSizeY = resources.hamburger.texture.baseTexture.realHeight;
     		console.log(this.realSizeX);
     		console.log(this.realSizeY);
		});

		this.loader.onComplete.add(() => {

			
			this.attach(this.hamburger);



		});

	}

}
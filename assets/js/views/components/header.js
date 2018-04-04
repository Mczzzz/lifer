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

		let Srect = new Rect(0x999999 , 0, 0 , 0 , window.innerWidth , 100);

		let dropShadowFilter = new PIXI.filters.BlurFilter();
	    dropShadowFilter.blur = 2;

		Srect.filters = [dropShadowFilter];
		this.attach(Srect);
	}


	addBackground(){

		let rect = new Rect(0xE8E8E8 , 0, 0 , 0 , window.innerWidth , 100);
		this.attach(rect);


	}



	addDate(){

		this.addLiteralDate();
		this.addWeekDate();

	}


	addLiteralDate(){

		let text = new PIXI.Text(moment().format('dddd Do MMMM YYYY'),{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
		text.x = 5;
		text.y = 20;
		this.attach(text);

	}



	addWeekDate(){


		let text = new PIXI.Text("S: "+moment().format('WW'),{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
		text.x = 5;
		text.y = 5;
		this.attach(text);

	}


	addMenu(){


	this.loader = PIXI.loader;
		this.loader.add('hamburger', 'assets/glyphs/ic_menu_white_36px.svg');

		this.loader.load((loader, resources) => {
     		this.hamburger = new PIXI.extras.TilingSprite(resources.hamburger.texture);
     		this.hamburger.interactive = true;
     		this.hamburger.anchor.set(0.5,0.5);
     		this.hamburger.tileScale.x = 2; 
			this.hamburger.tileScale.y = 2;
			this.hamburger.tint = 0xFF99FF;
			this.hamburger.x = window.innerWidth - 36;
			this.hamburger.y = 25;
			this.hamburger.width  = 36;
			this.hamburger.height = 36;

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
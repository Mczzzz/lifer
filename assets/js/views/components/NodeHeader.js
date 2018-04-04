import moment from 'moment-es6';
import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';


export default class NodeHeader  extends UIContainer{
	

	constructor(x,y,w,h){
	
		console.log('header before super');
		super(x,y,w,h);

		moment.locale('fr');
     	


	}


	addElements(){

		this.addBkgd();

		this.addClose();

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

		let rect = new Rect(0x0040FF , 0, 0 , 0 , window.innerWidth , 100);
		this.attach(rect);


	}



	addClose(){

		console.log('in add close');
		this.loader = new PIXI.loaders.Loader();
		this.loader.add('close', 'assets/glyphs/ic_menu_white_36px.svg');

		this.loader.load((loader, resources) => {
     		this.close = new PIXI.extras.TilingSprite(resources.close.texture);
     		this.close.interactive = true;
     		this.close.anchor.set(0.5,0.5);
/*     		this.close.tileScale.x = 2; 
			this.close.tileScale.y = 2;*/
			this.close.tint = 0xFFFFFF;
			this.close.x = 72;
			this.close.y = 50;
			this.close.width  = 72;
			this.close.height = 72;

			this.close.on('tap', (event) => {
				this.container.parent.removeChild(this.container);
			});

     		this.realSizeX = resources.close.texture.baseTexture.realWidth;
     		this.realSizeY = resources.close.texture.baseTexture.realHeight;
     		console.log(this.realSizeX);
     		console.log(this.realSizeY);
		});

		this.loader.onComplete.add(() => {

			
			this.attach(this.close);



		});

	}

}
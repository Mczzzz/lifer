import moment from 'moment-es6';
import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';


export default class Footer  extends UIContainer{
	

	constructor(x,y,w,h){
	
		//console.log('header before super');
		super(x,y,w,h);

		moment.locale('fr');
     	


	}


	addElements(){

		this.addBkgd();

		//this.addDate();

		this.addNode();

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

		let rect = new Rect(0x51FF00 , 0, 0 , 0 , window.innerWidth , 100);
		this.attach(rect);


	}





	addNode(){


	this.loader = new PIXI.loaders.Loader();
		this.loader.add('addNode', 'assets/glyphs/ad_node_black_72px.svg');

		this.loader.load((loader, resources) => {
     		this.addNode = new PIXI.extras.TilingSprite(resources.addNode.texture);
     		this.addNode.interactive = true;
     		this.addNode.anchor.set(0.5,0.5);
/*     		this.addNode.tileScale.x = 2; 
			this.addNode.tileScale.y = 2;*/
			this.addNode.tint = 0xFFFFFF;
			this.addNode.x = 72;
			this.addNode.y = 50;
			this.addNode.width  = 72;
			this.addNode.height = 72;

			this.addNode.on('tap', (event) => {
			let event = new CustomEvent('changeFrame', {'detail' : {'frame' : 'node'}});
                window.dispatchEvent(event);
		});


     		this.realSizeX = resources.addNode.texture.baseTexture.realWidth;
     		this.realSizeY = resources.addNode.texture.baseTexture.realHeight;
     		console.log(this.realSizeX);
     		console.log(this.realSizeY);
		});

		this.loader.onComplete.add(() => {

			
			this.attach(this.addNode);



		});

	}

}
import moment from 'moment-es6';
import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';


export default class NodeFooter  extends UIContainer{
	

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

		let rect = new Rect(0xFF99FF , 0, 0 , 0 , window.innerWidth , 100);
		this.attach(rect);


	}





	addNode(){


	this.loader = new PIXI.loaders.Loader();
		this.loader.add('addPhoto', 'assets/glyphs/ic_local_see_white_72px.svg');
		this.loader.add('addPict', 'assets/glyphs/ic_gallery_white_72px.svg');

		this.loader.load((loader, resources) => {
     		this.addPhoto = new PIXI.extras.TilingSprite(resources.addPhoto.texture);
     		this.addPhoto.interactive = true;
     		this.addPhoto.anchor.set(0.5,0.5);
/*     		this.addPhoto.tileScale.x = 2; 
			this.addPhoto.tileScale.y = 2;*/
			this.addPhoto.tint = 0xFFFFFF;
			this.addPhoto.x = 72;
			this.addPhoto.y = 50;
			this.addPhoto.width  = 72;
			this.addPhoto.height = 72;

			this.addPhoto.on('tap', (event) => {
				/*let NodeEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'node'}});
                window.dispatchEvent(NodeEvent);*/
			});


     		this.realSizeX = resources.addPhoto.texture.baseTexture.realWidth;
     		this.realSizeY = resources.addPhoto.texture.baseTexture.realHeight;
     		console.log(this.realSizeX);
     		console.log(this.realSizeY);
		});

		this.loader.onComplete.add(() => {

			
			this.attach(this.addPhoto);



		});

	}

}
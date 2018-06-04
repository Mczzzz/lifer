import moment from 'moment-es6';
import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';
import Icon from '../elements/Icon.js';


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

		let rect = new Rect(0x0081cb , 0, 0 , 0 , window.innerWidth , 100);
		this.attach(rect);


	}





	addNode(){


	this.loader = new PIXI.loaders.Loader();
		this.loader.add('addNode', 'assets/glyphs/node.svg');
		this.loader.add('addLinker', 'assets/glyphs/link.svg');
		this.loader.add('addTrigger', 'assets/glyphs/trigger.svg');

		this.loader.load((loader, resources) => {
     		this.ANode = new Icon(72,50 ,72,72,resources.addNode.texture, 0xFFFFFF);
     		this.TheAddNode = this.ANode.load();

			this.TheAddNode.on('tap', (event) => {
				let NodeEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'node'}});
                window.dispatchEvent(NodeEvent);
			});


     		this.ALinker = new Icon(216,50 ,72,72,resources.addLinker.texture, 0xFFFFFF);
     		this.TheAddLinker = this.ALinker.load();
			
			this.TheAddLinker.on('tap', (event) => {
				let LinkEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'link'}});
                window.dispatchEvent(LinkEvent);
			});

     		this.ATrigger = new Icon(360,50 ,72,72,resources.addTrigger.texture, 0xFFFFFF);
/**/		this.TheAddTrigger = this.ATrigger.load();


/*     		this.realSizeX = resources.addNode.texture.baseTexture.realWidth;
     		this.realSizeY = resources.addNode.texture.baseTexture.realHeight;
     		console.log(this.realSizeX);
     		console.log(this.realSizeY);*/
		});

		this.loader.onComplete.add(() => {

			
			this.attach(this.TheAddNode);
			this.attach(this.TheAddLinker);
			this.attach(this.TheAddTrigger);



		});

	}

}
import moment from 'moment-es6';
import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';
import Button from '../components/Button.js';


export default class NodeFooter  extends UIContainer{
	

	constructor(x,y,w,h){
	
		//console.log('header before super');
		super(x,y,w,h);

		moment.locale('fr');
     	


	}


	addElements(){

		this.addBkgd();

		//this.addDate();

		this.addNodePict();

		this.addValid();

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


	addValid(){

		let but = new Button((this.width / 2) - 150,0, 100, 300);

		let button = but.load();

		button.on('tap', (event) => {
			console.log('in tap button');
		//	this.collector.save();
        });
        
		this.attach(button);

	}


	



	addNodePict(){


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
                 $('#photo').click();
			});



			this.addPict = new PIXI.extras.TilingSprite(resources.addPict.texture);
     		this.addPict.interactive = true;
     		this.addPict.anchor.set(0.5,0.5);
/*     		this.addPict.tileScale.x = 2; 
			this.addPict.tileScale.y = 2;*/
			this.addPict.tint = 0xFFFFFF;
			this.addPict.x = 172;
			this.addPict.y = 50;
			this.addPict.width  = 72;
			this.addPict.height = 72;

			this.addPict.on('tap', (event) => {
				/*let NodeEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'node'}});
                window.dispatchEvent(NodeEvent);*/
                 $('#pict').click();
			});




     		this.realSizeX = resources.addPhoto.texture.baseTexture.realWidth;
     		this.realSizeY = resources.addPhoto.texture.baseTexture.realHeight;
     		console.log(this.realSizeX);
     		console.log(this.realSizeY);
		});

		this.loader.onComplete.add(() => {

			
			this.attach(this.addPhoto);

			const inputFile = document.createElement("INPUT");
			inputFile.setAttribute("type", "file");
			inputFile.setAttribute("accept", "image/*");
			inputFile.setAttribute("capture", "camera");
			inputFile.setAttribute("id", "photo");
			inputFile.setAttribute("style", "position:absolute;visibility: hidden;")
			document.body.appendChild(inputFile);

			this.attach(this.addPict);

			const inputFilePict = document.createElement("INPUT");
			inputFilePict.setAttribute("type", "file");
			inputFilePict.setAttribute("accept", "image/*");
			/*inputFilePict.setAttribute("capture", "camera");*/
			inputFilePict.setAttribute("id", "pict");
			inputFilePict.setAttribute("style", "position:absolute;visibility: hidden;")
			document.body.appendChild(inputFilePict);

		});

	}

}
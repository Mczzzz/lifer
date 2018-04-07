import moment from 'moment-es6';
import NodeCollection from '../../collections/NodeCollection.js';
import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';
import Button from '../components/Button.js';
import Icon from '../elements/Icon.js';


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

		let Srect = new Rect(0xec407a , 0, 0 , 0 , window.innerWidth , 100);

		let dropShadowFilter = new PIXI.filters.BlurFilter();
	    dropShadowFilter.blur = 8;

		Srect.filters = [dropShadowFilter];
		this.attach(Srect);
	}


	addBackground(){

		let rect = new Rect(0xb4004e , 0, 0 , 0 , window.innerWidth , 100);
		this.attach(rect);


	}


	addValid(){

		let but = new Button((this.width / 2) - 150,(this.height / 2), 300, 100);

		let button = but.load();

		button.on('tap', (event) => {
			console.log('in tap button');

			//on prends la data et on l'envoi au serveur
			let NCollect = new NodeCollection();
			NCollect.save();

			//on recharge la liste mais à revoir
			//NCollect.getAll();


			//IHM
			this.container.parent.parent.removeChild(this.container.parent);
			$('#divText').remove();
		
			//DATA STORE

			//REFRESH MAIN;
		//	this.collector.save();
        });
        
		this.attach(button);

	}


	



	addNodePict(){


	this.loader = new PIXI.loaders.Loader();
		this.loader.add('addPhoto', 'assets/glyphs/photo.svg');
		this.loader.add('addPict', 'assets/glyphs/gallery.svg');

		this.loader.load((loader, resources) => {

			this.addPhoto = new Icon(72,50 ,resources.addPhoto.texture, 0xFFFFFF);

     		this.addPhoto.on('tap', (event) => {
				/*let NodeEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'node'}});
                window.dispatchEvent(NodeEvent);*/
                 $('#photo').click();
			});


     		this.addPhoto = new Icon(216,50 ,resources.addPict.texture, 0xFFFFFF);


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
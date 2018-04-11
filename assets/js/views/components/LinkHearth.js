import moment from 'moment-es6';
//import NodeCollection from '../../collections/NodeCollection.js';
import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';
import Button from '../components/Button.js';
import Icon from '../elements/Icon.js';
import Linky from '../elements/Linky.js';


export default class LinkHearth  extends UIContainer{
	

	constructor(x,y,w,h){
	
		//console.log('header before super');
		super(x,y,w,h);

		moment.locale('fr');
     	

	}


	addElements(){

		//this.addBkgd();

		this.addHearthPict();

		this.drwLink();
		//this.addDate();

		//this.addLinkPict();

		//this.addValid();

	}


	drwLink(){

		let MyLink = new Linky( 0,0,100,50);

		this.TMyLink = MyLink.load();

		this.attach(this.TMyLink);
		this.TMyLink
        .on('touchstart', (e) => this.onDragStart(e))
        .on('touchend', (e) => this.onDragEnd(e))
      //  .on('pointerupoutside', (e) => this.onDragEnd(e))
        .on('touchmove', (e) => this.onDragMove(e));

		



	}

   onDragStart(event) {
	    // store a reference to the data
	    // the reason for this is because of multitouch
	    // we want to track the movement of this particular touch
	    this.edata = event.data;
	    this.TMyLink.alpha = 0.5;
	    this.dragging = true;
	}

	onDragEnd() {
	    this.TMyLink.alpha = 1;
	    this.dragging = false;
	    // set the interaction data to null
	    this.edata = null;
	}

	onDragMove() {
	    if (this.dragging) {
	        var newPosition = this.edata.getLocalPosition(this.container);
	        this.TMyLink.x = newPosition.x;
	        this.TMyLink.y = newPosition.y;
	    }
	}




















	addHearthPict(){


				let graphics = new PIXI.Graphics();
		graphics.lineStyle(150, 0xFF00FF, 1);
		graphics.arc(this.width / 2, 200, 100, 0.1, Math.PI - 0.1);
		this.attach(graphics);

		let graphics2 = new PIXI.Graphics();
		graphics.lineStyle(150, 0x00FF00, 1);
		graphics.arc(this.width / 2, 200, 100, Math.PI + 0.1, 0 - 0.1);
		this.attach(graphics);






	this.loader = new PIXI.loaders.Loader();
		this.loader.add('addFace', 'assets/glyphs/face.svg');
		
		this.loader.load((loader, resources) => {

			this.addFace = new Icon((this.width / 2) - 36, 200 ,72,72,resources.addFace.texture, 0x000000);
			this.TheAddFace = this.addFace.load();


			this.select = new PIXI.Graphics();
        	this.select.beginFill(0x0000FF,0);
        	this.select.lineStyle(100,0x0000FF);
			this.select.drawCircle((this.width / 2) - 36, 200, 100);
			this.select.endFill()

			//this.select.alpha = 0;

			this.attach(this.select);





				//on sélectionne par default
				////on cree un element html qui va embarqué l'id selectionné
				const inputFile = document.createElement("INPUT");
				inputFile.setAttribute("type", "text");
				inputFile.setAttribute("value", 0);
				inputFile.setAttribute("id", "SelectedLink");
				inputFile.setAttribute("style", "position:absolute;visibility: hidden;")
				document.body.appendChild(inputFile);



     		this.TheAddFace.on('tap', (event) => {
     			

     			this.addFace.ChgSelect();

			});



		});

		this.loader.onComplete.add(() => {

			
			this.attach(this.TheAddFace);

		});


	}

}
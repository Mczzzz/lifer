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

		let MyLink = new Linky( 200,200,100,50);
		this.TMyLink = MyLink.load();
		this.attach(this.TMyLink);
		this.TMyLink
        .on('pointerdown', (e) => this.onDragStart(e))
        .on('pointerup', (e) => this.onDragEnd(e))
        .on('pointerupoutside', (e) => this.onDragEnd(e))
        .on('pointermove', (e) => this.onDragMove(e));

		



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

	this.loader = new PIXI.loaders.Loader();
		this.loader.add('addFace', 'assets/glyphs/face.svg');
		
		this.loader.load((loader, resources) => {

			this.addFace = new Icon((this.width / 2) - 36, 100 ,72,72,resources.addFace.texture, 0x000000);
			this.TheAddFace = this.addFace.load();
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
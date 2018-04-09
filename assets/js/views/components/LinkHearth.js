import moment from 'moment-es6';
//import NodeCollection from '../../collections/NodeCollection.js';
import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';
import Button from '../components/Button.js';
import Icon from '../elements/Icon.js';


export default class LinkHearth  extends UIContainer{
	

	constructor(x,y,w,h){
	
		//console.log('header before super');
		super(x,y,w,h);

		moment.locale('fr');
     	


	}


	addElements(){

		//this.addBkgd();

		this.addHearthPict();
		//this.addDate();

		//this.addLinkPict();

		//this.addValid();

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
     			

     			this.addFace.drwSelect();

			});



		});

		this.loader.onComplete.add(() => {

			
			this.attach(this.TheAddFace);

		});


	}

}
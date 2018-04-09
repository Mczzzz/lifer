import moment from 'moment-es6';
//import NodeCollection from '../../collections/NodeCollection.js';
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

		this.addLinkPict();

		//this.addValid();

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

		let rect = new Rect(0xffb300 , 0, 0 , 0 , window.innerWidth , 100);
		this.attach(rect);


	}


	addValid(){

		let but = new Button((this.width / 2) - 150,10, 300, 80, "OK");

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


	



	addLinkPict(){

this.loader = new PIXI.loaders.Loader();
		this.loader.add('addLink', 'assets/glyphs/addLink.svg');
		
		this.loader.load((loader, resources) => {

			this.addLink = new Icon(72,50 ,resources.addLink.texture, 0xFFFFFF);

     		this.addLink.on('tap', (event) => {
				/*let NodeEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'node'}});
                window.dispatchEvent(NodeEvent);*/
              //   $('#photo').click();
			});



		});

		this.loader.onComplete.add(() => {

			
			this.attach(this.addLink);

		});


	}

}
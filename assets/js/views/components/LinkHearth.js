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

		this.addBkgd();

		//this.addDate();

		//this.addLinkPict();

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



	



	addLinkPict(){

this.loader = new PIXI.loaders.Loader();
		this.loader.add('addFace', 'assets/glyphs/face.svg');
		
		this.loader.load((loader, resources) => {

			this.addFace = new Icon(72,50 ,resources.addFace.texture, 0xFFFFFF);

     		this.addFace.on('tap', (event) => {
				/*let NodeEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'node'}});
                window.dispatchEvent(NodeEvent);*/
              //   $('#photo').click();
			});



		});

		this.loader.onComplete.add(() => {

			
			this.attach(this.addFace);

		});


	}

}
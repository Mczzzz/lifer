import NodeCollection from '../../collections/NodeCollection.js';
import Bkg from '../components/background.js';
import NodeHeader from '../components/NodeHeader.js';
import PPict from '../components/previewPict.js';
import UIContainer from '../../services/uiContainer.js';
import TextArea from '../components/textarea.js';
import Button from '../components/Button.js';

export default class Node extends UIContainer{


	constructor(x,y,w,h){

		super(x,y,w,h);
		//getData Image
		//TODO : a bouger car doit être asynchrone
		//this.data = e.detail.data;

/*		this.collector = new NodeCollection();
		this.collector.setImage(this.data);*/


	}



	addElements(){

		console.log('node/addelement/beforeBackground');
		this.addBackground();

		console.log('node/addelement/beforeaddPreviewPict');
		//this.addPreviewPict();

		console.log('node/addelement/beforeaddTextArea');
		this.addTextArea();

		console.log('node/addelement/beforeaddSaveButton');
		this.addSaveButton();


	}


	addBackground(){

		// color , lineStyle, x,y, width, height
		let background = new Bkg(0xFF99FF,0,0,0,this.width,this.height);
		console.log('before Attach Background To container');
        this.attach(background);


	}


	addHeader(){

		let NHeader = new NodeHeader(0xFF99FF,0,0,0,this.width,100);
		this.attach(NHeader);
	}


	addPreviewPict(){

/*		let prevPict = new PPict(this.data, this.width - 5, 250);
		this.attach(prevPict);*/
		
	}


	addTextArea(){
		//x,y,width,height
		let tArea = new TextArea(this.container.x, this.container.y + 250, this.width - 5, 300);
		this.attach(tArea);

	}
	

	addSaveButton(){

		let but = new Button(20,600, 50, 30);

		let button = but.load();

		button.on('tap', (event) => {
			console.log('in tap button');
			this.collector.save();
        });
        
		this.attach(button);

	}


}
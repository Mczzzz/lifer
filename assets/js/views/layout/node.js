import NodeCollection from '../../collections/NodeCollection.js';
import Bkg from '../components/background.js';
import PPict from '../components/previewPict.js';
import TextArea from '../components/textarea.js';
import Button from '../components/Button.js';

export default class Node {


	constructor(e){

		//getData Image
		//TODO : a bouger car doit être asynchrone
		this.data = e.detail.data;

		this.collector = new NodeCollection();
		this.collector.setImage(this.data);

		

		this.declareContainer();

		this.fixeSize();

		this.fixePosition();

		this.addElements();

		return this.container;

	}


	declareContainer(){

		this.container = new PIXI.Container();
		this.container.interactive = true;

	}


	fixeSize(){

		this.width = window.innerWidth - 20;
		this.height = window.innerHeight - 20;

	}



	fixePosition(){

		this.container.x = 10;
		this.container.y = 10;

	}


	addElements(){

		console.log('node/addelement/beforeBackground');
		this.addBackground();

		console.log('node/addelement/beforeaddPreviewPict');
		this.addPreviewPict();

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


	addPreviewPict(){

		let prevPict = new PPict(this.data, this.width - 5, 250);
		this.attach(prevPict);
		
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





	attach(components){

		console.log(components);
		this.container.addChild(components);

	}


}
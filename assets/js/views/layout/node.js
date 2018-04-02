import Bkg from '../components/background.js';
import PPict from '../components/previewPict.js';
import TextArea from '../components/textarea.js';
import Button from '../components/Button.js';

export default class Node {


	constructor(e){



		//getData Image
		//TODO : a bouger car doit être asynchrone
		this.data = e.detail.data;

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

		let button = new Button(20,500, 50, 30);
		button.load();
		this.attach(button);

	}





	attach(components){

		this.container.addChild(components);

	}


}
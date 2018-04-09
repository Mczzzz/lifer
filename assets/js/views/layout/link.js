import LinkCollection from '../../collections/LinkCollection.js';
import Bkg from '../components/background.js';
import LinkHeader from '../components/LinkHeader.js';
import LinkFooter from '../components/LinkFooter.js';
/*import PPict from '../components/previewPict.js';*/
import UIContainer from '../../services/uiContainer.js';
import TextArea from '../components/textarea.js';


export default class Link extends UIContainer{


	constructor(x,y,w,h){

		super(x,y,w,h);
		//getData Image
		//TODO : a bouger car doit être asynchrone
		//this.data = e.detail.data;

		//this.collector = new NodeCollection();
		//this.collector.setImage(this.data);*/


	}



	addElements(){

		console.log('node/addelement/beforeBackground');
		this.addBackground();

		this.addHeader();

		this.addFooter();
		//console.log('node/addelement/beforeaddPreviewPict');
		//this.addPreviewPict();

		//console.log('node/addelement/beforeaddTextArea');
		//this.addTextArea();

		//console.log('node/addelement/beforeaddSaveButton');
		//this.addSaveButton();


	}


	addBackground(){

		// color , lineStyle, x,y, width, height
		let background = new Bkg(0xeeeeee,0,0,0,this.width,this.height);
		console.log('before Attach Background To container');
        this.attach(background);


	}


	addHeader(){

		let NLinkHeader = new LinkHeader(0,0,this.width,100);
		let TheLinkHeader = NLinkHeader.load();
		this.attach(TheLinkHeader);
	}

	addFooter(){

		let NLinkFooter = new LinkFooter(0,this.height - 100,this.width,100);
		let TheLinkFooter = NLinkFooter.load();
		this.attach(TheLinkFooter);
	}



	addPreviewPict(){

/*		let prevPict = new PPict(this.data, this.width - 5, 250);
		this.attach(prevPict);*/
		
	}


	addTextArea(){
		//x,y,width,height
/*		let tArea = new TextArea(25, 110, this.width - 50, 300);
		let TheTextArea = tArea.load();
		this.attach(TheTextArea);*/

	}
	
	addPhotoHtmlElement(){



	}


/*	addSaveButton(){

		let but = new Button(20,600, 50, 30);

		let button = but.load();

		button.on('tap', (event) => {
			console.log('in tap button');
			this.collector.save();
        });
        
		this.attach(button);

	}*/


}
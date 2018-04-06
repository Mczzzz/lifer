import UIContainer from '../../services/uiContainer.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import NodeList from '../components/NodeList.js';
//import Adder from '../components/adder.js';

export default class Home extends UIContainer{


	constructor(x,y,w,h){

		super(x,y,w,h);

		//this.container.name = 'Home';
		//console.log($(this).attr('class'));
	}


	addElements(){

		this.drawBkground();

		let header = new Header(0,0,this.width,this.height);
		//console.log(header);
		let TheHeader = header.load();
		this.attach(TheHeader);


		this.addListNode();


		let footer = new Footer(0,this.height - 100,this.width,100);
		let TheFooter = footer.load();
		this.attach(TheFooter);

/*		const rayonButton = 30;
		this.adder = new Adder(rayonButton);
		this.adder.x = 20;
		this.adder.y = window.innerHeight - (rayonButton * 2 ) - 20;
		this.attach(this.adder);*/


	}
		



	drawBkground(){

		let backgroundCard = new PIXI.Graphics();
        backgroundCard.beginFill(0x00B0FF);
        backgroundCard.lineStyle(0);
        backgroundCard.drawRect(0, 0, this.width, this.height);
        backgroundCard.endFill();

        this.attach(backgroundCard);


	}


	addListNode(){

		let MyNodeList = new NodeList(15,100,this.height - 200, this.width - 30)
		let TheMyNodeList = MyNodeList.load();
		this.attach(TheMyNodeList);

	}

}
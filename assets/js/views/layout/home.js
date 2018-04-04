import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Adder from '../components/adder.js';

export default class Home {


	constructor(){

		this.container = new PIXI.Container();
		this.container.interactive = true;

		this.render();

		return this.container;

	}


	render(){

		let header = new Header(0,0,window.innerWidth,100);
		//console.log(header);
		let TheHeader = header.load();
		this.attach(TheHeader);


		let footer = new Footer(0,window.innerHeight - 100,window.innerWidth,100)
		let TheFooter = footer.load();
		this.attach(TheFooter);

/*		const rayonButton = 30;
		this.adder = new Adder(rayonButton);
		this.adder.x = 20;
		this.adder.y = window.innerHeight - (rayonButton * 2 ) - 20;
		this.attach(this.adder);*/


	}
		


	attach(components){

		this.container.addChild(components);

	}




	drawBkground(){

		this.backgroundCard = new PIXI.Graphics();
        this.backgroundCard.beginFill(0xD8D8D8);
        this.backgroundCard.lineStyle(0);
        this.backgroundCard.drawRect(50, 50, window.innerWidth - 100, window.innerHeight - 100);
        this.backgroundCard.endFill();

        this.container.addChild(this.backgroundCard);


	}



}
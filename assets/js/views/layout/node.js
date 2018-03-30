/*import Header from './components/header.js';
import Adder from './components/adder.js';
*/
export default class Node {


	constructor(e){

		this.container = new PIXI.Container();
		this.container.interactive = true;
		this.container.x = 10;
		this.container.y = 10;
		this.width = window.innerWidth - 20;
		this.height = window.innerHeight - 20;
		console.log('in node constructor');


		this.drawBkground();

		this.data = e.detail.data;

		this.addImage();

		return this.container;

	}



	drawBkground(){

		this.backgroundCard = new PIXI.Graphics();
        this.backgroundCard.beginFill(0xFF99FF);
        this.backgroundCard.lineStyle(0);
        this.backgroundCard.drawRect(0, 0, this.width, this.height);
        this.backgroundCard.endFill();

        this.container.addChild(this.backgroundCard);


	}

	addImage(){

		this.pict = new PIXI.Sprite.fromImage(this.data);
		this.pict.width = this.width - 5;
		this.pict.x = 2.5;
		this.pict.y = 2.5;

		this.container.addChild(this.pict);

	}


}
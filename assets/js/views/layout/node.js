/*import Header from './components/header.js';
import Adder from './components/adder.js';
*/
export default class Node {


	constructor(e){

		this.container = new PIXI.Container();
		this.container.interactive = true;
		console.log('in node constructor');



		this.drawBkground();

		this.data = e.detail.data;

		return this.container;

	}



	drawBkground(){

		this.backgroundCard = new PIXI.Graphics();
        this.backgroundCard.beginFill(0xFF99FF);
        this.backgroundCard.lineStyle(0);
        this.backgroundCard.drawRect(10, 10, window.innerWidth - 20, window.innerHeight - 20);
        this.backgroundCard.endFill();

        this.container.addChild(this.backgroundCard);


	}

	addImage(){

		this.pict = new PIXI.Sprite.fromImage(this.data);

		this.container.addChild(this.pict);

	}


}
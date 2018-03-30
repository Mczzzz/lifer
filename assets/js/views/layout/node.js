/*import Header from './components/header.js';
import Adder from './components/adder.js';
*/
export default class Node {


	constructor(){

		this.container = new PIXI.Container();
		this.container.interactive = true;
		console.log('in node constructor');

		this.drawBkground();
		return this.container;

	}



	drawBkground(){

		this.backgroundCard = new PIXI.Graphics();
        this.backgroundCard.beginFill(0xFFFFFF);
        this.backgroundCard.lineStyle(0);
        this.backgroundCard.drawRect(50, 50, window.innerWidth - 100, window.innerHeight - 100);
        this.backgroundCard.endFill();

        this.container.addChild(this.backgroundCard);


	}



}
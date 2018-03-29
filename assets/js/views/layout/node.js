/*import Header from './components/header.js';
import Adder from './components/adder.js';
*/
export default class Node {


	constructor(){

		this.container = new PIXI.Container();
		this.container.interactive = true;


		return this.container;

	}



	drawBkground(){

		var backgroundCard = new PIXI.Graphics();
                  backgroundCard.beginFill(0xFFFFFF);
                  backgroundCard.lineStyle(0);
                  backgroundCard.drawRect(50, 50, window.innerWidth - 100, window.innerHeight - 100);
                  backgroundCard.endFill();

                  backgroundCard.interactive = true;

		
	}



}
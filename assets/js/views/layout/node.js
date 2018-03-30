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

		//trop moche à revoir car un load double de l'image
		let i = new Image();
		i.onload = function(){

            let ratio = i.height / i.width;

            this.pict = new PIXI.Sprite.fromImage(this.data);
			pict.interactive = true;
             
            this.pict.height = this.pict.width * ratio;
             
            let diffsize =  this.pict.height - this.pict.width;

            this.pict.anchor.set(0.5,0.5);

     		this.pict.x = 2.5;
			this.pict.y = 2.5;

            this.pict.rotation = Math.PI * 2 * 0.25;
            this.pict.height = window.innerWidth - 120;
            this.pict.width = this.pict.height / ratio;
            this.pict.y -= diffsize - 25;
             // pict.pivot.set(pict.width, pict.height);
              
              //pict.rotation = 1.5702;
             // pict.rotation = 0.5;
             //console.log(pict);

            this.pict.on('tap', (event) => {

             	this.pict.rotation += Math.PI * 2 * 0.25;
             	
            });



/*


		console.log(this.pict.width + " / " + this.pict.height);
		this.pict.width = this.width - 5;
		this.pict.x = 2.5;
		this.pict.y = 2.5;*/

			this.container.addChild(this.pict);


		};
		i.src = this.data;



	}


}
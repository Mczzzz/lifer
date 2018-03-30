import Bkg from '../components/background.js';

export default class Node {


	constructor(e){



		//getData Image
		//TODO : a bouger car doit être asynchrone
		this.data = e.detail.data;

		this.declarecontainer();

		this.fixeSize();

		this.fixePosition();

		this.addElements();

		return this.container;

	}


	declarecontainer(){

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

		this.drawBkground();

		this.addImage();

	}


	addBackground(){

		// color , lineStyle, x,y, width, height
		let background = new Bkg(0xFF99FF,0,0,0,this.width,this.height);
        this.attach(background);


	}


	attach(components){

		this.container.addChild(components);

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
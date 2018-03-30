import SvcImage from '../../services/image.js';

export default class PreviewPict {



	constructor(data){

		console.log("construct Preview Pict");
		this.data = data;

		this.declareContainer();
		console.log("construct Preview Pict 2");
		let image = new SvcImage(this.data);
		console.log("construct Preview Pict 3");
		this.getRatio = image.ImgRatio();

		//loader

		//algo de changement d'orientation

		//attach event


//trop moche à revoir car un load double de l'image
/*		let i = new Image();

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
/*
			this.container.addChild(this.pict);


		};
		i.src = this.data;



	}
*/





	}



	declareContainer(){

		this.container = new PIXI.Container();
		this.container.interactive = true;

	}




	addBigImage(){



	}





	attach(elements){

		this.container.addChild(elements);

	}





}
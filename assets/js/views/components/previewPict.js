import SvcImage from '../../services/image.js';

export default class PreviewPict {



	constructor(data, cWidth, cHeight){

		

		console.log("construct Preview Pict");
		this.data = data;
		this.cWidth = cWidth;
		this.cHeight = cHeight;

		this.declareContainer();

		this.loader();
		
		return this.container;



	}



	declareContainer(){

		this.container = new PIXI.Container();
		this.container.interactive = true;

	}

	loader(){

		this.loader = PIXI.loader;
		this.loader.add('photo', this.data);

		this.loader.load((loader, resources) => {
     		this.photo = new PIXI.extras.TilingSprite(resources.photo.texture, this.cWidth, this.cHeight);
     		this.realSizeX = resources.photo.texture.baseTexture.realWidth;
     		this.realSizeY = resources.photo.texture.baseTexture.realHeight;
		});

		this.loader.onComplete.add(() => {

			this.getRatio();

			this.getCalculSize();

			this.addEventTap();

			this.attach(this.photo);
		});


	}


	addEventTap(){

		this.photo.on('tap', (event) => {

              this.photo.rotation += Math.PI * 2 * 0.25;


        });

	}

	getRatio(){

		this.ratio = this.realSizeX / this.realSizeY;

	}


	getCalculSize(){

		//je calcul la taille de height avec le width max
		//si superieur au height Max
		//je recalcul width avec height max
		let HeightMax = this.cWidth / this.ratio;

		if(HeightMax > this.cHeight){

			this.photo.height = this.cHeight;
			this.photo.width =  this.cHeight * this.ratio;
			this.photo.scale.set(0.2,0.2); 

		}else{

			this.photo.width = this.cWidth;
			this.photo.height = HeightMax;
			this.photo.scale.set(0.2,0.2); 


		}



	}



	attach(elements){

		this.container.addChild(elements);

	}





}
export default class LiferLoader {
	


	constructor(list,element,trigger){


		this.loader = PIXI.loader;


		for (let o of foo()) {
		  console.log(o);
		  // expected output: 1

		  break; // closes iterator, triggers return
		}


	}



	addToLoader(){

		this.loader.add('photo', this.data);

	
	}


	load(){


	this.loader.load((loader, resources) => {
     		this.photo = new PIXI.extras.TilingSprite(resources.photo.texture);
     		this.photo.interactive = true;
     		this.photo.anchor.set(0.5,0.5);

     		this.realSizeX = resources.photo.texture.baseTexture.realWidth;
     		this.realSizeY = resources.photo.texture.baseTexture.realHeight;
		});


	}


	onComplete(){

		this.loader.onComplete.add(() => {

			this.MobileRotate();

			this.getRatio();

			this.getCalculSize();


			this.addEventTap();

			this.attach(this.photo);



		});





	}









}
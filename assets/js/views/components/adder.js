export default class Adder {
	

	constructor(rayonButton){

		this.container = new PIXI.Container();
		this.container.interactive = true;

		this.rayonButton = rayonButton;

		this.initHmlElements();

		this.drawShadow();
		this.drawCircle();
		this.drawPlus();

		this.addEventTap();

		return this.container;

	}


	initHmlElements(){
		//<input id='photo' type="file" accept="image/*" capture="camera">
		this.createHtmlElement();
		this.bindOnChangeHtmlElement();

	}


	createHtmlElement(){

		const inputFile = document.createElement("INPUT");
		inputFile.setAttribute("type", "file");
		inputFile.setAttribute("accept", "image/*");
		inputFile.setAttribute("capture", "camera");
		inputFile.setAttribute("id", "photo");
		document.body.appendChild(inputFile);

	}

	bindOnChangeHtmlElement(){


		$('#photo').on('change', function camFile(){


			const reader = new FileReader();

            reader.onloadend = function(){

                this.dataURL = reader.result;
                console.log(this.dataURL);
            };

		this.photo = reader.readAsDataURL($('#photo')[0].files[0]);

		});


	}




	drawCircle(){

		this.add = new PIXI.Graphics();
	    this.add.beginFill(0xFF0000);
	    this.add.lineStyle(2,0x999999);
	    this.add.drawCircle(0, 0, this.rayonButton);
	    this.add.endFill();

	    this.spriteButton = new PIXI.Sprite(this.add.generateCanvasTexture());

	    this.container.addChild(this.spriteButton);

	}


	drawShadow(){



		this.addShadow = new PIXI.Graphics();
	    this.addShadow.beginFill(0xFFFFFF);
	    this.addShadow.lineStyle(0);
	    this.addShadow.drawCircle(0, 0, this.rayonButton);
	    this.addShadow.endFill();

	    this.spriteShadow = new PIXI.Sprite(this.addShadow.generateCanvasTexture());
	    this.spriteShadow.x = 2;
	    this.spriteShadow.y = 2;

	    this.dropShadowFilter = new PIXI.filters.BlurFilter();
       	this.dropShadowFilter.blur = 15;
		this.spriteShadow.filters = [this.dropShadowFilter];

		this.container.addChild(this.spriteShadow);


	}


	drawPlus(){

		this.plus = new PIXI.Text("+",{fontFamily : 'Arial', fontSize: 25,fill : 0xFFFFFF, align : 'center'});
        this.plus.x = this.rayonButton / 2 + this.plus.width / 2;
        this.plus.y = this.rayonButton / 2;

        this.container.addChild(this.plus);

	}


	addEventTap(){


		this.container.on('tap', (event) => {
		  
		  //alert('test Event tap');
		  $('#photo').click();

		});




	}


}
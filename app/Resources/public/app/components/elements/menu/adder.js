/*
* Adder menu
* Guillaume BAILLY
* 2018-03-12
*/

var adder = function(){


	this.add = new PIXI.Container();
	this.dropShadowFilter = new PIXI.filters.BlurFilter();
	this.addParams = 60;
	this.sprite = '';


	this.init = function(){

		var res = this.drawAddCircle();

		if(res){
			this.add.x = this.addParams / 2;
			this.add.y = window.innerHeight - (this.addParams * 2.5);
		}
		

		return this.add;
	}


	this.drawAddCircle = function(){

	    var addShadow = new PIXI.Graphics();
	        addShadow.beginFill(0xFFFFFF);
	        addShadow.lineStyle(0);
	        addShadow.drawCircle(0, 0, this.addParams);
	        addShadow.endFill();

	    var spriteShadow = new PIXI.Sprite(addShadow.generateCanvasTexture());
	    	spriteShadow.x = 2;
	    	spriteShadow.y = 2;

       	this.dropShadowFilter.blur = 30;
		spriteShadow.filters = [this.dropShadowFilter];

		this.add.addChild(spriteShadow);



		var add = new PIXI.Graphics();
	        add.beginFill(0xFF0000);
	        add.lineStyle(3,0x999999);
	        add.drawCircle(0, 0, this.addParams);
	        add.endFill();

	    var spriteButton = new PIXI.Sprite(add.generateCanvasTexture());


	    this.add.addChild(spriteButton);



	    var plus = new PIXI.Text("+",{fontFamily : 'Arial', fontSize: 50,fill : 0xFFFFFF, align : 'center'});
           	plus.x = this.addParams / 2 + plus.width / 2;
        	plus.y = this.addParams / 2


        this.add.addChild(plus);



        this.add.interactive = true;



		this.add.on('tap', (event) => {
		   var MyPict = this.addPict();
		   this.add.addChild(MyPict);

		toto = this.add;
		   setTimeout(function(){ toto.removeChild(MyPict) },3000);

		});

        return true;

	}


	this.setDropShadowFilter = function(value){
		this.dropShadowFilter.blur = value;
	}


	this.addPict = function(){

		var PictContain = new PIXI.Container();

		var pict = new PIXI.Graphics();
			pict.beginFill(0x9900FF);
        	pict.lineStyle(0);
            pict.drawCircle(this.addParams, -(this.addParams * 1.5), this.addParams);
            pict.endFill();

            pict.interactive = true;

        PictContain.addChild(pict);
        

        var logo = new PIXI.Sprite.fromImage('app/components/elements/menu/ressources/camera.png'); 
			logo.x = this.addParams / 2;
			logo.y = -(this.addParams * 2);
			logo.width = 64;
			logo.height = 48;

		PictContain.addChild(logo);   

        	pict.on('tap', (event) => {
			$('#photo').click();
		});


        return PictContain;
	}	






}
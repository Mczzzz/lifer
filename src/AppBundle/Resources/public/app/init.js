class Lifer {

	constructor(){

		app = new PIXI.Application(window.innerWidth, window.innerHeight, { backgroundColor : 0x000000, 
                                                                                  antialias : true
                                                                                }
                                        );

        document.body.appendChild(app.view);

        app.stage.interactive = true;

    }



}
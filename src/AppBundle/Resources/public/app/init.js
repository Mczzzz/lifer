import * as MyImport from 'views/layout.js';

class Lifer {

	constructor(){

		this.app = new PIXI.Application(window.innerWidth, window.innerHeight, { backgroundColor : 0x000000, antialias : true });

        document.body.appendChild(this.app.view);

        this.app.stage.interactive = true;

    }


    start(){



    }

}
class Lifer {

	constructor(){

		this.app = new PIXI.Application(window.innerWidth, window.innerHeight, { backgroundColor : 0x000000, antialias : true });

        document.body.appendChild(this.app.view);

        this.app.stage.interactive = true;

    }


    start(){
    	import { Loader, ModuleNamespace } from 'views/layout.js';


    }

}
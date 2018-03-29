import Header from './components/header.js';

export default class Main {


	constructor(){

		this.app = new PIXI.Application(window.innerWidth, window.innerHeight, { backgroundColor : 0x000000, antialias : true });  // Add the view to the DOM 		

		document.body.appendChild(this.app.view);  // ex, add display objects 

		this.render();
	}


	render(){

		this.vue = new Header();

		this.app.stage.addChild(this.vue);

	}



}
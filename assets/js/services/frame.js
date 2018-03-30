import Home from '../views/layout/home.js';
import Node from '../views/layout/node.js';

export default class Frame {


	constructor(){




		this.app = new PIXI.Application(window.innerWidth, window.innerHeight, { backgroundColor : 0x000000, antialias : true });  // Add the view to the DOM 		

		document.body.appendChild(this.app.view);  // ex, add display objects 


		this.render();
		
		window.addEventListener('changeFrame', (e) => this[e.detail]());



	}


	render(){

		let homeFrame = new Home();
		this.attach(homeFrame);

	}



	node(){

		console.log('in frame node');
		let nodeFrame = new Node();
		this.attach(nodeFrame);

	}


	attach(layout){

		this.app.stage.addChild(layout);

	}







}
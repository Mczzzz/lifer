import Home from '../views/layout/home.js';
import Node from '../views/layout/node.js';

export default class Frame {


	constructor(){




		this.app = new PIXI.Application(window.innerWidth, window.innerHeight, { backgroundColor : 0xD8D8D8, antialias : false });  // Add the view to the DOM 		

		document.body.appendChild(this.app.view);  // ex, add display objects 


		this.render();
		
		window.addEventListener('changeFrame', (e) => this[e.detail.frame](e));



	}


	render(){

		let homeFrame = new Home();
		this.attach(homeFrame);

	}



	node(e){

		console.log('in frame node');
		let nodeFrame = new Node(e);
		this.attach(nodeFrame);

	}


	attach(layout){

		this.app.stage.addChild(layout);

	}







}
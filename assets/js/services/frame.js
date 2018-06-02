//import Home from '../views/layout/home.js';

export default class Frame {


	constructor(){


		

		document.body.appendChild('<div id=toto></div>');  // ex, add display objects 


	/*	this.render();
		
		window.addEventListener('changeFrame', (e) => this[e.detail.frame](e));
*/


	}


	render(){

		let homeFrame = new Home(0,0,window.innerWidth,window.innerHeight);
		let TheHomeFrame = homeFrame.load();
		this.attach(TheHomeFrame);

	}



	node(){

		console.log('in frame node');
	
		let nodeFrame = new Node(0,0,window.innerWidth,window.innerHeight);
		let TheNode = nodeFrame.load();
		this.attach(TheNode);

	}


	link(){

		console.log('in frame link');
	
		let linkFrame = new Link(0,0,window.innerWidth,window.innerHeight);
		let MyLinks = linkFrame.load();
		this.attach(MyLinks);

	}


	attach(layout){

		this.app.stage.addChild(layout);

	}







}
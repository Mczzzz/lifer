import Home from '../views/layout/home.js';

export default class Frame {


	constructor(){


/*		let str = '<p>Just some <span>text</span> here</p>';

		let temp = document.createElement('div');

		temp.innerHTML()*/

		//document.body.innerHTML = 'str';  // ex, add display objects 


	/*	this.render();
		
		window.addEventListener('changeFrame', (e) => this[e.detail.frame](e));
*/
	let homeFrame = new Home(0,0,window.innerWidth,window.innerHeight);


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
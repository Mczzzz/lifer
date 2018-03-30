import Home from '../views/layout/home.js';
import Node from '../views/layout/node.js';

export default class Frame {


	constructor(){



		this.app = new PIXI.Application(window.innerWidth, window.innerHeight, { backgroundColor : 0x000000, antialias : true });  // Add the view to the DOM 		

		document.body.appendChild(this.app.view);  // ex, add display objects 


		this.render();
		

		window.addEventListener('changeFrame', (e) => this.watch(e));


//		this.frame = ['main','node'];
/*        let proxy = new Proxy(this, this.watch);

        window.addEventListener('scroll', proxy);*/

		//add event.listener

		//load all frame
/*		for (const arrValue of this.frame) {
		  console.log(arrValue); // 'hello', 'world'
		}*/


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




	watch(e){
		console.log('in watch');
		console.log(e.detail);
		let that = this;
		that[e.detail]();
		console.log('in watch - after node');
		//eval(e.detail);
		//this.node =



	}


	main(){

		//this.node =



	}




	node(){

	//	this.node =



	}





}
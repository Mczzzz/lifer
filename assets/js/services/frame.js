//import Main from './views/main.js';
import Node from '../views/layout/node.js';

export default class Frame {


	constructor(){

//		this.frame = ['main','node'];
/*        let proxy = new Proxy(this, this.watch);

        window.addEventListener('scroll', proxy);*/

		//add event.listener

		let event = new Event('changeFrame');
		
		window.addEventListener('changeFrame', () => this.watch());

		//load all frame
/*		for (const arrValue of this.frame) {
		  console.log(arrValue); // 'hello', 'world'
		}*/


	}


	watch(){

		console.log('changeFrame - ok');
		//this.node =



	}


	main(){

		//this.node =



	}




	node(){

	//	this.node =



	}





}
//import Main from './views/main.js';
import Node from '../views/layout/node.js';

export default class Frame {


	constructor(){

//		this.frame = ['main','node'];
/*        let proxy = new Proxy(this, this.watch);

        window.addEventListener('scroll', proxy);*/

		//add event.listener

		
		
		window.addEventListener('changeFrame', (e) => this.watch(e));

		//load all frame
/*		for (const arrValue of this.frame) {
		  console.log(arrValue); // 'hello', 'world'
		}*/


	}


	watch(e){

		console.log(e);
		//this.node =



	}


	main(){

		//this.node =



	}




	node(){

	//	this.node =



	}





}
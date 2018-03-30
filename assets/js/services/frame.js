import Home from '../views/layout/home.js';
import Node from '../views/layout/node.js';

export default class Frame {


	constructor(){




		this.app = new PIXI.Application(window.innerWidth, window.innerHeight, { backgroundColor : 0x000000, antialias : true });  // Add the view to the DOM 		

		document.body.appendChild(this.app.view);  // ex, add display objects 


		//const Templates = []


		this.render();
		

/*		var that = this;

        var elements = document.getElementsByClassName('call-method');

        for(var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('changeFrame', function() {
            	console.log('in');
                that[this.dataset.method](this);
            });
        }
*/


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
		//let that = this;
		//let that = e.detail;
/*		var fn = Reflect.field(this, that);
        Reflect.callMethod(this, fn, []);*/
        //eval("this."+that+"()");
		//this.that();

		switch(e.detail) { 
		   case node: { 
		   	console.log('in switch node');
		      this.node(); 
		      break; 
		   } 
		   case constant_expr2: { 
		      //statements;
		      break; 
		   } 
		   default: { 
		      //statements; 
		      break; 
		   } 
		}

		console.log('in watch - after node');
		//eval(e.detail);
		//this.node =



	}


	main(){

		//this.node =



	}






}
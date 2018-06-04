import Header from '../components/header.js';
import Footer from '../components/footer.js';
import NodeList from '../components/NodeList.js';
//import Adder from '../components/adder.js';

export default class Home{


	constructor(x,y,w,h){

		

		//this.container.name = 'Home';
		//console.log($(this).attr('class'));

		this.addElements();

	}


	addElements(){

				let header = new Header(0,0,100,100);

				let toto = header.addTags();
				document.body.innerHTML = toto;


		

/*
		let footer = new Footer(0,this.height - 100,this.width,100);
		let TheFooter = footer.load();
		this.attach(TheFooter);
*/
/*		const rayonButton = 30;
		this.adder = new Adder(rayonButton);
		this.adder.x = 20;
		this.adder.y = window.innerHeight - (rayonButton * 2 ) - 20;
		this.attach(this.adder);*/


	}
		



	drawBkground(){



	}



}
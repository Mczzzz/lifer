import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';

export default class NodeList extends UIContainer{


	constructor(x,y,width,height){


		super(x,y,width,height);

		this.width = width;
		this.height = height;

		this.data = {};

		//attach event on container
		window.addEventListener('updateNodeList', (e) => this.updateList(e.detail));


	}



	addElements(){

		

	}


	updateList(data){

		//nettoyage de l'actuel

		//relance de la construction
		console.log('in update List');
		console.log(data);
		//console.log(JSON.parse(data));
		//console.log(this.data);

		//this.setData(data);

		this.data = JSON.parse(data);
		
		console.log(this.data);
		console.log(this.data.data);

		for (var i = 0; i < this.data.data.length; i++) {
  			console.log(this.data.data[i]);
		}
		

		//this.addElements();

	}


	setData(data){

		console.log(data);
		this.data = JSON.parse(data);
	}


	addBkgd(){

		let rect = new Rect(0xFFFFFF, 0, 0 , 0 , this.width , 100);	
		this.attach(rect);

	}


	addText(){

		let text = new PIXI.Text("OK",{fontFamily : 'Arial', fontSize: 80, fill : 0x000000, align : 'center'});
		text.x = (this.width / 2) - (text.width / 2);
		text.y = 10;
		this.attach(text);
	}
}
import NodeCollection from '../../collections/NodeCollection.js'
import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';

export default class NodeList extends UIContainer{


	constructor(x,y,width,height){


		super(x,y,width,height);

		this.container.name = 'NodeList';

		this.width = width;
		this.height = height;

		this.data = {};
		this.size = 0;
		//attach event on container
		window.addEventListener('updateNodeList', (e) => this.updateList(e.detail));

		this.collector = new NodeCollection();

		//un trigger renvoi le resultat
		this.collector.getAll();


	}



	addElements(MyText){

		//console.log('on attach les élements')
		let text = new PIXI.Text(MyText,{fontFamily : 'Arial', fontSize: 24, fill : 0x000000, align : 'center'});
		text.x = 10;
		text.y = this.size;
		this.attach(text);

		this.size = this.size + 30;	
		//console.log(this.size);	

	}


	updateList(data){

console.log(this.container);
		while (this.container.firstChild) {
		    this.container.removeChild(this.container.firstChild);
		}
		//nettoyage de l'actuel
		this.size = 0;

		//relance de la construction
		this.data = JSON.parse(data);

		for (let key in this.data.data) {
  			//console.log(this.data.data[key].text);
  			this.addElements(this.data.data[key].text);
		}
	//	console.log('on pass dans le load');
		this.load();
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
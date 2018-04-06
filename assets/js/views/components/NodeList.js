import NodeCollection from '../../collections/NodeCollection.js'
import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';
import NodeListButton from './NodeListButton.js';

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

		this.addEvents();


	}



	addElements(MyText, key){

		let NLButton = new NodeListButton(0, this.size, this.width, 90,MyText, key);
		let TheNLButton = NLButton.load();
		this.attach(TheNLButton);
		this.size = this.size + 100;	
		//console.log(this.size);	

	}


	updateList(data){

//console.log(this.container.childe);
/*		while (this.container.firstChild) {
		    this.container.removeChild(this.container.firstChild);
		}*/
		this.container.children = [];

		//nettoyage de l'actuel
		this.size = 0;

		//relance de la construction
		this.data = JSON.parse(data);

		for (let key in this.data.data) {
  			//console.log(this.data.data[key].text);
  			this.addElements(this.data.data[key].text, key);
		}
	//	console.log('on pass dans le load');
		this.load();
		//this.addElements();
		

	}

	addEvents(){
		this.container
        .on('touchstart', this.onDragStart())
        .on('touchend', this.onDragEnd)
        .on('touchendoutside',this.onDragEnd())
        .on('touchmove', this.onDragMove());
    }



	onDragStart(event)
	{
	    // store a reference to the data
	    // the reason for this is because of multitouch
	    // we want to track the movement of this particular touch
	    this.data = event.data;
	    console.log(this.data.global.x);
	    this.position.x = this.data.global.x;
	    this.alpha = 0.8;
	    this.dragging = true;
	}

	onDragEnd()
	{
	    this.alpha = 1;

	    this.dragging = false;

	    // set the interaction data to null
	    this.data = null;
	     renderer.render(stage);
	}

	onDragMove()
	{
		console.log('mooooove');
	    if (this.dragging)
	    {
	    	//console.log(this.parent);
	        var newPosition = this.data.getLocalPosition(this.parent);
	        this.position.x = newPosition.x;
	        //this.position.y = newPosition.y;
	    }
	}



}
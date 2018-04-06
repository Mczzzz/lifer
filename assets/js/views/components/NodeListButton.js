import NodeCollection from '../../collections/NodeCollection.js'
import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';

export default class NodeListButton extends UIContainer{


	constructor(x,y,width,height, Mytext, key){


		super(x,y,width,height);

		this.MyText = Mytext;
		this.MyKey = key;

	}



	addElements(){

		console.log('addElement NodeListButton');
		this.addBkgd();

		this.addText();

		this.addEvent();
	}



	

	addBkgd(){

		console.log('addBackground NodeListButton');
		let rect = new Rect(0xFFFFFF, 0, 0 , 10 , this.width , 80);	
		this.attach(rect);

	}



	addText(){

		console.log('addText NodeListButton');
		//console.log('on attach les élements')
		let text = new PIXI.Text(this.MyText,{fontFamily : 'Arial', fontSize: 24, fill : 0x000000, align : 'center'});
		text.x = 10;
		text.y = 40;
		this.attach(text);

		//console.log(this.size);	


	}


	addEvent(){

		this.container.on('tap', (event) => {
				let NodeEvent = new CustomEvent('changeFrame', {'detail' : {'frame' : 'node'}});
                window.dispatchEvent(NodeEvent);

                console.log('addEvent button before getOneNode + set ')
                let Ncollect = new NodeCollection();
                Ncollect.getOneNode(this.MyKey);
			});


	}

}
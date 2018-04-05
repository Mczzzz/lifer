import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';

export default class Button extends UIContainer{


	constructor(x,y,width,height){


		super(x,y,width,height);

		this.width = width;
		this.height = height;


	}


	addElements(){

		this.addBkgd();

		this.addText();

	}


	addBkgd(){

		let rect = new Rect(0xFFFFFF, 0, 0 , 0 , this.width , this.height);	
		this.attach(rect);

	}


	addText(){

		let text = new PIXI.Text("OK",{fontFamily : 'Arial', fontSize: 80, fill : 0xFFFFFF, align : 'center'});
		text.x = this.width - (text.width / 2);
		text.y = 10;
		this.attach(text);
	}
}
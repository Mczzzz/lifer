import UIContainer from '../../services/uiContainer.js';
import RoundedRect from '../elements/RoundedRect.js';

export default class Button extends UIContainer{


	constructor(x,y,width,height){


		super(x,y,width,height);


	}


	addElements(){

		this.addBkgd();

		this.addText();

	}


	addBkgd(){

		let RRect = new RoundedRect(0xb4334e, 3, 20, 0 , 0 , this.width , this.height, 1);	
		this.attach(RRect);

	}


	addText(){

		let text = new PIXI.Text("OK",{fontFamily : 'Arial', fontSize: 50, fill : 0xb4004e, align : 'center'});
		text.x = (this.width / 2) - (text.width / 2);
		text.y = 10;
		this.attach(text);
	}
}
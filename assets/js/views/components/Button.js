import UIContainer from '../../services/uiContainer.js';
import RoundedRect from '../elements/RoundedRect.js';

export default class Button extends UIContainer{


	constructor(x,y,width,height,text){


		super(x,y,width,height);

		this.text = text;

	}


	addElements(){

		this.addShadow();
		this.addBkgd();

		this.addText();

	}

	addShadow(){

		let RRectS = new RoundedRect(0xFFFFFF, 3, 20, 0 , 0 , this.width , this.height, 1);	
		
		let dropShadowFilter = new PIXI.filters.BlurFilter();
	    dropShadowFilter.blur = 8;

		RRectS.filters = [dropShadowFilter];

		this.attach(RRectS);

	}

	addBkgd(){

		let RRect = new RoundedRect(0xb4004e, 3, 20, 0 , 0 , this.width , this.height, 1);	
		this.attach(RRect);

	}


	addText(){

		let text = new PIXI.Text(this.text,{fontFamily : 'Arial', fontSize: 50, fill : 0xFFFFFF, align : 'center'});
		text.x = (this.width / 2) - (text.width / 2);
		text.y = 10;
		this.attach(text);
	}
}
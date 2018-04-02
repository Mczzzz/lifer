import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';

export default class Button extends UIContainer{


	constructor(x,y,width,height){


		super(x,y,width,height);

		this.width = width;
		this.height = height;


	}


	addElements(){

		let rect = new Rect(0x00FF00, 0, 0 , 0 , this.width , this.height);	
		this.attach(rect);


	}




}
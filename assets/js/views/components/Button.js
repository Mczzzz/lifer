import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';

export default class Button extends UIContainer{


	constructor(x,y,width,height){

		console.log('button constructor');
		super(x,y,width,height);

		this.width = width;
		this.height = height;


	}


	addElements(){

		console.log('button add elements');
		console.log(this.container.x);
		console.log(this.container.y);
		console.log(this.width);
		console.log(this.height);
		let rect = new Rect(0xFFFFFF, 0, this.container.x , this.container.y , this.width , this.height);
		this.attach(rect);


	}




}
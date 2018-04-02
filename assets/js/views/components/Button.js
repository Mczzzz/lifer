import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';

export default class Button extends UIContainer{


	constructor(x,y,width,height){

		console.log('button constructor');
		super(x,y,width,height);



	}


	addElements(){

		console.log('button add elements');
		let rect = new Rect(0xA7B8C9 , 0, this.container.x , this.container.y , this.container.width , this.container.height);
		this.attach(rect);


	}




}
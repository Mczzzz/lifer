import moment from 'moment-es6';
import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';


export default class Header  extends UIContainer{
	

		constructor(){

		moment.locale('fr');
     	
     	super(); 


	}


	addElements(){


		let text = new PIXI.Text(moment().format('dddd Do MMMM YYYY'),{fontFamily : 'Arial', fontSize: 12, fill : 0xff1010, align : 'center'});
		text.x = 5;
		text.y = 5;
		this.attach(text);


	}



	addShadowBackground(){

		let rect = new Rect(0xFFFFFF , 0, 0 , 0 , window.innerWidth , 50);

		let dropShadowFilter = new PIXI.filters.BlurFilter();
	    dropShadowFilter.blur = 30;

		rect.filters = [dropShadowFilter];
		this.attach(rect);
	}


	addBackground(){

		let rect = new Rect(0xE8E8E8 , 0, 0 , 0 , window.innerWidth , 50);
		this.attach(rect);


	}





}
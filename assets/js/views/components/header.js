import moment from 'moment-es6';
import UIContainer from '../../services/uiContainer.js';
import Rect from '../elements/rect.js';


export default class Header  extends UIContainer{
	

	constructor(x,y,w,h){
	
		console.log('header before super');
		super(x,y,w,h);

		moment.locale('fr');
     	


	}


	addElements(){

		this.addBkgd();

		this.addDate();


	}


	addBkgd(){

		this.addShadowBackground();
		this.addBackground();

	}


	addShadowBackground(){

		let Srect = new Rect(0x999999 , 0, 0 , 0 , window.innerWidth , 50);

		let dropShadowFilter = new PIXI.filters.BlurFilter();
	    dropShadowFilter.blur = 2;

		Srect.filters = [dropShadowFilter];
		this.attach(Srect);
	}


	addBackground(){

		let rect = new Rect(0xE8E8E8 , 0, 0 , 0 , window.innerWidth , 50);
		this.attach(rect);


	}



	addDate(){

		this.addLiteralDate();
		this.addWeekDate();

	}


	addLiteralDate(){

		let text = new PIXI.Text(moment().format('dddd Do MMMM YYYY'),{fontFamily : 'Arial', fontSize: 12, fill : 0xff1010, align : 'center'});
		text.x = 5;
		text.y = 10;
		this.attach(text);

	}



	addWeekDate(){


		let text = new PIXI.Text(moment().format('WW'),{fontFamily : 'Arial', fontSize: 12, fill : 0xff1010, align : 'center'});
		text.x = 5;
		text.y = 5;
		this.attach(text);

	}

}
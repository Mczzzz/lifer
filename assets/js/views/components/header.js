import moment from 'moment-es6';
import Rect from '../elements/rect.js';


export default class Header {
	

		constructor(){

		moment.locale('fr');
     	
     	this.declareContainer();

        this.addElements();



        return this.container;

	}


	declareContainer(){

		this.container = new PIXI.Container();
		this.container.interactive = true;

	}



	addElements(){

		let rect = new Rect(0xE8E8E8 , 0, 0 , 0 , window.innerWidth , 50);
		this.attach(rect);

		console.log(moment(123).fromNow());

		let text = new PIXI.Text(moment().format('DDDD DO MMMM YYYY'),{fontFamily : 'Arial', fontSize: 12, fill : 0xff1010, align : 'center'});
		text.x = 5;
		text.y = 5;
		this.attach(text);


	}





	attach(components){

		this.container.addChild(components);

	}



}
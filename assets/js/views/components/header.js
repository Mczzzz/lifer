import moment from 'moment-es6';
import Rect from '../elements/rect.js';


export default class Header {
	

		constructor(){

     	
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

		let text = new PIXI.Text(new Date(),{fontFamily : 'Arial', fontSize: 8, fill : 0xff1010, align : 'center'});
		this.attach(text);


	}





	attach(components){

		this.container.addChild(components);

	}



}
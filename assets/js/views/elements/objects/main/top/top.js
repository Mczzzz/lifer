import Up   from './up/up.js'
import Down from './down/down.js'

export default class top {
	

	constructor(){

		this.MyClass = "top";
		this.container = document.getElementsByClassName(this.MyClass)[0];

		this.init();

	}
	

	init(){

		this.initUp();
		this.up.loadData();

		this.initDown();
	
	}

	initUp(){

		let EvParSel = 'upSelect';

		this.up = new Up(this.container, EvParSel);

	    this.container.addEventListener(EvParSel, (data) => this[EvParSel](data));
	}


	initDown(){

		let EvParSel = 'downSelect';

		this.down = new Down(this.container,EvParSel);

	    this.container.addEventListener(EvParSel, (data) => this[EvParSel](data));

	}


	upSelect(){

		console.log('in up Select');


	}


}
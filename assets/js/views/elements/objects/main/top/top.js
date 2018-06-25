import Up   from './up/up.js'
import Down from './down/down.js'

export default class top {
	

	constructor(){

		this.MyClass = "top";
		this.container = document.getElementsByClassName(this.MyClass)[0];

		let EvParSel = 'upSelect';
	    this.container.addEventListener(EvParSel, (data) => this[EvParSel](data));


		this.up   = new Up(this.container, 'upSelect');
		this.down = new Down();

	}
	

	upSelect(){

		console.log('in up Select');


	}


}
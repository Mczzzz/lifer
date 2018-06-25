import Up   from './up/up.js'
import Down from './down/down.js'

export default class top {
	

	constructor(parent, event){

		this.parent = parent;
		this.EvParent = event;

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

		this.up = new Up(this.container);

		let EvParSel = 'callBack';
	    this.container.addEventListener(EvParSel, (data) => this[EvParSel](data));
	}


	initDown(){

		let EvParSel = 'downSelect';

		this.down = new Down(this.container,EvParSel);

	    this.container.addEventListener(EvParSel, (data) => this[EvParSel](data));

	}



	upSelect(data){

		this.down.loadData(data.detail.detail.node);


	}


	downSelect(data){

		this.up.hide();
		//remonte event pour le breadcrumb
		data.breadcrumb = this.up.getObjPathToNode();

		let ev = new CustomEvent(this.EvParent, {'detail' : data});
        this.parent.dispatchEvent(ev);
	}

}
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

		this.initListener();

		this.initUp();
		this.up.loadData();

		this.initDown();
	
	}

	initUp(){

		this.up = new Up(this.container);

	}


	initDown(){

		this.down = new Down(this.container);

	}




	initListener(){
  
	    this.container.addEventListener('callBack', (data) => this.callBack(data));

	}


	callBack(data){

		let methode = "on_"+data.detail.element+"_"+data.detail.Event.type;

		this[methode](data.detail);

	}



	on_topUp_select_node(data){

		this.down.loadData(data.data.node);


	}


	on_topDown_select_node(data){

		this.up.hide();
		//remonte event pour le breadcrumb
		data.breadcrumb = this.up.getObjPathToNode();

		let ev = new CustomEvent('callBack', {'detail' : data});
        this.parent.dispatchEvent(ev);
	}

}
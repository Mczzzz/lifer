import Up   from './up/up.js'
import Down from './down/down.js'

export default class top {
	

	constructor(parent){

		this.parent = parent;

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

		console.log('on_topUp_select_node');
		this.down.loadData(data.data.node);
		this.down.show();


	}


	on_topDown_select_node(data){

		this.up.hide();
		this.down.show();
		//remonte event pour le breadcrumb
		data.breadcrumb = this.up.getObjPathToNode();

		data.element = "top_"+data.element;

		let ev = new CustomEvent('callBack', {'detail' : data});
        this.parent.dispatchEvent(ev);
	}




	focusUp(){

		this.up.show();
		this.down.hide();
	}






}

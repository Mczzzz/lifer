import superViews from "../../../../elements/common/super/views.js"
import Up   from './up/up.js'
import Down from './down/down.js'

export default class top extends superViews{
	

	constructor(parent,MyClass){

		super(parent,MyClass);

		this.init();

	}
	

	init(){

		this.initListener();

		this.initUp();
		this.up.loadData();

		this.initDown();
	
	}

	initUp(){

		this.up = new Up(this.container,"topUp");
		this.up.show();

	}


	initDown(){

		this.down = new Down(this.container,"topDown");

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
		this.down.show();
		this.down.minForceFlex();


	}


	on_topDown_select_node(data){

		this.up.hide();
		this.down.show();

		data.breadcrumb = this.up.getObjPathToNode();

		data.element = "top_"+data.element;

		let ev = new CustomEvent('callBack', {'detail' : data});
        this.parent.dispatchEvent(ev);
	}




	focusUp(data){

		this.up.show(data);
		this.down.hide();
	}






}

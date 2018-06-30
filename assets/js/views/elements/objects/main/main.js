import superViews from "../../../elements/common/super/views.js"
import Breadcrumb from './breadcrumb/breadcrumb.js';
import Top from './top/top.js';
import Bottom from './bottom/bottom.js';

export default class main extends superViews{
	

	constructor(parent, MyClass){

		super(parent, MyClass);
	
		this.init();

	}
	

	init(){

		this.initListener();

		this.breadcrumb = new Breadcrumb(this.container,"breadcrumb");
		this.top = new Top(this.container,"top");
		this.bottom = new Bottom(this.container,"bottom");


	}


	initListener(){
  
	    this.container.addEventListener('callBack', (data) => this.callBack(data));

	}


	callBack(data){

		console.log(data);

		let methode = "on_"+data.detail.element+"_"+data.detail.Event.type;
		console.log(methode);
		this[methode](data.detail);

	}

	on_top_topDown_select_node(data){

		this.breadcrumb.loadData(data.breadcrumb, 'bcContainer');
		this.breadcrumb.show();
		this.bottom.openManage();

	}

	on_breadcrumb_select(data){


		//action on top
		this.top.focusUp(data);
		this.breadcrumb.hide();
	}
	


}
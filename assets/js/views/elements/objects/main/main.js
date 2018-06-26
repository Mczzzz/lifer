import Breadcrumb from './breadcrumb/breadcrumb.js';
import Top from './top/top.js';
import Bottom from './bottom/bottom.js';

export default class main {
	

	constructor(){


		this.MyClass = "main";

		this.container = document.getElementsByClassName(this.MyClass)[0];

		this.init();

	}
	

	init(){

		this.initListener();

		this.breadcrumb = new Breadcrumb(this.container);
		this.top = new Top(this.container);
		this.bottom = new Bottom(this.container);


	}


	initListener(){
  
	    this.container.addEventListener('callBack', (data) => this.callBack(data));

	}


	callBack(data){

		let methode = "on_"+data.detail.element+"_"+data.detail.Event.type;
		console.log(methode);
		this[methode](data.detail);

	}

	on_top_topDown_select_node(data){

		this.breadcrumb.loadData(data.breadcrumb, 'bcContainer');

	}

	
}
import BreadcrumbCommon from '../../../../elements/common/ui/breadcrumb.js';


export default class breadcrumb {
	

	constructor(parent){

		this.parent = parent;

		this.MyClass = "breadcrumb";

		this.container = document.getElementsByClassName(this.MyClass)[0];

		this.init();

	}
	
	init(){

		this.initListener();
		this.initBreadcrumb();

	}

	initBreadcrumb(){

		this.BC = new BreadcrumbCommon();
	}


	loadData(data){
		this.BC.init("bcContainer", data ,'ObjectBreadParent',true);
	}


	initListener(){
	  
		    this.container.addEventListener('callBack', (data) => this.callBack(data));

	}


	callBack(data){

		let methode = "on_"+data.detail.element+"_"+data.detail.Event.type;

		this[methode](data.detail);

	}


}
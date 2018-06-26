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

		this.BC = new BreadcrumbCommon(this.container);
	}


	loadData(data,element){

		this.BC.init(element, data ,true);
	}


	initListener(){
	  
		    this.container.addEventListener('callBack', (data) => this.callBack(data));

	}


	callBack(data){
		console.log('in callBack breadcrumb');
		let methode = "on_"+data.detail.element+"_"+data.detail.Event.type;
		console.log(methode);
		this[methode](data.detail);

	}


}
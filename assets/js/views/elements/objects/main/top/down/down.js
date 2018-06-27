import jsTreeContainer from '../../../../../elements/common/ui/jsTreeContainer.js';


export default class down {
	

	constructor(parent,ServicesContainer){

		this.ServicesContainer = ServicesContainer;

		this.parent = parent;

		this.MyClass = "topDown";

		this.container = document.getElementsByClassName(this.MyClass)[0];
		this.container.style.background = "#a5dc86";
		//this.container.style.transition	   = '0.4s cubic-bezier(0, 0.87, 0.01, 0.87)';


		this.initTree();
		this.initListener();

	}

	initTree(){

		this.jsTree = new jsTreeContainer(this.container,'ObjectTree','JsTreeObjects');
		this.ServicesContainer.search.addTarget(this.jsTree.getSearchElements());
       
	}

	
	loadData(data){

		this.jsTree.loadData(data);

	}


	hide(){

		this.container.style.display = "none";
		this.container.style.flex = "0";
		this.container.style.padding = "0px";
		this.jsTree.hide();

	}


	show(){

		this.container.style.display = "";
		this.container.style.flex = "1";
		this.container.style.padding = "10px";
		this.jsTree.show();

	}

	minForceFlex(){
		this.container.style.flex = "0";
	}


	initListener(){

	    this.container.addEventListener('callBack', (data) => this.callBack(data));

	}


	callBack(data){
		
		this["on_"+data.detail.Event.type](data.detail);

	}

	on_select_node(data){

		data.element = this.MyClass;
		let ev = new CustomEvent('callBack', {'detail' : data});
        this.parent.dispatchEvent(ev);

	}





}
import jsTreeContainer from '../../../../../elements/common/ui/jsTreeContainer.js';


export default class up {
	

	constructor(parent, ServicesContainer){

		this.ServicesContainer = ServicesContainer;

		this.parent = parent;

		this.MyClass = "topUp";

		this.container = document.getElementsByClassName(this.MyClass)[0];
		this.container.style.background = "#e8eff7";

		this.initTree();	    
		this.initListener();

	}
	
	initTree(){

		this.jsTree = new jsTreeContainer(this.container,'Container','JsTreeContainer');
		this.ServicesContainer.search.addTarget(this.jsTree.getSearchElements());
    
	}


	getObjPathToNode(){
		return this.jsTree.getObjPathToNode();
	}



	loadData(){
		this.jsTree.loadData();
	}


	hide(){

		this.container.style.display = "none";
		this.container.style.padding = "0px";
		this.container.style.flex = "0";


	}

	show(data = false){

		this.container.style.display = "";
		this.container.style.padding = "10px";
		this.container.style.flex = "1";

		if(data){
			this.jsTree.openNode(data.data);
		}


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
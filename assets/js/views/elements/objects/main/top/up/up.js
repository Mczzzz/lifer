import jsTreeContainer from '../../../../../elements/common/ui/jsTreeContainer.js';


export default class up {
	

	constructor(parent){

		this.parent = parent;

		this.MyClass = "topUp";

		this.container = document.getElementsByClassName(this.MyClass)[0];

		this.initTree();	    
		this.initListener();

	}
	
	initTree(){

		this.jsTree = new jsTreeContainer(this.container,'Container','JsTreeContainer');
    
	}


	getObjPathToNode(){
		return this.jsTree.getObjPathToNode();
	}



	loadData(){
		this.jsTree.loadData();
	}


	hide(){

		this.container.style.display = "none";

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
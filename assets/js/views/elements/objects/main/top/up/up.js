import jsTreeContainer from '../../../../../elements/common/ui/jsTreeContainer.js';


export default class up {
	

	constructor(parent, event){

		this.parent = parent;

		this.MyClass = "topUp";

		this.container = document.getElementsByClassName(this.MyClass)[0];

		this.initTree();	    

	}
	
	initTree(){

		let EvParSel = 'callBack';

		this.jsTree = new jsTreeContainer(this.MyClass,'Container','JsTreeContainer');

     	this.jsTree.onElementSelect(this.container, EvParSel);
	    
	    this.container.addEventListener(EvParSel, (data) => this[EvParSel](data));

	}

	loadData(){
		this.jsTree.loadData();
	}


	getObjPathToNode(){
		this.jsTree.getObjPathToNode();
	}


	callBack(data){
		console.log(data.detail.Event.type);
		this["on_"+data.detail.Event.type](data);

	}


	on_select_node(data){
		console.log('in on_select_node');
		let ev = new CustomEvent(this.EvParent, {'detail' : data});
        this.parent.dispatchEvent(ev);

	}


	hide(){

		this.container.style.display = "none";

	}



}
import jsTreeContainer from '../../../../../elements/common/ui/jsTreeContainer.js';


export default class up {
	

	constructor(parent, event){

		this.parent = parent;
		this.EvParent = event;
		this.MyClass = "topUp";

		this.container = document.getElementsByClassName(this.MyClass)[0];

		this.initTree();	    

	}
	
	initTree(){

		let EvParSel = 'jsTreeSelect';

		this.jsTree = new jsTreeContainer(this.MyClass,'Container','JsTreeContainer');

     	this.jsTree.onElementSelect(this.container, EvParSel);
	    
	    this.container.addEventListener(EvParSel, (data) => this[EvParSel](data));

	}

	loadData(){
		this.jsTree.loadData();
	}

	jsTreeSelect(data){

		let ev = new CustomEvent(this.EvParent, {'detail' : data});
        this.parent.dispatchEvent(ev);

	}



}
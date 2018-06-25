import jsTreeContainer from '../../../../../elements/common/ui/jsTreeContainer.js';


export default class up {
	

	constructor(parent, event){

		this.parent = parent;
		this.EvParent = event;
		this.MyClass = "topUp";

		this.container = document.getElementsByClassName(this.MyClass)[0];

     	this.jsTree = new jsTreeContainer(this.MyClass,'Container','JsTreeContainer');
     	

	    let EvParSel = 'jsTreeSelect';
	    this.container.addEventListener(EvParSel, (data) => this[EvParSel](data));

	    this.jsTree.initEventsElementSelect(this.container, EvParSel);

	}
	

	loadData(){
		this.jsTree.loadData();
	}

	jsTreeSelect(data){

		console.log('in up.js');
		let ev = new CustomEvent(this.EvParent, {'detail' : data});
        this.parent.dispatchEvent(ev);

	}



}
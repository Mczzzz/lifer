import jsTreeContainer from '../../../../../elements/common/ui/jsTreeContainer.js';


export default class down {
	

	constructor(parent, event){

		this.parent = parent;
		this.EvParent = event;

		this.MyClass = "topDown";

		this.container = document.getElementsByClassName(this.MyClass)[0];


		this.initTree();

	}


	initTree(){

		let EvParSel = 'jsTreeSelect';

		this.jsTree = new jsTreeContainer(this.MyClass,'ObjectTree','JsTreeObjects');

     	this.jsTree.onElementSelect(this.container, EvParSel);
	    
	    this.container.addEventListener(EvParSel, (data) => this[EvParSel](data));
	    
	}
	

	loadData(data){
		console.log('in down loaddata');
		console.log(data);
		this.jsTree.loadData(data);
	}

	jsTreeSelect(data){

		console.log('in down.js');
		let ev = new CustomEvent(this.EvParent, {'detail' : data});
        this.parent.dispatchEvent(ev);

	}


}
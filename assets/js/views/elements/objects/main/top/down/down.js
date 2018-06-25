import jsTreeContainer from '../../../../../elements/common/ui/jsTreeContainer.js';


export default class down {
	

	constructor(parent, event){

		this.parent = parent;
		this.EvParent = event;

		this.MyClass = "topDown";

		this.container = document.getElementsByClassName(this.MyClass)[0];

     	this.jsTreeParent = new jsTreeContainer(this.MyClass,'ObjectTree','JsTreeObjects');

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
import jsTreeContainer from '../../../../../elements/common/ui/jsTreeContainer.js';


export default class up {
	

	constructor(){

		this.MyClass = "topUp";

		this.container = document.getElementsByClassName(this.MyClass)[0];
		console.log(this.container);
     	this.jsTreeParent = new jsTreeContainer(this.MyClass,'Container','JsTreeContainer');
     	this.jsTreeParent.loadData();

     	//ask Parent tree to be informed on select
	    let EvParSel = 'jsTreeSelect';

	    this.container.addEventListener(EvParSel, (data) => this[EvParSel](data));

	    this.jsTreeParent.initEventsElementSelect(this.MyClass, EvParSel);

	}
	

	jsTreeSelect(data){

		console.log(data);
		console.log('in up.js');

	}



}
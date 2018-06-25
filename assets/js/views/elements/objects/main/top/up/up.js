import jsTreeContainer from '../../../../../elements/common/ui/jsTreeContainer.js';


export default class up {
	

	constructor(){

		this.container = $('.topUp');

     	this.jsTreeParent = new jsTreeContainer('topUp','Container','JsTreeContainer');
     	this.jsTreeParent.loadData();

     	//ask Parent tree to be informed on select
	    let EvParSel = 'ObjectJsTreeParentSelect';
	    this.addEventListener(EvParSel, (data) => this[EvParSel](data));
	    this.jsTreeParent.initEventsElementSelect(EvParSel);

	}
	

	ObjectJsTreeParentSelect(){

console.log('in up.js');

	}



}
import jsTreeContainer from '../../../../../elements/common/ui/jsTreeContainer.js';


export default class up {
	

	constructor(){

		this.container = $('.topUp');

     	this.jsTreeParent = new jsTreeContainer('topUp','Container','JsTreeContainer');
     	this.jsTreeParent.loadData();

	}
	


}
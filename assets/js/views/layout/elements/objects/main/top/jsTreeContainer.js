export default class jsTreeContainer {


	constructor(HTMLParent){
		console.log('in contructor');
		//create the div to attach to parent
		let JsTreeContainer = document.createElement("div");
		JsTreeContainer.className = "JsTreeContainer";
		$('.'+HTMLParent).append(JsTreeContainer);

	}


	initJstreeContainer(){


	}


}
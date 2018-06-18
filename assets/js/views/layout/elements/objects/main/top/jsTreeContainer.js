export default class jsTreeContainer {


	constructor(HTMLParent){

		//create the div to attach to parent
		let JsTreeContainer = document.createElement("div");
		JsTreeContainer.className = "JsTreeContainer";
		$('.'+HTMLParent).append(JsTreeContainer);

	}


	initJstreeContainer(){


	}


}
export default class jsTreeContainer {


	constructor(HTMLParent){
		console.log('in contructor');
		//create the div to attach to parent
		let JsTreeContain = document.createElement("div");
		JsTreeContain.className = "JsTreeContain";
		$('.'+HTMLParent).append(JsTreeContain);

	}


	initJstreeContainer(){


	}


}
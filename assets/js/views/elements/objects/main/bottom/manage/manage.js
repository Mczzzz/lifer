import superViews from "../../../../../elements/common/super/views.js"
import List from './list/list.js';

export default class manage extends superViews{


	constructor(parent,MyClass,path){

		super(parent,MyClass,path);

		this.init();

	}
	

	init(){

		this.container.style.overflowY= "scroll";
		this.container.style.fontFamily = "'Titillium Web',sans-serif,Arial,sans-serif"
		this.initContainer();

	}


	initContainer(){

		this.List = new List(this.container,"list",this.path);

	}


	open(){

		this.List.showList();

		this.List.getList();
	}

	close(){

		this.List.hideList();
	}


}
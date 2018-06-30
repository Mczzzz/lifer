import superViews from "../../../../elements/common/super/views.js"
import Manage from './manage/manage.js';
import Tools from './tools/tools.js';

export default class bottom extends superViews{
	

	constructor(parent,MyClass){


		super(parent,MyClass);

		this.init();

	}
	

	init(){

		//this.Manage = new Manage(this.container);

		this.Tools  = new Tools(this.container,"tools");
		this.Manage = new Manage(this.container,"manage");
	}


	openManage(){
		this.Manage.open();
	}

	hideManage(){
		this.Manage.close();
	}

}
import superViews from "../../../../elements/common/super/views.js"
import Manage from './manage/manage.js';
import Tools from './tools/tools.js';

export default class bottom extends superViews{
	

	constructor(parent,MyClass,path){


		super(parent,MyClass,path);

		this.init();

	}
	

	init(){

		//this.Manage = new Manage(this.container);

		this.Tools  = new Tools(this.container,"tools",this.path);
		this.Manage = new Manage(this.container,"manage",this.path);
	}


	openManage(ojectId,leafId){
		console.log('openMange');
		this.Manage.open(ojectId,leafId);
	}

	hideManage(){
		console.log('hideMange');
		this.Manage.close();
	}

}
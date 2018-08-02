import superViews from "../../elements/common/super/views.js"
import Breadcrumb from './main/breadcrumb.js';
import Top from './main/top.js';
import Bottom from './main/bottom.js';

export default class main extends superViews{
	

	constructor(parent, MyClass, path){

		super(parent, MyClass, path);
	
		this.init();

	}
	

	init(){

		this.container.style.flex = 1;
		this.container.style.display = "flex";
		this.container.style.flexDirection = "column";

		this.initChilds();

	}


	initChilds(){

		//this.breadcrumb = new Breadcrumb(this.container,"breadcrumb",this.path);

		this.top = new Top(this.container,"top",this.path);

		this.bottom = new Bottom(this.container,"bottom",this.path);

	}

		
	
	//CALLBACKS

	on_top_topDown_select_node(data){

		this.breadcrumb.loadData(data.breadcrumb, 'bcContainer');
		this.breadcrumb.show();
		console.log('openManage');
		this.bottom.openManage();
		this.bottom.openNoteTools();

	}

	on_breadcrumb_select(data){

		console.log(data)
		//action on top
		this.top.focusUp(data);
		this.breadcrumb.hide();
		this.bottom.hideManage();
		this.bottom.hideNodeTools()
	}


	

}
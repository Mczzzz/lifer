import superViews from "../../../elements/common/super/views.js";
import Up   from './top/up.js';
import Down from './top/down.js';

export default class top extends superViews{
	

	constructor(parent,MyClass,path){

		super(parent,MyClass,path);

		this.init();

	}
	

	init(){

		this.setStyle("flex" , 1);
		this.setStyle("display" , "flex");
		this.setStyle("flexDirection" , "column");

		this.initChilds();

	}

	initChilds(){

		this.up = new Up(this.container,"topUp",this.path);
		this.up.show();
		this.up.loadData();

		this.down = new Down(this.container,"topDown",this.path);

	}



	//CALLBACKS

	on_topUp_select_node(data){


		this.down.loadData(data.data.node);
		this.down.show();
		this.down.minForceFlex();


	}


	on_topDown_select_node(data){

		this.up.hide();
		this.down.show();

		data.breadcrumb = this.up.getObjPathToNode();

		data.element = "top_"+data.element;

		this.callBackToParent(data);

	}



	//PUBLICS
	
	focusUp(data){

		this.up.show(data);
		this.down.hide();
	}

}

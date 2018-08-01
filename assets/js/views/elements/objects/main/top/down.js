import { SearchServices } from '../../../../../services/search.js';
import superViews from "../../../common/super/views.js"
import jsTreeContainer from '../../../common/ui/jsTreeContainer.js';


export default class down extends superViews{
	

	constructor(parent, MyClass,path){

	
		super(parent, MyClass,path);

		this.container.style.background = "#a5dc86";
		//this.container.style.transition	   = '0.4s cubic-bezier(0, 0.87, 0.01, 0.87)';


		this.init();

	}

	init(){

		this.container.style.overflowY = "scroll";
		this.container.style.display = "none";
		
		this.initTree();
		//this.initListener();

	}


	initTree(){

		this.jsTree = new jsTreeContainer(this.container,'ObjectTree','JsTreeObjects');

		SearchServices.addTarget(this.jsTree.getSearchElements());

       
	}

	
	loadData(data){

		this.jsTree.loadData(data);

	}


	hide(){

		this.container.style.display = "none";
		this.container.style.flex = null;
		this.container.style.padding = "0px";
		this.jsTree.hide();

	}


	show(){

		this.container.style.display = "";
		this.container.style.flex = "1";
		this.container.style.padding = "10px";
		this.jsTree.show();

	}

	minForceFlex(){
		this.container.style.flex = null;
	}


	initListener(){

	    this.container.addEventListener('callBack', (data) => this.callBack(data));

	}


	callBack(data){
		
		this["on_"+data.detail.Event.type](data.detail);

	}

	on_select_node(data){

		console.log('on select leaf');
		console.log(data);

		this.Lifer.addData("app/home/frame/objects",[{"LeafNode" : data.data.node}]);
		this.Lifer.dumpMe();
		data.element = this.MyClass;
		let ev = new CustomEvent('callBack', {'detail' : data});
        this.parent.dispatchEvent(ev);

	}





}
import jsTreeContainer from '../../../../../elements/common/ui/jsTreeContainer.js';


export default class down {
	

	constructor(parent){

		this.parent = parent;

		this.MyClass = "topDown";

		this.container = document.getElementsByClassName(this.MyClass)[0];

		this.initTree();
		this.initListener();

	}

	initTree(){

		this.jsTree = new jsTreeContainer(this.container,'ObjectTree','JsTreeObjects');
       
	}

	
	loadData(data){

		this.jsTree.loadData(data);

	}


	hide(){

		this.container.style.display = "none";

	}


	show(){

		this.container.style.display = "";

	}


	initListener(){

	    this.container.addEventListener('callBack', (data) => this.callBack(data));

	}


	callBack(data){
		
		this["on_"+data.detail.Event.type](data.detail);

	}

	on_select_node(data){

		data.element = this.MyClass;
		let ev = new CustomEvent('callBack', {'detail' : data});
        this.parent.dispatchEvent(ev);

	}





}
import BreadcrumbCommon from '../../../../elements/common/ui/breadcrumb.js';


export default class breadcrumb {
	

	constructor(parent){

		this.parent = parent;

		this.MyClass = "breadcrumb";

		this.container = document.getElementsByClassName(this.MyClass)[0];

		this.init();

	}
	
	init(){

		this.initListener();
		this.initBreadcrumb();

	}

	initBreadcrumb(){

		//on cree 2 compartiments DIV
		//container
		//objects

		//on y ajoute des instances prêtes à l'emploi
		this.BC = new BreadcrumbCommon(this.container);
	}


	loadData(data,element){

		this.BC.init(element, data ,true);
	}


	initListener(){
	  
		    this.container.addEventListener('callBack', (data) => this.callBack(data));

	}


	callBack(data){
		console.log('in callBack breadcrumb');
		console.log(data);
		let methode = "on_"+data.element+"_"+data.data.Event.type;
		console.log(methode);
		this[methode](data.detail);

	}


}
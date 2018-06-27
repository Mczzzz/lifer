
export default class tools {


	constructor(parent, ServicesContainer){


		this.ServicesContainer = ServicesContainer;

		this.parent = parent;

		this.MyClass = "tools";

		this.container = document.getElementsByClassName(this.MyClass)[0];

		this.init();

	}


	init(){

		this.search = new Search(this.container,this.ServicesContainer);

	}



}
import superViews from "../../../../../elements/common/super/views.js"
import Search from './search/search.js';


export default class tools extends superViews{


	constructor(parent, MyClass, ServicesContainer){


		super(parent,MyClass,ServicesContainer);

		this.init();

	}


	init(){

		this.search = new Search(this.container,"search",this.ServicesContainer);

	}



}
import superViews from "../../../../../elements/common/super/views.js"
import Search from './search/search.js';


export default class tools extends superViews{


	constructor(parent, MyClass){


		super(parent,MyClass);

		this.init();

	}


	init(){

		this.search = new Search(this.container,"search");

	}



}
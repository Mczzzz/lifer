import superViews from "../../../../../elements/common/super/views.js"
import Search from './search/search.js';


export default class tools extends superViews{


	constructor(parent, MyClass,path){


		super(parent,MyClass,path);

		this.init();

	}


	init(){

		this.search = new Search(this.container,"search");

	}



}
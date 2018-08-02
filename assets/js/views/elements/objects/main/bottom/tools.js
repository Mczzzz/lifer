import superViews from "../../../common/super/views.js";
import Search from './tools/search.js';

export default class tools extends superViews{


	constructor(parent, MyClass,path){


		super(parent,MyClass,path);

		this.init();

	}


	init(){

		this.initChilds();

	}


	initChilds(){

		this.search = new Search(this.container,"search",this.path);

	}




}
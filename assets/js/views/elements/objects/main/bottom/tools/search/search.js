import SearchServices from '../../../../../../../services/search.js';

export default class search {


	constructor(parent){

		this.searchService = new SearchServices();

		this.parent = parent;

		this.init();


	}



	init(){

		this.addContainer();
		this.addInput();
		this.linkSearch();

	}


	addContainer(){

		this.container = document.createElement("div");
		this.MyClass = "search";
		this.parent.append(this.container);
		this.container.style.background = "#e8eff7";
		this.container.style.padding = "5px";

	}


	addInput(){

		this.input = document.createElement("input");
		this.input.className = "toolsInput";
		this.input.type = "text";
		this.input.placeholder   = 'Recherche...';
		this.input.style.padding   = '5px';
		this.input.style.borderRadius   = '5px';
		this.input.style.border   = '1px solid silver';
		this.input.style.height   = '40px';
		this.input.style.boxSizing = 'border-box';
		this.input.style.width   = '100%';

		this.container.append(this.input);

	}


	linkSearch(){

		let res = {};

		res.element = this.input;

		this.searchService.addInput(res);

	}


	unlinkSearch(){


	}

}
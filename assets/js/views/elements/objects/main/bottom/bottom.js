import Manage from './manage/manage.js';
import Tools from './tools/tools.js';

export default class bottom {
	

	constructor(parent){

		this.parent = parent;

		this.MyClass = "bottom";

		this.container = document.getElementsByClassName(this.MyClass)[0];

		this.init();

	}
	

	init(){

		//this.Manage = new Manage(this.container);

		this.Tools = new Tools(this.container);
	}




}
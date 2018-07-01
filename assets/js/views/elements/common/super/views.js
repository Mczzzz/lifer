import { Lifer } from '../../../../services/Lifer.js';

export default class views {
	

	constructor(parent, MyClass,path){


		this.parent = parent;

		this.MyClass = MyClass;

		this.path = path+"/"+Me;

		Lifer.addMe(this.path);

		this.superInit();

	}



	superInit(){


		if(document.getElementsByClassName(this.MyClass)[0] !== undefined){

			this.container = document.getElementsByClassName(this.MyClass)[0];

		}else{

			this.container = document.createElement("div");
			this.container.className = this.MyClass;

			this.parent.append(this.container);

		}

	}


}
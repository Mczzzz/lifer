import { Lifer } from '../../../../services/Lifer.js';

export default class views {
	

	constructor(parent, MyClass,path,prepend = false){


		this.parent = parent;

		this.MyClass = (MyClass !== false)? MyClass : this.constructor.name;


		this.path = path+"/"+this.MyClass;
		this.Lifer = Lifer;
		this.Lifer.addMe(this.path);

		this.superInit(prepend);

		this.Lifer.addData(this.path,[{"ThisContainer" : this.container}]);
		let level = this.Lifer.getData(this.path,"Level",1);
		this.Lifer.addData(this.path,[{"Level" : level + 1}]);

	}



	superInit(prepend){


		if(document.getElementsByClassName(this.MyClass)[0] !== undefined){

			this.container = document.getElementsByClassName(this.MyClass)[0];

		}else{

			this.container = document.createElement("div");
			this.container.className = this.MyClass;

			if(prepend){
				this.parent.prepend(this.container);
			}else{
				this.parent.append(this.container);
			}
			

		}

	}


	getContainer(){

		return this.container;

	}


	setStyle(property,value){

     	this[property] = value;

        this.container.style[property] = this[property];

    }


}
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


		this.initListener();

	}


	getContainer(){

		return this.container;

	}


	setStyle(property,value){

     	this[property] = value;

        this.container.style[property] = this[property];

    }

	setAttribute(property,value){

		console.log("in set Attribute");
		console.log(property);
		console.log(value);
     	this[property] = value;

     	console.log(this.placeholder);
     	this.container.placeholder = "toto";
        //this.container[property] = this[property];

    }



    destroyMe(){

    	this.container.remove();

    }


	initListener(){
  
	    this.container.addEventListener('callBack', (data) => this.callBack(data));

	}


    callBack(data){

		console.log(data);

		let methode = "on_"+data.detail.element+"_"+data.detail.Event.type;
		console.log(methode);
		this[methode](data.detail);

	}


	callBackToParent(data){

		let ev = new CustomEvent('callBack', {'detail' : data});
        this.parent.dispatchEvent(ev);

	}



}
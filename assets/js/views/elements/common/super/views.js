import { Lifer } from '../../../../services/Lifer.js';

import Moment from 'moment';
import 'moment/locale/fr';

export default class views {
	

	constructor(MyClass,path,prepend = false){


		this.MyClass = (MyClass !== false)? MyClass : this.constructor.name;


		this.Lifer = Lifer;

Moment.locale('fr');

		this.Moment = Moment;		

		if(path == null){

			this.parent = document.body;
			this.path = this.MyClass;

		}else{

			this.path = path+"/"+this.MyClass;

			this.parentThis = this.getObjectThisfromPath(path);

			this.parent = this.parentThis.getContainer();

		}

		this.Lifer.addMe(this.path);

		this.superInit(prepend);

		this.Lifer.addData(this.path,[{"This" : this}]);

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


	//property : x, y , width, height, top, left, bottom, right ...
	getContainerRect(property){

		let boxShadow = this.container.style.boxShadow;
		let padding = this.container.style.padding;
		let margin = this.container.style.margin;
		let border = this.container.style.border;
		
		let transDur = this.container.style.transitionDuration;
   		let transDel = this.container.style.transitionDelay;
    	let transTim = this.container.style.transitionTimingFunction;

		this.container.style.transitionDuration = null;
   		this.container.style.transitionDelay = null;
    	this.container.style.transitionTimingFunction = null;

		this.container.style.boxShadow = null;
		this.container.style.padding = null;
		this.container.style.margin = null;
		this.container.style.border = null;					


		let toReturn = this.container.getBoundingClientRect()[property];

        this.container.style.boxShadow = boxShadow;
		this.container.style.padding = padding;
		this.container.style.margin = margin;
		this.container.style.border = border;

		this.container.style.transitionDuration = transDur;
   		this.container.style.transitionDelay = transDel;
    	this.container.style.transitionTimingFunction = transTim;


		return toReturn;

	}


	setStyle(property,value,scope = "all"){

		if(scope == "property" || scope == "all") this[property] = value;
     	
     	if(scope == "element" || scope == "all" ) this.container.style[property] = value;
     		       

    }

	setAttribute(property,value,scope = "all"){

		if(scope == "property" || scope == "all") this[property] = value;

		if(scope == "element" || scope == "all" )  this.container.setAttribute(property,value);
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


	setId(id){

          this.container.id = id;

     }


    getId(){

    	return this.container.id;

    }

    getObjectThisfromPath(path){

    	return this.Lifer.getData(path,"This");
    }
    

}
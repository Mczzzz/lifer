import superViews from "../../super/views.js";

import Card from "../card.js";

import Text   from "./main/text.js";
import Number from "./main/number.js";

export default class MainRessource extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super( MyClass , path);

          this.init();

          this.callBack = [];

          this.autoIncrement = 0;

          this.collapsed = false;

     }



     init(){

		this.setStyle("borderWidth", "0px");
		this.setStyle("borderRadius", "0px");
		this.setStyle("margin", "0px");
		this.setStyle("padding", "0px");
		this.setStyle("background", "linear-gradient(45deg, rgb(250, 250, 250) 0%, rgb(248, 248, 248) 100%)");




     }



     addRessource(type){


		switch (type){

			case 'text':

				this.text();

			break;

			case 'number':

				this.number();

			break;

			//default:

		}


     }




	text(){

		let text = new Text("Text_"+this.autoIncrement, this.path);
		text.draggable(this.path,"onChildMove");
		text.focus();
		this.autoIncrement++;

	}



	number(){

		let number = new Number("Number_"+this.autoIncrement, this.path);
		number.draggable(this.path,"onChildMove");
		this.autoIncrement++;

	}


	getChilds(node){

		let allNodes = this.getContainer().childNodes;
		
		let ArrayChilds = [];

		let begin = false;

		for (let child of allNodes) {


			if(child == node){

				begin = true;
				continue;
			}


			if((parseInt(child.style.marginLeft, 10) > parseInt(node.style.marginLeft, 10)) && begin == true){

		  		
		  		ArrayChilds.push(child);


		  	}else{

		  		begin = false;

		  	}



		}

		return ArrayChilds;

	}


	expandSpecificNode(node){

		let children = this.getChilds(node);

		for (let child of children) {

				child.style.display = "";

		}

	}


	indentChilds(node,childrenList = false){

		let children;

		if(!childrenList){

			children = this.getChilds(node);

		}else{

			children = childrenList;

		}
		
		if(children.length){
			//calcul de la différence
			let diff = (parseInt( node.style.marginLeft ,10) + this.Pas) - (parseInt( children[0].style.marginLeft ,10));

			let childPosition;

			for (let child of children) {


					childPosition = parseInt(child.style.marginLeft ,10) + diff;

					if(childPosition < this.pas) childPosition = this.Pas;

					child.style.marginLeft = childPosition + "px";

			}
		}

	}


	moveChilds(node,childrenList){
		console.log("in chid to move");
		console.log(node);
		console.log(childrenList);
		console.log(node.nextElementSibling);
		let next = false;

		if(node.nextElementSibling){

			next = node.nextElementSibling;

		}
		

		for (let child of childrenList) {

			if(next){

				node.parentElement.insertBefore(child,next);

			}else{

				node.parentElement.appendChild(child);

			}

		}


	}





	collapseAll(){

		if (this.getContainer().hasChildNodes()) {
  
  			let childrens = this.getContainer().childNodes;

		  for (let child of childrens) {

		  	if(parseInt(child.style.marginLeft, 10) > 0){

		  		if(!this.collapsed){
		  			child.style.display = "none";


		  		}else{

		  			child.style.display = "";
		  		}

		  			


		  	}else{

		  		//si j'ai des enfants je rajoute le logo collapse
		  		if(child.nextElementSibling && (parseInt(child.nextElementSibling.style.marginLeft,10) > 0)){

		  			let ThisChild = this.getObjectThisfromPath(child.className);

		  			if(!this.collapsed){

			  			ThisChild.addCollapse();

		  			}else{

		  				ThisChild.rmCollapse();

		  			}




		  		}

		  	}
		    // faire quelque chose avec chaque enfant[i]
		    // NOTE: La liste est en ligne, l'ajout ou la suppression des enfants changera la liste

		  }


		  if(!this.collapsed){

		  	this.collapsed = true;

		  }else{

		  	this.collapsed = false;

		  }

		  return this.collapsed;

		}


	}




	onChildMove(childContainer, e, type){


	//	console.log("on passe dans OnChildMove");
	//	console.log(type);

		if(type == "start"){

 		  this.childrenToMove = this.getChilds(childContainer.getContainer());

		  this.Cloned = childContainer.getContainer().cloneNode(true);
		  document.body.appendChild(this.Cloned);

		  this.Cloned.style.position = "absolute";
		  this.Cloned.style.width = "100%";
		  this.Cloned.className = childContainer.MyClass+"-Clone";
		  //this.Cloned.style.marginLeft = "0px";
		  this.Cloned.style.top = childContainer.getContainer().getBoundingClientRect().y+"px";


		  //calcul de la position relative du clone par rapport au touch
		  this.touchX = e.changedTouches[0].clientX - this.Cloned.getBoundingClientRect().x;
		  this.touchY = e.changedTouches[0].clientY - this.Cloned.getBoundingClientRect().y;
	//	  console.log(this.touchX);
	//	  console.log(this.touchY);

		  this.Ghost = childContainer.getContainer().cloneNode(true);
		  this.Ghost.style.boxShadow  = "inset rgb(121, 193, 206) 0px 0px 19px 3px";
		  //this.Ghost.style.background = "rgb(121, 193, 206)";
		  this.Ghost.style.marginTop = "5px";
		  this.Ghost.style.marginBottom = "5px";
		  this.Ghost.style.borderRadius = "15px";
		  this.Ghost.style.height = childContainer.getContainer().getBoundingClientRect().height+"px";
		  this.Ghost.style.transitionDuration = "0.2s";
   		  this.Ghost.style.transitionDelay = "0.0s";
          this.Ghost.style.transitionTimingFunction = "cubic-bezier(0.15, -0.35, 0.98, 1.27)";
          this.Ghost.style.transitionProperty = "margin";





		  childContainer.getContainer().parentElement.insertBefore(this.Ghost,childContainer.getContainer());
		  childContainer.setStyle("display","none");


		  this.initMarginClone = parseInt(childContainer.getContainer().style.marginLeft, 10);



		}else if(type == "move"){

			
			

	        event.preventDefault();
	        //this.setStyle("background" , "red","element");

	        let MiddleCard = 0.5 * childContainer.getContainer().getBoundingClientRect().height;

	/*        console.log(this.touchX);
		    console.log(this.touchY);*/

	        this.Cloned.style.marginLeft = "Opx";
	        this.Cloned.style.top = e.changedTouches[0].clientY-this.touchY+"px";
	        this.Cloned.style.left = e.changedTouches[0].clientX - ( this.touchX + this.initMarginClone) +"px";

/*	        console.log("this.Cloned.style.left move");
	        console.log(this.Cloned.style.left);*/




	        if(!childContainer.getContainer().previousElementSibling.previousElementSibling && (e.changedTouches[0].clientY < this.Ghost.getBoundingClientRect().y)){

	          this.Cloned.style.display = "none";

	        }else if(!childContainer.getContainer().nextElementSibling && (e.changedTouches[0].clientY > (this.Ghost.getBoundingClientRect().y + this.Ghost.getBoundingClientRect().width ))){

	          this.Cloned.style.display = "none";

	        }else{
this.Cloned.style.display = "none";
	        }







	        if(childContainer.getContainer().previousElementSibling.previousElementSibling){
	 //       	console.log('in previous');
	          
	          if(e.changedTouches[0].clientY < (this.Ghost.previousElementSibling.getBoundingClientRect().y + (this.Ghost.previousElementSibling.getBoundingClientRect().height / 2))){
	 //         	console.log('in previous move node');
	          	childContainer.getContainer().parentElement.insertBefore(childContainer.getContainer(),childContainer.getContainer().previousElementSibling.previousElementSibling);
	            childContainer.getContainer().parentElement.insertBefore(this.Ghost,childContainer.getContainer());
	            //this.moveChilds(childContainer.getContainer(),this.childrenToMove);
	          	
	          }

	        }


	        if(childContainer.getContainer().nextElementSibling){

	  //     	console.log('in next');

	          if((e.changedTouches[0].clientY ) > childContainer.getContainer().nextElementSibling.getBoundingClientRect().y){
	   //       	console.log('in next move node');
	          	
	            childContainer.getContainer().parentElement.insertBefore(childContainer.getContainer(),childContainer.getContainer().nextElementSibling.nextElementSibling);
	          	childContainer.getContainer().parentElement.insertBefore(this.Ghost,childContainer.getContainer());
	          	//this.moveChilds(childContainer.getContainer(),this.childrenToMove);
	          }

	        }
	    





	        //le decalage
/*	        console.log(e.changedTouches[0].clientX);
	        console.log(childContainer.getContainer().getBoundingClientRect().x);*/

	        this.Pas = 30;

	        let GoodMargin = 0;

	        if(this.Ghost.previousElementSibling){

	        	let PreviousContainerX = this.Ghost.previousElementSibling.getBoundingClientRect().x;


	        	if( e.changedTouches[0].clientX > (PreviousContainerX + (this.Pas / 2)) ){

	        		GoodMargin = PreviousContainerX + this.Pas;




	       		}else{

		        	//calcul de la bonne valeur
		        	GoodMargin = Math.round(e.changedTouches[0].clientX / this.Pas ) * this.Pas;
		        	//console.log("good Margin:"+ GoodMargin);
		        	if(GoodMargin < 0){

		        		GoodMargin = 0;

		        	}

		        }

	        }else{

	        	GoodMargin = 0;

	        
	        }
	       

	       	childContainer.setStyle("marginLeft", GoodMargin + "px");
        	this.Ghost.style.marginLeft = GoodMargin + "px";

        	//on move les childrens
        	this.indentChilds(childContainer.getContainer(),this.childrenToMove);




	    }else if(type == "stop"){

	        //this.setStyle("background" , "white","element");
	        //childContainer.getContainer().style = this.initialStyle;
	//        console.log('stopppp');

	        this.moveChilds(childContainer.getContainer(),this.childrenToMove);

	        childContainer.setStyle("display","");
	        this.Cloned.remove();
	        this.Ghost.remove();

/*	        console.log(childContainer.getContainer().previousElementSibling);
	        console.log(childContainer.getContainer().style.marginLeft);*/

	        let prevSibling;

	        if(childContainer.getContainer().previousElementSibling &&

	        	parseInt(childContainer.getContainer().style.marginLeft, 10) > 0 && 

	        	parseInt(childContainer.getContainer().style.marginLeft, 10) > parseInt(childContainer.getContainer().previousElementSibling.style.marginLeft, 10)

	          ){

	        //	console.log("in if");
	        	prevSibling = this.getObjectThisfromPath(childContainer.getContainer().previousElementSibling.className);
	        //	console.log(prevSibling);
	       		prevSibling.addCollapse();



	        }else if(childContainer.getContainer().previousElementSibling &&
	        	     ( parseInt(childContainer.getContainer().style.marginLeft, 10) <=  parseInt(childContainer.getContainer().previousElementSibling.style.marginLeft, 10))
	        	     ){

/*	        	console.log("in else if");
	        	console.log(parseInt(childContainer.getContainer().style.marginLeft, 10));
	        	console.log(parseInt(childContainer.getContainer().previousElementSibling.style.marginLeft));*/

	        	prevSibling = this.getObjectThisfromPath(childContainer.getContainer().previousElementSibling.className);
	       		prevSibling.rmCollapse();

	      	}



		}

	}

}

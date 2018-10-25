import superViews from "../../super/views.js";

import Card from "../card.js";

import Text   from "./main/text.js";
import Number from "./main/number.js";
import Image from "./main/image.js";

export default class MainRessource extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super( MyClass , path);

          this.init();

          this.callBack = [];

          this.collapsed = false;

     }



     init(){

		this.setStyle("borderWidth", "0px");
		this.setStyle("borderRadius", "0px");
		this.setStyle("margin", "0px");
		this.setStyle("padding", "0px");
		this.setStyle("background", "linear-gradient(45deg, rgb(250, 250, 250) 0%, rgb(248, 248, 248) 100%)");
		this.setStyle("overflowY" , "scroll");
		this.setStyle("maxHeight" , "250px");


		window.addEventListener('resize', ()=>this.resize());



     }


     resize(){
     //	console.log('####### resize #######');
     	
     	let deviceHeight = this.Lifer.getScreenSize().height;

     	let initialDevice = this.Lifer.getData("User-Device", "Screen");

     	this.setStyle("maxHeight" , deviceHeight - 123 +"px");
     	

     	if(initialDevice.height > deviceHeight){

     		this.container.scrollTop = this.container.scrollHeight;
     	}


     }



     addItem(type,itemId){

     	let res;

		switch (type){

			case 'text':

				res = this.text(itemId);

			break;

			case 'number':

				res = this.number(itemId);

			break;

			case 'image':

				res = this.image(itemId);

			break;

			//default:

		}


		return res;

     }




	text(itemId){

		let callBack = {};
		callBack.path = this.parentThis.path;
		callBack.method = "update";

		let text = new Text("Text_"+itemId, this.path,false,callBack);
		let textElt = text.getTextElement();
		text.draggable(this.path,"onChildMove");

/*		text.setStyle("marginBottom", "50px");

		if(text.getContainer().previousElementSibling){
			text.getContainer().previousElementSibling.style.marginBottom = "5px";
		}*/

		let config = { characterData: true, childList: true, subtree: true};
		let observer = new MutationObserver(()=>this.resize());
		observer.observe(text.getContainer(), config);



		this.resize();

		text.focus();
		
		let res = {};
		res.bloc = text;
		res.text = textElt
		return res;

	}



	number(itemId){

		let number = new Number("Number_"+itemId, this.path);
		number.draggable(this.path,"onChildMove");


	}


	image(itemId){

		let image = new Image("Image_"+itemId, this.path);
		image.draggable(this.path,"onChildMove");


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


	collapsingNode(node){

		let children = this.getChilds(node);




		let locker = false
		let state  = "";

		for (let child of children) {

			let ThisChild = this.getObjectThisfromPath(child.className);

			if(locker == false){

				if(child.style.display == "none"){

					state = "";
				}else{
					state = "none";
				}

				locker = true;
			}

				child.style.display = state;





		}

		this.collapserSetter();

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
/*		console.log("in chid to move");
		console.log(node);
		console.log(childrenList);
		console.log(node.nextElementSibling);*/
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


	collapserSetter(){

		console.log('in collapserSetter');

		if (this.getContainer().hasChildNodes()) {
  
  			let childrens = this.getContainer().childNodes;

			for (let child of childrens) {

				if(child.nextElementSibling){

					if(parseInt(child.nextElementSibling.style.marginLeft,10) > parseInt(child.style.marginLeft,10)){

							let ThisChild = this.getObjectThisfromPath(child.className);

						if(child.nextElementSibling.style.display == "none"){

							ThisChild.moreCollapse();

						}else{

							ThisChild.lessCollapse();
						}


					}

				}

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

		  			


		  	}/*else{

		  		//si j'ai des enfants je rajoute le logo collapse
		  		if(child.nextElementSibling && (parseInt(child.nextElementSibling.style.marginLeft,10) > 0)){

		  			let ThisChild = this.getObjectThisfromPath(child.className);

		  			if(!this.collapsed){

			  			ThisChild.moreCollapse();

		  			}else{

		  				ThisChild.lessCollapse();

		  			}




		  		}

		  	}*/
		    // faire quelque chose avec chaque enfant[i]
		    // NOTE: La liste est en ligne, l'ajout ou la suppression des enfants changera la liste

		  }

		  this.collapserSetter();

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
 		  this.insertInParents = false;

/*		  this.Cloned = childContainer.getContainer().cloneNode(true);
		  document.body.appendChild(this.Cloned);

		  this.Cloned.style.position = "absolute";
		  this.Cloned.style.width = "100%";
		  this.Cloned.className = childContainer.MyClass+"-Clone";
		  //this.Cloned.style.marginLeft = "0px";
		  this.Cloned.style.top = childContainer.getContainer().getBoundingClientRect().y+"px";*/


		  //calcul de la position relative du clone par rapport au touch
/*		  this.touchX = e.changedTouches[0].clientX - this.Cloned.getBoundingClientRect().x;
		  this.touchY = e.changedTouches[0].clientY - this.Cloned.getBoundingClientRect().y;*/
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

/*	        this.Cloned.style.marginLeft = "Opx";
	        this.Cloned.style.top = e.changedTouches[0].clientY-this.touchY+"px";
	        this.Cloned.style.left = e.changedTouches[0].clientX - ( this.touchX + this.initMarginClone) +"px";*/

/*	        console.log("this.Cloned.style.left move");
	        console.log(this.Cloned.style.left);*/


/*

	        if(!childContainer.getContainer().previousElementSibling.previousElementSibling && (e.changedTouches[0].clientY < this.Ghost.getBoundingClientRect().y)){

	          this.Cloned.style.display = "none";

	        }else if(!childContainer.getContainer().nextElementSibling && (e.changedTouches[0].clientY > (this.Ghost.getBoundingClientRect().y + this.Ghost.getBoundingClientRect().width ))){

	          this.Cloned.style.display = "none";

	        }else{
				this.Cloned.style.display = "none";
	        }
*/






	        if(childContainer.getContainer().previousElementSibling.previousElementSibling){


	        	//on regarde si mon parent à deja des enfants
	        	let isParent = this.getChilds(childContainer.getContainer().previousElementSibling.previousElementSibling).length;



	        	if(isParent){

	        		this.insertInParents = true;
	        	}
	          
	          if(e.changedTouches[0].clientY < (this.Ghost.previousElementSibling.getBoundingClientRect().y + (this.Ghost.previousElementSibling.getBoundingClientRect().height / 2))){
	 //         	console.log('in previous move node');
	          	childContainer.getContainer().parentElement.insertBefore(childContainer.getContainer(),childContainer.getContainer().previousElementSibling.previousElementSibling);
	            childContainer.getContainer().parentElement.insertBefore(this.Ghost,childContainer.getContainer());
	            this.moveChilds(childContainer.getContainer(),this.childrenToMove);
	          	
	          }

	        }


	        if(childContainer.getContainer().nextElementSibling){

	  //     	console.log('in next');

	          if((e.changedTouches[0].clientY ) > childContainer.getContainer().nextElementSibling.getBoundingClientRect().y){
	   //       	console.log('in next move node');
	          	
	            childContainer.getContainer().parentElement.insertBefore(childContainer.getContainer(),childContainer.getContainer().nextElementSibling.nextElementSibling);
	          	childContainer.getContainer().parentElement.insertBefore(this.Ghost,childContainer.getContainer());
	          	this.moveChilds(childContainer.getContainer(),this.childrenToMove);
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
	       

	        if(this.insertInParents ){

	        	GoodMargin = parseInt(this.Ghost.previousElementSibling.style.marginLeft,10) + this.Pas;

	          this.insertInParents = false;
	        }



	       	childContainer.setStyle("marginLeft", GoodMargin + "px");
        	this.Ghost.style.marginLeft = GoodMargin + "px";

        	//on move les childrens
        	this.indentChilds(childContainer.getContainer(),this.childrenToMove);




	    }else if(type == "stop"){


	        childContainer.setStyle("display","");

	        this.Ghost.remove();

	        this.collapserSetter();


		}

	}

}

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
		this.autoIncrement++;

	}



	number(){

		let number = new Number("Number_"+this.autoIncrement, this.path);
		number.draggable(this.path,"onChildMove");
		this.autoIncrement++;

	}




	onChildMove(childContainer, e, type){


		console.log("on passe dans OnChildMove");
		console.log(type);

		if(type == "start"){

 

		  this.Cloned = childContainer.getContainer().cloneNode(true);
		  document.body.appendChild(this.Cloned);

		  this.Cloned.style.position = "absolute";
		  this.Cloned.style.width = "100%";
		  this.Cloned.style.top = childContainer.getContainer().getBoundingClientRect().y+"px";

		  //calcul de la position relative du clone par rapport au touch
		  this.touchX = e.changedTouches[0].clientX - this.Cloned.getBoundingClientRect().x;
		  this.touchY = e.changedTouches[0].clientY - this.Cloned.getBoundingClientRect().y;

		  this.Ghost = childContainer.getContainer().cloneNode(false);
		  this.Ghost.style.boxShadow  = "inset rgb(121, 193, 206) 0px 0px 19px 3px";
		  //this.Ghost.style.background = "rgb(121, 193, 206)";
		  this.Ghost.style.margin = "5px";
		  this.Ghost.style.borderRadius = "15px";
		  this.Ghost.style.height = childContainer.getContainer().getBoundingClientRect().height+"px";


		  childContainer.getContainer().parentElement.insertBefore(this.Ghost,childContainer.getContainer());
		  childContainer.setStyle("display","none");



		}else if(type == "move"){

			
			

	        event.preventDefault();
	        //this.setStyle("background" , "red","element");

	        let MiddleCard = 0.5 * childContainer.getContainer().getBoundingClientRect().height;


	        this.Cloned.style.top = e.changedTouches[0].clientY-this.touchY+"px";
	        this.Cloned.style.left = e.changedTouches[0].clientX-this.touchX+"px";





	        if(!childContainer.getContainer().previousElementSibling.previousElementSibling && (e.changedTouches[0].clientY < this.Ghost.getBoundingClientRect().y)){

	          this.Cloned.style.display = "none";

	        }else if(!childContainer.getContainer().nextElementSibling && (e.changedTouches[0].clientY > childContainer.getBoundingClientRect().y)){

	          this.Cloned.style.display = "none";

	        }else{
	          this.Cloned.style.display = "";
	        }







	        if(childContainer.getContainer().previousElementSibling.previousElementSibling){
	        	console.log('in previous');
	          
	          if(e.changedTouches[0].clientY < (this.Ghost.previousElementSibling.getBoundingClientRect().y + (this.Ghost.previousElementSibling.getBoundingClientRect().height / 2))){
	          	console.log('in previous move node');
	          	childContainer.getContainer().parentElement.insertBefore(childContainer.getContainer(),childContainer.getContainer().previousElementSibling.previousElementSibling);
	            childContainer.getContainer().parentElement.insertBefore(this.Ghost,childContainer.getContainer());
	          	
	          }

	        }



	        if(childContainer.getContainer().nextElementSibling){

	        	console.log('in next');

	          if((e.changedTouches[0].clientY ) > childContainer.getContainer().nextElementSibling.getBoundingClientRect().y){
	          	console.log('in next move node');
	          	
	            childContainer.getContainer().parentElement.insertBefore(childContainer.getContainer(),childContainer.getContainer().nextElementSibling.nextElementSibling);
	          	childContainer.getContainer().parentElement.insertBefore(this.Ghost,childContainer.getContainer());
	          }

	        }
	    





	        //le decalage
	        console.log(e.changedTouches[0].clientX);
	        console.log(childContainer.getContainer().getBoundingClientRect().x);

	        if((e.changedTouches[0].clientX < childContainer.getContainer().previousElementSibling.previousElementSibling.getBoundingClientRect().x +30) &&
	           (e.changedTouches[0].clientX > childContainer.getContainer().previousElementSibling.previousElementSibling.getBoundingClientRect().x -30)){

	        	childContainer.setStyle("marginLeft", childContainer.getContainer().previousElementSibling.previousElementSibling.getBoundingClientRect().x+"px");
	        	this.Ghost.style.marginLeft = childContainer.getContainer().previousElementSibling.previousElementSibling.getBoundingClientRect().x+"px";



	        }else if(e.changedTouches[0].clientX > childContainer.getContainer().previousElementSibling.previousElementSibling.getBoundingClientRect().x +30){

	        	childContainer.setStyle("marginLeft", childContainer.getContainer().previousElementSibling.previousElementSibling.getBoundingClientRect().x+30+"px");
	        	this.Ghost.style.marginLeft = childContainer.getContainer().previousElementSibling.previousElementSibling.getBoundingClientRect().x+30+"px";

	        }else if(e.changedTouches[0].clientX < childContainer.getContainer().previousElementSibling.previousElementSibling.getBoundingClientRect().x -30){

	        	childContainer.setStyle("marginLeft", childContainer.getContainer().previousElementSibling.previousElementSibling.getBoundingClientRect().x-30+"px");
	        	this.Ghost.style.marginLeft = childContainer.getContainer().previousElementSibling.previousElementSibling.getBoundingClientRect().x-30+"px";

	        }else{

	        	childContainer.setStyle("marginLeft", "0px");
				this.Ghost.style.marginLeft = "0px";
	        }





      }else if(type == "stop"){

        //this.setStyle("background" , "white","element");
        //childContainer.getContainer().style = this.initialStyle;

        childContainer.setStyle("display","");
        this.Cloned.remove();
        this.Ghost.remove();

      }



	}



 touchMover(e,type){

      console.log(e.changedTouches[0].clientY);
      console.log(e.changedTouches[0].clientX);
      //console.log(this.getContainer().getBoundingClientRect().y);
      //this.getContainer().previousElementSibling.getBoundingClientRect().y;
      //this.getContainer().nextElementSibling.getBoundingClientRect().y;


      if(type == "start"){

          this.Cloned = this.getContainer().cloneNode(true);
          document.body.appendChild(this.Cloned);

          this.Cloned.style.position = "absolute";
          this.Cloned.style.width = "100%";
          this.Cloned.style.top = this.getContainer().getBoundingClientRect().y+"px";
          console.log("top cloned");
          console.log(this.Cloned.style.top);

      }else if(type == "move"){

        event.preventDefault();
        //this.setStyle("background" , "red","element");

        let MiddleCard = 0.5 * this.getContainer().getBoundingClientRect().height;


        this.Cloned.style.top = e.changedTouches[0].clientY-MiddleCard+"px";
        console.log(this.Cloned.style.top);
        console.log("previous / next");
        console.log(this.getContainer().previousElementSibling);
        console.log(this.getContainer().nextElementSibling);
        if(!this.getContainer().previousElementSibling && ((e.changedTouches[0].clientY - MiddleCard )< this.getContainer().getBoundingClientRect().y)){

          this.Cloned.style.display = "none";

        }else if(!this.getContainer().nextElementSibling && (e.changedTouches[0].clientY > this.getContainer().getBoundingClientRect().y)){

          this.Cloned.style.display = "none";

        }else{
          this.Cloned.style.display = "";
        }


        if(this.getContainer().previousElementSibling){
/*          console.log("touchY:"+e.changedTouches[0].clientY);
          console.log("contHeight:"+ this.getContainer().getBoundingClientRect().height);
          console.log( JSON.stringify(this.getContainer().getBoundingClientRect()));
          console.log( JSON.stringify(this.getContainer().previousElementSibling.getBoundingClientRect()));
          console.log("previousPosY"+this.getContainer().previousElementSibling.getBoundingClientRect().y);
          console.log("----------------------------------------------");*/
          
          if((e.changedTouches[0].clientY - this.getContainer().getBoundingClientRect().height ) < this.getContainer().previousElementSibling.getBoundingClientRect().y){

            this.getContainer().parentElement.insertBefore(this.getContainer(),this.getContainer().previousElementSibling);
          
          }

        }

        if(this.getContainer().nextElementSibling){


          if((e.changedTouches[0].clientY ) > this.getContainer().nextElementSibling.getBoundingClientRect().y){

            this.getContainer().parentElement.insertBefore(this.getContainer(),this.getContainer().nextElementSibling.nextElementSibling);
          
          }


        }
    


      }else if(type == "stop"){

        //this.setStyle("background" , "white","element");
        this.Cloned.remove();

      }


    }




}









 
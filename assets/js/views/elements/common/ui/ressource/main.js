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
		  console.log("top cloned");
		  console.log(this.Cloned.style.top);


		}else if(type == "move"){

        event.preventDefault();
        //this.setStyle("background" , "red","element");

        let MiddleCard = 0.5 * childContainer.getContainer().getBoundingClientRect().height;


        this.Cloned.style.top = e.changedTouches[0].clientY-MiddleCard+"px";
        console.log(this.Cloned.style.top);
        console.log("previous / next");
        console.log(childContainer.getContainer().previousElementSibling);
        console.log(childContainer.getContainer().nextElementSibling);

        if(!childContainer.getContainer().previousElementSibling && ((e.changedTouches[0].clientY - MiddleCard )< childContainer.getContainer().getBoundingClientRect().y)){

          this.Cloned.style.display = "none";

        }else if(!childContainer.getContainer().nextElementSibling && (e.changedTouches[0].clientY > childContainer.getContainer().getBoundingClientRect().y)){

          this.Cloned.style.display = "none";

        }else{
          this.Cloned.style.display = "";
        }


        if(childContainer.getContainer().previousElementSibling){
/*          console.log("touchY:"+e.changedTouches[0].clientY);
          console.log("contHeight:"+ this.getContainer().getBoundingClientRect().height);
          console.log( JSON.stringify(this.getContainer().getBoundingClientRect()));
          console.log( JSON.stringify(this.getContainer().previousElementSibling.getBoundingClientRect()));
          console.log("previousPosY"+this.getContainer().previousElementSibling.getBoundingClientRect().y);
          console.log("----------------------------------------------");*/
          
          if((e.changedTouches[0].clientY - childContainer.getContainer().getBoundingClientRect().height ) < childContainer.getContainer().previousElementSibling.getBoundingClientRect().y){

            childContainer.getContainer().parentElement.insertBefore(childContainer.getContainer(),childContainer.getContainer().previousElementSibling);
          
          }

        }

        if(this.getContainer().nextElementSibling){


          if((e.changedTouches[0].clientY ) > childContainer.getContainer().nextElementSibling.getBoundingClientRect().y){

            childContainer.getContainer().parentElement.insertBefore(childContainer.getContainer(),childContainer.getContainer().nextElementSibling.nextElementSibling);
          
          }

        }
    


        //le decalage

        if(e.changedTouches[0].clientX > 100){

        	childContainer.setStyle("marginLeft", "10px");

        }else{

        	childContainer.setStyle("marginLeft", "0px");

        }





      }else if(type == "stop"){

        //this.setStyle("background" , "white","element");
        this.Cloned.remove();

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









 
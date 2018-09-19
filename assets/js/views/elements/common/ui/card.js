import superViews from "../super/views.js";

import Elements     from "./card/elements.js";

export default class card extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super( MyClass , path);

          this.init();

          this.callBack = [];

     }



     init(){

     //this.prefixElement   = "Element";

      this.setStyle("marginBottom" , "20px");
      this.setStyle("borderWidth " , "1px");
      this.setStyle("borderStyle " , "dashed");
      this.setStyle("borderColor " , "#b7b7b7");
      this.setStyle("margin      " , "10px");
      this.setStyle("borderRadius" , "8px");
      this.setStyle("background  " , "rgba(149, 146, 255, 0.14)");


     }



     //PUBLICS

     getWidth(){

          return this.container.offsetWidth;

     }





     setElement(classSuffixe){
       
         let ClassName   = classSuffixe;

         this[ClassName] = new Elements(ClassName,this.path);
         
         return ClassName;
          
     }



     setStyleElement(element,property,value,scope = "all"){

          this[element].setStyle(property,value,scope);

     }



     setStyleComponent(element,component, property, value,scope = "all"){

          this[element].setStyleComponent(component, property, value,scope);

     }




     setStylePictoComponent(element,component, property, value,scope = "all"){

          this[element].setStylePictoComponent(component, property, value,scope);

     }



     setAttributeComponent(element,component, property, value,scope = "all"){

        if(property == "draggable"){

            value = true;
            this[element].initTouch(component,this.path,'touchMover');
        
        }

          this[element].setAttributeComponent(component, property, value,scope);

     }


////////////////
     setStyleInputComponent(element,component, property, value,scope = "all"){

          this[element].setStyleInputComponent(component, property, value,scope);

     }

///////////////
     setAttributeInputComponent(element,component, property, value,scope = "all"){


          this[element].setAttributeInputComponent(component, property, value,scope);

     }




     push(type,element,classSuffixe,data,prepend = false){


          let callback = {};
          callback.path = this.path;
          callback.method = "CallBackFromItems";

           this[classSuffixe] = this[element].add(type, classSuffixe, data,prepend,callback);


           return this[classSuffixe];
     
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
          this.Cloned.style.top = this.getContainer().getBoundingClientRect().y;

      }else if(type == "move"){

        event.preventDefault();
        this.setStyle("background" , "red","element");

        let MiddleCard = 0.5 * this.getContainer().getBoundingClientRect().height;


        this.Cloned.style.top = e.changedTouches[0].clientY-MiddleCard+"px";

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

        this.setStyle("background" , "white","element");
        this.Cloned.remove();

      }


    }


     

     setCallBack(eventType, path, method, args = false){

        let objCallBack     = {};
        objCallBack.Event   = eventType;
        objCallBack.path    = path;
        objCallBack.method  = method;
        objCallBack.args    = args;

        this.callBack.push(objCallBack);

     }



     CallBackFromItems(path,data){

  //    console.log('in  CallBackFromItems');

      this.dispatchEvent(path,data);


     }



     dispatchEvent(path,data){

 //     console.log('in dispatchEvent');

  //    console.log(this.callBack);
        for (let eventsToCallBack of this.callBack) {

   //        console.log('in FOR');

           let objectToCallBack = this.getObjectThisfromPath(eventsToCallBack.path);

           objectToCallBack[eventsToCallBack.method](this.path,data);

        }

     }


}









 
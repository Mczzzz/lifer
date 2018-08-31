import superViews from "../super/views.js";

import Elements     from "./card/elements.js";

export default class card extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super( MyClass , path);

          this.init();

          this.callBack = [];

     }



     init(){

      this.prefixElement   = "cardElement";

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
       
         let ClassName   = this.prefixElement + classSuffixe;

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



     push(type,element,classSuffixe,data,prepend = false){


          let callback = {};
          callback.path = this.path;
          callback.method = "CallBackFromItems";

           this[classSuffixe] = this[element].add(type, classSuffixe, data,prepend,callback);

           return this[classSuffixe];
     
     }



     touchMover(e,type){

      if(type == "start"){


          console.log("on passe dans false !!!!!!!!!!!!!!!!!!!!");
          this.Cloned = this.getContainer().cloneNode(true);
          document.body.appendChild(this.Cloned);

          this.Cloned.style.position = "absolute";


      }else if(type == "move"){



        this.Cloned.style.top = e.changedTouches[0].clientY+"px";
        this.setStyle("background" , "red","element");

        if(e.changedTouches[0].clientY < this.getContainer().previousElementSibling.getBoundingClientRect().y){

          this.getContainer().parentElement.insertBefore(this.getContainer(),this.getContainer().previousElementSibling);
          
        
        }else if(e.changedTouches[0].clientY > this.getContainer().nextElementSibling.getBoundingClientRect().y){

          this.getContainer().parentElement.insertBefore(this.getContainer(),this.getContainer().nextElementSibling.nextElementSibling);
          
        
        }
      


      }else if(type == "stop"){

        this.setStyle("background" , "white","element");


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

      console.log('in  CallBackFromItems');

      this.dispatchEvent(path,data);


     }



     dispatchEvent(path,data){

      console.log('in dispatchEvent');

      console.log(this.callBack);
        for (let eventsToCallBack of this.callBack) {

           console.log('in FOR');

           let objectToCallBack = this.getObjectThisfromPath(eventsToCallBack.path);

           objectToCallBack[eventsToCallBack.method](this.path,data);

        }

     }


}









 
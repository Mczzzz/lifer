import superViews from "../super/views.js";

import Elements     from "./card/elements.js";

export default class card extends superViews{ 
     

     constructor(MyClass,path,prepend = false, draggable = false){

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





     setElement(ClassName,prepend = false){

          let Elt = new Elements(ClassName,this.path,prepend);
       
         this[Elt.MyClass] = Elt; 
         
         return Elt;
          
     }


//TO DESTROY
/*     setStyleElement(element,property,value,scope = "all"){

          //console.log(element);

          this[element.MyClass].setStyle(property,value,scope);

     }*/


//TO DESTROY
/*     setStyleComponent(element,component, property, value,scope = "all"){

          this[element.MyClass].setStyleComponent(component, property, value,scope);

     }*/



//TO DESTROY
/*     setStylePictoComponent(element,component, property, value,scope = "all"){

          this[element.MyClass].setStylePictoComponent(component, property, value,scope);

     }*/



/*     setAttributeComponent(element,component, property, value,scope = "all"){

        if(property == "draggable"){

            value = true;
            this[element.MyClass].initTouch(component,this.path,'touchMover');
        
        }

          this[element.MyClass].setAttributeComponent(component, property, value,scope);

     }*/


////////////////
//TO DESTROY
/*     setStyleInputComponent(element,component, property, value,scope = "all"){

          this[element.MyClass].setStyleInputComponent(component, property, value,scope);

     }*/

///////////////
/*     setAttributeInputComponent(element,component, property, value,scope = "all"){


          this[element.MyClass].setAttributeInputComponent(component, property, value,scope);

     }*/




     push(type,element,classSuffixe,data,prepend = false){


          let callback = {};
          callback.path = this.path;
          callback.method = "CallBackFromItems";

           this[classSuffixe] = this[element.MyClass].add(type, classSuffixe, data,prepend,callback);


           return this[classSuffixe];
     
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
      console.log(data);
      data.id = this.container.id;
 //     console.log('in dispatchEvent');

  //    console.log(this.callBack);
        for (let eventsToCallBack of this.callBack) {

   //        console.log('in FOR');
          console.log(eventsToCallBack);
           let objectToCallBack = this.getObjectThisfromPath(eventsToCallBack.path);

           objectToCallBack[eventsToCallBack.method](this.path,data);

        }

     }


}









 
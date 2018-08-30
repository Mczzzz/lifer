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

          this[element].setAttributeComponent(component, property, value,scope);

     }



     push(type,element,classSuffixe,data,prepend = false,callback = false){

           this[classSuffixe] = this[element].add(type, classSuffixe, data,prepend,callback);

           return this[classSuffixe];
     
     }



     setCallBack(Evt, path, method, args = false){

        let objCallBack     = {}.
        objCallBack.Evt   = Evt;
        objCallBack.path    = path;
        objCallBack.method  = method;
        objCallBack.args    = args;

        this.callback.push(objCallBack);

     }



     dispatchEvent(update){

        for (let eventsToCallBack in this.callback) {

          let objectToCallBack = getObjectThisfromPath(eventsToCallBack.path);

          objectToCallBack[method](this,update);

        }

     }


}









 
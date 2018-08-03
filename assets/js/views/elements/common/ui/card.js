import superViews from "../super/views.js";

import Elements     from "./card/elements.js";

export default class card extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super( MyClass , path);

          this.init();

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



     setId(id){

          this.container.id = id;

     }


     setElement(classSuffixe){
       
         let ClassName   = this.prefixElement + classSuffixe;

         this[ClassName] = new Elements(ClassName,this.path);
         
         return ClassName;
          
     }


     setStyleElement(element,property,value,){

          this[element].setStyle(property,value);

     }



     setStyleComponent(element,component, property, value,justClassVar = false){

          this[element].setStyleComponent(component, property, value,justClassVar);

     }

     setStylePictoComponent(element,component, property, value){

          this[element].setStylePictoComponent(component, property, value);

     }



     setAttributeComponent(element,component, property, value){

          this[element].setAttributeComponent(component, property, value);

     }



     push(type,element,classSuffixe,data,prepend = false){

           this[classSuffixe] = this[element].add(type, classSuffixe, data,prepend);

           return this[classSuffixe];
     
     }



}









 
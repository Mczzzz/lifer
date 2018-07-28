import superViews from "../super/views.js"

import Elements     from "./card/elements.js"

export default class card extends superViews{ 
     

     constructor(parent, MyClass,path,prepend = false){

          super(parent, MyClass , path);

          this.prefixElement   = "cardElement";

          this.borderWidth     = "1px";
          this.marginBottom    = "20px";
          this.borderStyle     = "dashed";
          this.borderColor     = "#b7b7b7";
          this.margin          = "10px";
          this.borderRadius    = "8px";
          this.backgroundColor = "rgba(149, 146, 255, 0.14)";


          this.init();

     }


     init(){


          this.refresh();

     }



     refresh(){

          
          this.container.style.marginBottom = this.marginBottom;
          this.container.style.borderWidth  = this.borderWidth;
          this.container.style.borderStyle  = this.borderStyle;
          this.container.style.borderColor  = this.borderColor;
          this.container.style.margin       = this.margin;
          this.container.style.borderRadius = this.borderRadius;
          this.container.style.background   = this.backgroundColor;


     }


     getWidth(){

          return this.container.offsetWidth;

     }


     setId(id){

          this.container.id = id;

     }




     setElement(classSuffixe){
       
         let ClassName   = this.prefixElement + classSuffixe;

         this[ClassName] = new Elements(this.container,ClassName,this.path);
         
         return ClassName;
          
     }


     setStyleElement(element,property,value){

          this[element].setStyle(property,value);

     }


     setStyleComponent(element,component, property, value){

          this[element].setStyleComponent(component, property, value);

     }



     push(type,element,classSuffixe,data){

           this[classSuffixe] = this[element].add(type, classSuffixe, data);
     
     }




/*               pushText(element,classSuffixe,text){

                    this[classSuffixe] = this[element].addText(text,classSuffixe);

               }*/


/*               pushImage(element,classSuffixe,path){

                    this[classSuffixe] = this[element].addImage(path,classSuffixe);
               }
*/
/*               pushButton(element,classSuffixe,picto){

                    this[classSuffixe] = this[element].addButton(picto,classSuffixe);
               
               }*/




}









 
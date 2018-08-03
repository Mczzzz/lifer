import superViews from "../../super/views.js";

import loaderComponent from "../../../../../services/LoaderComponent.js";

export default class Elements extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super(MyClass , path);


          this.init();

     }


     init(){


          this.setStyle("display" , "flex");
          this.setStyle("justifyContent" , "space-around");

          

     }


     setStyleComponent(component, property, value,justClassVar = false){

        this[component].setStyle(property, value,justClassVar);


     }


     setStylePictoComponent(component, property, value){

        this[component].setStylePicto(property, value);


     }



     setAttributeComponent(component, property, value){

        this[component].setAttribute(property, value);

     }


    add(type, classSuffixe, data,prepend = false){


    	this[classSuffixe] = new loaderComponent(type, "noteElt" + type + classSuffixe, this.path,prepend);
    	this[classSuffixe].setData(data);

     return this[classSuffixe].getContainer();
     }


}
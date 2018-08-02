import superViews from "../../super/views.js";

import loaderComponent from "../../../../../services/LoaderComponent.js";

export default class Elements extends superViews{ 
     

     constructor(parent, MyClass,path,prepend = false){

          super(parent, MyClass , path);


          this.init();

     }


     init(){


          this.container.style.display = "flex";
          this.container.style.justifyContent = "space-around";

          

     }


     setStyleComponent(component, property, value){

        this[component].setStyle(property, value);


     }

     setAttributeComponent(component, property, value){

        this[component].setAttribute(property, value);

     }


    add(type, classSuffixe, data){


    	this[classSuffixe] = new loaderComponent(type, this.container, "noteElt" + type + classSuffixe, this.path);
    	this[classSuffixe].setData(data);

     return this[classSuffixe].getContainer();
     }


}
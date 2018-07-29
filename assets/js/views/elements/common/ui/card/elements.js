import superViews from "../../super/views.js"
import loaderComponent from "../../../../../services/LoaderComponent.js"
/*import Text       from "./elements/text.js"
import Image      from "./elements/image.js"
import Button     from "./elements/button.js"*/

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


    add(type, classSuffixe, data){


    	this[classSuffixe] = new loaderComponent(type, this.container, "noteEltText" + classSuffixe, this.path);
    	this[classSuffixe].setData(data);

/*  		this[classSuffixe] = new Text(this.container, "noteEltText" + classSuffixe, this.path);
     	this[classSuffixe].setText(data);*/


/*          switch (type) {

               case 'Text':

                    this[classSuffixe] = new Text(this.container, "noteEltText" + classSuffixe, this.path);
     				this[classSuffixe].setText(data);
                    break;

               case 'Image':

                    this[classSuffixe] = new Image(this.container, "noteEltImg" + classSuffixe, this.path);
     				this[classSuffixe].setPict(data);
                    break;

               case 'Button':

                    this[classSuffixe] = new Button(this.container, "noteEltButton" + classSuffixe, this.path);
                    this[classSuffixe].setPicto(data);
                    break;

               default:
          
               console.log('Sorry, we are out of ' + expr + '.');

          }

*/
     }


}
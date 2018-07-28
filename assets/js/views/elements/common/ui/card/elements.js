import superViews from "../../super/views.js"

import Text       from "./elements/text.js"
import Image      from "./elements/image.js"
import Button     from "../button.js"

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

          switch (type) {

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


     }



     addText(text,className){

     	this[className] = new Text(this.container,"noteElement" + className, this.path);
     	this[className].setText(text);
    	
     }


     addImage(path,suffixe,margin, width){

	   	console.log('IN ADD IMAGE');
     	let TheImage = new Image(this.container,"noteElImg" + suffixe, this.path);
     	TheImage.setPict(path,margin,width);
     }


     addButton(size,color,justify){

     	let button = new Button(this.container,"buttonValid",this.path);

     	if (size)    button.setSize(size);
     	if (color)   button.setColor(color);
     	if (justify) button.setAlign(justify);

     }


/*     setJustify(justify){

     	this.container.style.justifyContent = justify;
     
     }*/

}
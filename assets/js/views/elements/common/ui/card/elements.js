import superViews from "../../super/views.js"

import Text       from "./elements/text.js"
import Image      from "./elements/image.js"
import Button     from "../button.js"

export default class header extends superViews{ 
     

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


     addText(text,classsSuffixe){

     	this[className] = new Text(this.container,"noteElement" + classsSuffixe, this.path);
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


     setJustify(justify){

     	this.container.style.justifyContent = justify;
     
     }

}
import superViews from "../../super/views.js"

import Text       from "./elements/text.js"

export default class header extends superViews{ 
     

     constructor(parent, MyClass,path,prepend = false){

          super(parent, MyClass , path);


          this.init();

     }


     init(){


          this.container.style.display = "flex";
          this.container.style.justifyContent = "space-around";

          

     }


     addText(text,size = false, color = false,margin = false,weight =false){

     	let TheText = new Text(this.container,"noteHeaderText", this.path);
     	TheText.setText(text);
     	if (size)   TheText.setSize(size);
     	if (color)  TheText.setColor(color);
     	if (margin) TheText.setMargin(margin);
     	if (weight) TheText.setWeight(weight);

     }

     setJustify(justify){

     	this.container.style.justifyContent = justify;
     
     }

}
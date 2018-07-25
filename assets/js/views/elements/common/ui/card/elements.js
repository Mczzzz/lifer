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





     addText(text,size = false, color = false,margin = false,weight =false,justify = false,suffixe = false,flex = false){
  //   	console.log('IN ADD TEXT');
  //   	console.log(text);
     	let TheText = new Text(this.container,"noteElement" + suffixe, this.path);
     	TheText.setText(text);
     	if (size)    TheText.setStyle("fontSize", size);
     	if (color)   TheText.setStyle("color", color);
     	if (margin)  TheText.setStyle("margin", margin);
     	if (weight)  TheText.setStyle("fontWeight", weight);
     	if (flex)    TheText.setStyle("flex", flex);
     	
     	if (justify) this.setJustify(justify);
     	

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
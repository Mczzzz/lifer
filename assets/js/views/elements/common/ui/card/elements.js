import superViews from "../../super/views.js"

import Text       from "./elements/text.js"
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


     addText(text,size = false, color = false,margin = false,weight =false,justify = false,suffixe = false){
     	console.log('IN ADD TEXT');
     	console.log(text);
     	let TheText = new Text(this.container,"noteElement" + suffixe, this.path);
     	TheText.setText(text);
     	if (size)    TheText.setSize(size);
     	if (color)   TheText.setColor(color);
     	if (margin)  TheText.setMargin(margin);
     	if (weight)  TheText.setWeight(weight);
     	if (justify) this.setJustify(justify);

     }


     addButton(){

     	let button = new Button(this.container,"buttonValid",this.path);
     }


     setJustify(justify){

     	this.container.style.justifyContent = justify;
     
     }

}
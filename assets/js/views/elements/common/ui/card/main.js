import superViews from "../../super/views.js"

import Text       from "./elements/text.js"

export default class main extends superViews{ 
     

     constructor(parent, MyClass,path,prepend = false){

          super(parent, MyClass , path);


          this.init();

     }


     init(){


          this.container.style.display = "flex";
          this.container.style.justifyContent = "space-around";

          //let TheText = new Text(this.container,"noteHeaderText", this.path);

     }



     addText(text){

     	this.TheText = new Text(this.container,"noteMainText", this.path);
     	this.TheText.setText(text);
     	console.log("setSize");
     	this.TheText.setSize(20);
     	this.TheText.setWeight("bold");
     }


     setJustify(justify){

     	this.container.style.justifyContent = justify;
     
     }

}
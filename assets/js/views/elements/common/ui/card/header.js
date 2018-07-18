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


     addText(text){

     	let TheText = new Text(this.container,"noteHeaderText", this.path);
     	TheText.addText(text);
     }

}
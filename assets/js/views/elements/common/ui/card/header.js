import superViews from "../../super/views.js"

import Text       from "./text.js"

export default class header extends superViews{ 
     

     constructor(parent, MyClass,path,prepend = false){

          super(parent, MyClass , path);


          this.init();

     }


     init(){


          this.container.style.display = "flex";
          this.container.style.justifyContent = "space-around";

          let Text = new Text(this.container,"noteHeaderText", this.path);

     }


}
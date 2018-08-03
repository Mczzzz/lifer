import superViews from "../../../super/views.js";

export default class Text extends superViews{ 
     

     constructor(parent, MyClass,path,prepend = false){

          super(parent, MyClass , path);

          this.init();

     }


     init(){


          this.container.contentEditable  = "true";

          this.setAttribute("placeholder", "Texte...");

          this.setStyle("fontSize"   , "10px");
          this.setStyle("margin"     , "10px");
          this.setStyle("fontWeight" , "normal");
          this.setStyle("border"     , "none");
          this.setStyle("outline"    , "none");
          this.setStyle("background" , "transparent");
          this.setStyle("color"      , "black");
          this.setStyle("lineHeight" , 1);
          this.setStyle("fontFamily" , "'Titillium Web',sans-serif,Arial,sans-serif");

          this.changeColor();

          this.container.addEventListener("keyup", ()=>this.changeColor());

     }


     setData(text){

          this.container.innerHTML = text;

     }



/*     setStyle(property,value){

          this[property] = value;

          this.container.style[property] = this[property];
          
          if(property == "color") this.changeColor();
     }*/




     changeColor(){

          this.container.style.color = (this.container.innerHTML.length == 0)? "#e0e0e0" : this.color; 

     }


}


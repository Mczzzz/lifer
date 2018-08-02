import superViews from "../../../super/views.js";

export default class Text extends superViews{ 
     

     constructor(parent, MyClass,path,prepend = false){

          super(parent, MyClass , path);

          this.init();

     }


     init(){


          this.container.contentEditable  = "true";

          this.container.setAttribute("placeholder", "Texte...");

          this.container.style.fontSize = "10px";
          this.container.style.margin = "10px";
          this.container.style.fontWeight = "normal";
          this.container.style.border = "none";
          this.container.style.outline = "none";
          this.container.style.background = "transparent";
          this.container.style.color = "black";
          this.container.style.lineHeight = 1;
          this.container.style.fontFamily   = "'Titillium Web',sans-serif,Arial,sans-serif";

          this.changeColor();

          this.container.addEventListener("keyup", ()=>this.changeColor());

     }


     setData(text){

          this.container.innerHTML = text;

     }



     setStyle(property,value){

          this[property] = value;

          this.container.style[property] = this[property];
          
          if(property == "color") this.changeColor();
     }




     changeColor(){

          this.container.style.color = (this.container.innerHTML.length == 0)? "#e0e0e0" : this.color; 

     }


}


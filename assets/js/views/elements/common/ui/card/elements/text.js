import superViews from "../../../super/views.js";

export default class Text extends superViews{ 
     

     constructor( MyClass,path,prepend = false){

          super( MyClass , path);

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


     changeColor(){
          console.log("changecolor");
          console.log(this.container.innerHTML.length);
          this.container.style.color = (this.container.innerHTML.length == 0)? "#e0e0e0" : this.color; 

     }



     //PUBLICS
     setData(text){

          this.container.innerHTML = text;

     }



}


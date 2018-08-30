import superViews from "../../../super/views.js";

export default class Text extends superViews{ 
     

     constructor( MyClass,path,prepend = false,callback = false){

          super( MyClass , path);

          this.init();

          this.callBack = callback;

          this.ItemType = "text";

     }


     init(){


          this.container.contentEditable  = "true";

          this.setAttribute("placeholder", "Texte...");

          this.placeHodelColor = "#e0e0e0";

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

          if(this.callBack != false){
          console.log(this.callBack);
               this.container.addEventListener("keyup", (e)=>this.dispatchEvents(e));
          }

     }


     dispatchEvents(e){

          console.log('indispatchEventText');
          console.log(e);
          //this.callBack.path
          //this.callBack.Method
          if(this.callBack != false){

               let MyCallBack =  this.getObjectThisfromPath(this.callBack.path);
               MyCallBack[this.callBack.method](this.path,this.getText());

          }


         this.changeColor()          
     }

     changeColor(){

          this.container.style.color = (this.container.innerHTML.length == 0)? this.placeHodelColor : this.color; 

     }


     setpleceHolderColor(color){

          this.placeHodelColor = color;          

     }


     //PUBLICS
     setData(text){

          this.container.innerHTML = text;

     }


     getText(){

          return this.container.innerHTML;

     }



}


import superViews from "../../../super/views.js";

export default class Image extends superViews{ 
     

     constructor( MyClass,path,prepend = false){

          super( MyClass , path);



          this.init();

     }


     init(){


          this.setStyle("margin" , "10px");

          this.setStyle("border" , "none");
          this.setStyle("outline" , "none");
          this.setStyle("background" , "transparent");


     }


     setData(path){

          let img = document.createElement("img");
          this.container.append(img);
 
          img.src = path +  "/" + this.parent.offsetWidth;

     }





}


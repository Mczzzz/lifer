import superViews from "../../../super/views.js"

export default class Image extends superViews{ 
     

     constructor(parent, MyClass,path,prepend = false){

          super(parent, MyClass , path);


          this.init();

     }


     init(){


          this.container.style.margin = "10px";

          this.container.style.border = "none";
          this.container.style.outline = "none";
          this.container.style.background = "transparent";


     }


     setPict(path,borderRadius,cardWidth){

          let img = document.createElement("img");
          this.container.append(img);
          img.style.borderRadius = borderRadius + "px";
 
          //let theMarge = 8;
          img.style.margin = borderRadius+"px";
          let width = cardWidth - (borderRadius * 2);
          img.src = path+"/"+width;

     }

}


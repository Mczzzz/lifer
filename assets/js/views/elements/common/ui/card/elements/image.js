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


     setData(path){

          let img = document.createElement("img");
          this.container.append(img);
 
          img.src = path +  "/" + this.parent.offsetWidth;

     }





}


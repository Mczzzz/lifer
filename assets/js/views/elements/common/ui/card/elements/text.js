import superViews from "../../../super/views.js"

export default class Text extends superViews{ 
     

     constructor(parent, MyClass,path,prepend = false){

          super(parent, MyClass , path);


          this.holder = "Texte...";
          this.size   = 10;
          this.weight = "normal";
          this.color  = "black";

          this.init();

     }


     init(){


          this.container.contentEditable  = "true";
          this.container.setAttribute("placeholder", this.holder);
          this.container.style.fontSize = this.size + "px";
          this.container.style.margin = "10px";
          this.container.style.fontWeight = this.weight;
          //Texte.style.flex = flex;
          this.container.style.border = "none";
          this.container.style.outline = "none";
          this.container.style.background = "transparent";
          this.container.style.color = this.color;
          this.container.style.fontFamily   = "'Titillium Web',sans-serif,Arial,sans-serif";
          //this.container.id = id;
          

     }


     addText(text){

          this.container.innerHTML = text;

     }


     setSize(size){

          this.size = size;
          this.container.style.fontSize = this.size;

     }

}

/*
 let Texte = document.createElement("div");
          Texte.contentEditable  = "true";
          Texte.setAttribute("placeholder", holder);
          Texte.style.fontSize = size;
          Texte.style.margin = "10px";
          Texte.style.fontWeight = weight;
          //Texte.style.flex = flex;
          Texte.style.border = "none";
          Texte.style.outline = "none";
          Texte.style.background = "transparent";
          Texte.style.color = color;
          Texte.style.fontFamily   = "'Titillium Web',sans-serif,Arial,sans-serif";
          Texte.id = id;
          Texte.innerHTML = text;
          card.append(Texte);
 
          Texte.addEventListener("keyup", (e)=>this.dispatcher(e,"text",Texte));*/
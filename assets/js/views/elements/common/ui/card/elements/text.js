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
          this.container.style.lineHeight = 1;
          this.container.style.fontFamily   = "'Titillium Web',sans-serif,Arial,sans-serif";
          //this.container.id = id;
          console.log("changeColor");
          this.changeColor();

          this.container.addEventListener("keyup", ()=>this.changeColor());

                

     }


     changeColor(){

          console.log("this.container.innerHTML.length");
          console.log(this.container.innerHTML.length);
          
          if(this.container.innerHTML.length == 0){

               this.container.style.color = "#e0e0e0";               
          }else{
               this.container.style.color = "black"; 
          }
          //if(this.container.innerHTML)

     }


     setText(text){

          //console.log()
          this.container.innerHTML = text;

     }


     setSize(size){

          this.size = size;
          this.container.style.fontSize = this.size + "px";

     }

     setColor(color){

          this.color = color;
          this.container.style.color = this.color;

     }

     setMargin(margin){
          //TRBL
          this.margin = margin;
          this.container.style.margin = this.margin;

     }


     setWeight(weight){

          this.weight = weight;
          this.container.style.fontWeight = this.weight;
     }


     setFlex(flex){

          this.container.style.flex = flex;

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
import superViews from "../super/views.js"

import Header     from "./card/header.js"
import Main     from "./card/main.js"
import Footer     from "./card/footer.js"

import Text       from "./card/elements/text.js"
import Image       from "./card/elements/image.js"

export default class card extends superViews{ 
     

     constructor(parent, MyClass,path,prepend = false){

          super(parent, MyClass , path);


          this.init();

     }


     init(){


          this.defaultCustomCard();

     }



     defaultCustomCard(){

          
          this.container.style.marginBottom = "20px";
          this.container.style.borderWidth  =  "1px";
          this.container.style.borderStyle  =  "dashed";
          this.container.style.borderColor  = "#b7b7b7";
          this.container.style.margin       = "10px";
          this.container.style.borderRadius = "8px";
          this.container.style.background   = "rgba(149, 146, 255, 0.14)";

         
          



     }

     setId(id){

          this.container.id = id;

     }


     setHeader(text,size,color,margin){

          let header = new Header(this.container,'cardHeader',this.path);
          header.addText(text,size,color,margin);
          header.setJustify("flex-end");

     }


     setMain(text){

           let main = new Main(this.container,'cardMain',this.path);
           main.addText(text);
           main.setJustify("flex-start");

     }


     setFooter(){

          let footer   = new Footer(this.container,'cardFooter',this.path);

     }




     setText(){

          let text   = new Text(this.container,'cardHeader',this.path);

     }

     setImage(){

          let Image   = new Image(this.container,'cardHeader',this.path);

     }



/*
     photoElement(text,id,size,weight,color,holder,update = false){
 
          let card = document.createElement("div");
          card.style.marginBottom = "20px";
          card.style.borderWidth  =  "1px";
          card.style.borderStyle  =  "dashed";
          card.style.borderColor  = "#b7b7b7";
          card.style.margin       = "10px";
          card.style.borderRadius = "8px";
          card.style.background   = "rgba(149, 146, 255, 0.14)";
          //card.style.display = "flex";
          //card.style.flexDirection = "column";
 
          let header = document.createElement("div");
          header.style.display = "flex";
          header.style.justifyContent = "space-around";
          card.append(header);
 
          if(update){
               let date = document.createElement("div");
               date.innerHTML = update;
               date.style.fontSize = "9px";
               date.style.color = "grey";
 
               header.append(date);
 
          }
 
 
 
          let img = document.createElement("img");
          img.style.borderRadius = "8px";
 
          let theMarge = 8;
          img.style.margin = theMarge+"px";
          let width = this.blocWidth - (theMarge * 2);
          img.src = "/object/infos/resources/"+this.ContainerNode.id+"/"+this.LeafNode.id+"/"+this.note.id+"/"+id+"/"+width;
          card.append(img);
 
          return card;
 
     }
 

     textElement(text,id,size,weight,color,holder,update = false){
 
          let card = document.createElement("div");
          card.style.marginBottom = "20px";
          card.style.borderWidth  =  "1px";
          card.style.borderStyle  =  "dashed";
          card.style.borderColor  = "#b7b7b7";
          card.style.margin       = "10px";
          card.style.borderRadius = "8px";
          card.style.background   = "rgba(149, 146, 255, 0.14)";
          //card.style.display = "flex";
          //card.style.flexDirection = "column";
 
          let header = document.createElement("div");
          header.style.display = "flex";
          header.style.justifyContent = "space-around";
          card.append(header);
 
          if(update){
               let date = document.createElement("div");
               date.innerHTML = update;
               date.style.fontSize = "9px";
               date.style.color = "grey";
 
               header.append(date);
 
          }
 
          
 
 
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
 
          Texte.addEventListener("keyup", (e)=>this.dispatcher(e,"text",Texte));
 
          return card;
 
     }
*/






}









 
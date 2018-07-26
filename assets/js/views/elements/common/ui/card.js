import superViews from "../super/views.js"

import Elements     from "./card/elements.js"

export default class card extends superViews{ 
     

     constructor(parent, MyClass,path,prepend = false){

          super(parent, MyClass , path);


          this.borderWidth     = "1px";
          this.marginBottom    = "20px";
          this.borderStyle     = "dashed";
          this.borderColor     = "#b7b7b7";
          this.margin          = "10px";
          this.borderRadius    = "8px";
          this.backgroundColor = "rgba(149, 146, 255, 0.14)";


          this.init();

     }


     init(){


          this.refresh();

     }



     refresh(){

          
          this.container.style.marginBottom = this.marginBottom;
          this.container.style.borderWidth  = this.borderWidth;
          this.container.style.borderStyle  = this.borderStyle;
          this.container.style.borderColor  = this.borderColor;
          this.container.style.margin       = this.margin;
          this.container.style.borderRadius = this.borderRadius;
          this.container.style.background   = this.backgroundColor;


     }


     getWidth(){

          return this.container.offsetWidth;

     }


     setId(id){

          this.container.id = id;

     }


     setProperty(property,value){

          this[property] = value;
          this.container.style[property] = this[property];
          //this.refresh();

     }



     setElement(suffixe){
       
         let ClassName = 'cardElement' + suffixe;

         this[ClassName] = new Elements(this.container,ClassName,this.path);

         return ClassName;
          
     }


     setPropertyElement(element,property,value){

          this[property] = value;
          this.container.style[property] = this[property];
          //this.refresh();

     }


     pushText(element,text,size,color,margin,weight,justify,suffixe,flex){
          this[element].addText(text,size,color,margin,weight,justify,suffixe,flex);
     }


     pushImage(element,path,suffixe,margin,width){
          element.addImage(path,suffixe,margin,width);
     }

     pushButton(element,size,color,justify){
          element.addButton(size,color,justify);
     }


/*     setText(){

          let text   = new Text(this.container,'cardHeader',this.path);

     }

     setImage(){

          let Image   = new Image(this.container,'cardHeader',this.path);

     }*/



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









 
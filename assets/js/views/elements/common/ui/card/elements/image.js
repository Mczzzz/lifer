import superViews from "../../../super/views.js"

export default class Image extends superViews{ 
     

     constructor(parent, MyClass,path,prepend = false){

          super(parent, MyClass , path);


          this.init();

     }


     init(){


          //this.container.contentEditable  = "true";
          //this.container.setAttribute("placeholder", holder);
         // this.container.style.fontSize = size;
          this.container.style.margin = "10px";
          //this.container.style.fontWeight = weight;
          //Texte.style.flex = flex;
          this.container.style.border = "none";
          this.container.style.outline = "none";
          this.container.style.background = "transparent";
          //this.container.style.color = color;
          //this.container.style.fontFamily   = "'Titillium Web',sans-serif,Arial,sans-serif";
          this.container.id = id;
          //this.container.innerHTML = text;

     }


     setPict(){

          let img = document.createElement("img");
          img.style.borderRadius = "8px";
 
          let theMarge = 8;
          img.style.margin = theMarge+"px";
          let width = this.blocWidth - (theMarge * 2);
          img.src = "/object/infos/resources/"+this.ContainerNode.id+"/"+this.LeafNode.id+"/"+this.note.id+"/"+id+"/"+width;

     }

}


     /*let img = document.createElement("img");
          img.style.borderRadius = "8px";
 
          let theMarge = 8;
          img.style.margin = theMarge+"px";
          let width = this.blocWidth - (theMarge * 2);
          img.src = "/object/infos/resources/"+this.ContainerNode.id+"/"+this.LeafNode.id+"/"+this.note.id+"/"+id+"/"+width;
          card.append(img);*/


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
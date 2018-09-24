import superViews from "../super/views.js";

import Card from "./card.js";

export default class dropdown extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super( MyClass , path);

          this.init();

          this.callBack = [];

     }



     init(){

        this.bkgdClickOut();

          this.setStyle("position", "absolute");


          this.card = new Card('Card', this.path);
  
          this.card.setStyle("borderWidth", "0px");
          this.card.setStyle("borderRadius", "0px");
          this.card.setStyle("margin", "0px");
          this.card.setStyle("padding", "10px");
          this.card.setStyle("background", "green");
          

     

     }


     bkgdClickOut(){


          let bkg = document.createElement('div');
          document.body.appendChild(bkg);

 
          bkg.setStyle("borderWidth", "0px");
          bkg.setStyle("borderRadius", "0px");
          bkg.setStyle("margin", "0px");
          bkg.setStyle("padding", "0px");
          bkg.setStyle("background", "green");
          bkg.setStyle("position", "absolute");
          bkg.setStyle("width", "100%");
          bkg.setStyle("height", "100%");
          bkg.setStyle("top", "0px");
          bkg.setStyle("left", "0px");


     }



     setPosition(position){

      this.setStyle('top', position.top+"px");
      this.setStyle('right', position.right+"px");      


     }


      setItems(Items){


      for (let item of Items){

        let Element  = this.card.setElement("Elt_"+item.id);
        //this.card.setStyleElement(Element,"justifyContent","space-between");
        this.card.setStyleElement(Element,"alignItems","center");

          let ddButton = this.card.push("TextButton", Element,"Button_"+item.id, item.text);


          //ddButton.getContainer().addEventListener("click",()=>this.CloseMe());

      }

    }






}









 
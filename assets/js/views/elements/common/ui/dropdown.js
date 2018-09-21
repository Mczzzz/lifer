import superViews from "../super/views.js";

import Card from "./card.js";

export default class dropdown extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super( MyClass , path);

          this.init();

          this.callBack = [];

     }



     init(){

          this.setStyle("position", "absolute");


          this.card = new Card('Card', this.path);
  
          this.card.setStyle("borderWidth", "0px");
          this.card.setStyle("borderRadius", "0px");
          this.card.setStyle("margin", "0px");
          this.card.setStyle("padding", "10px");
          this.card.setStyle("background", "green");
          

     

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

          let ddButton = this.card.push("Text", Element,"Button_"+item.id, item.text);


          //ddButton.getContainer().addEventListener("click",()=>this.CloseMe());

      }

    }






}









 
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
          this.card.setStyle("background", "blue");
          

     

     }


     bkgdClickOut(){


          let bkg = document.createElement('div');
          document.body.appendChild(bkg);

 
          bkg.style.borderWidth = "0px";
          bkg.style.borderRadius= "0px";
          bkg.style.margin= "0px";
          bkg.style.padding= "0px" ;
          bkg.style.background= "transparent";
          bkg.style.position= "absolute";
          bkg.style.width= "100%";
          bkg.style.height= "100%";
          bkg.style.top= "0px";
          bkg.style.left= "0px";

          bkg.addEventListener("click", ()=>this.closeMenu());


     }


     closeMenu(){

      this.destroyMe();

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









 
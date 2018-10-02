import superViews from "../super/views.js";

import Header from "./ressource/header.js";
import Main from "./ressource/main.js";
import Footer from "./ressource/footer.js";

export default class Ressource extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super( MyClass , path);

          this.init();

          this.callBack = [];

          this.target = false;

          this.RessourceId = false;
          this.ItemList = false;


     }



     init(){


      this.Header = new Header("Header",this.path);

      this.Main   = new Main("Main",this.path);

      this.Footer = new Footer('Footer' , this.path);

     }


     setTarget(path){

     // console.log("in set Target");
      this.target = this.getObjectThisfromPath(path);
      this.initResource();
  //    console.log(this.target);
     }


     initResource(){
    //  console.log("in init ressource");
      if(this.target){
   //     console.log("in init ressource - target");
        this.RessourceId = this.target.addRessource();
    //    console.log("RessourceId From Note Ressource: "+this.RessourceId);

      }


     }


     addItem(type){

      let itemId = false;

      if(this.target){

        itemId = this.target.addItem(this.RessourceId,type);

      }

    //  console.log("itemId From Note Ressource : "+itemId);

      this.ItemList[itemId];

      this.Main.addItem(type,itemId); 
      

     }


        //rajoutdela callback udpdate vers target

    update(data){

   //     console.log('in Ressource ui -> updte to target');
      data.RessourceId = this.RessourceId;
      this.target.update(data);
    }


}









 
import superViews from "../super/views.js";

import Header from "./ressource/header.js";
import Main from "./ressource/main.js";
import Footer from "./ressource/footer.js";

export default class Ressource extends superViews{ 
     

     constructor(MyClass,path,ressourceId=false,prepend = false){

          super( MyClass , path);

          this.init();

          this.callBack = [];

          this.target = false;

          this.RessourceId = ressourceId;
          this.ItemList = false;


     }



     init(){


      this.Header = new Header("Header",this.path);

      this.Main   = new Main("Main",this.path);

      this.Footer = new Footer('Footer' , this.path);

     }


     setTarget(path){

      console.log("in set Target");
      this.target = this.getObjectThisfromPath(path);
      this.initResource();
  //    console.log(this.target);
     }


     initResource(){
    //  console.log("in init ressource");
      if(this.target){
   //     console.log("in init ressource - target");
    if(!this.RessourceId){

      this.RessourceId = this.target.addRessource();
    }
        


    //    console.log("RessourceId From Note Ressource: "+this.RessourceId);

      }


     }


     addItem(type,itemId = false, data = false, margin = false){


      let newItem = itemId;

      if(this.target && !itemId){

          itemId =  this.target.newTmpId();     

      }

 //     console.log(this.target);
    //  console.log("itemId From Note Ressource : "+itemId);

      this.ItemList[itemId];
      console.log("Ressource addItem");
      console.log(data);

      let anew = (data)? false : true;
      console.log("Ressource addItem anew");
      console.log(anew);

      let elt = this.Main.addItem(type,itemId,anew);

      if(data){
/*        console.log("In add Item Ressource !!!!!!!!!!!!!!!!!!!")
        console.log(data);*/
        console.log(elt.bloc);
         elt.bloc.setData(data);
      } 
 /*           console.log('before margin :');
            console.log(margin);
        console.log(elt.bloc);  */

      if(margin){
/*        console.log('in margin :');
        console.log(elt.bloc);*/
        elt.bloc.setStyle("marginLeft", margin);        
      }
     
      if(!newItem){

        this.target.addItem(this.RessourceId,type,itemId,elt);

      }else{
        //relink observer on 

        this.target.setObserver(elt,this.RessourceId,itemId);
      } 

     }




    reorder(){

      this.target.reorder(this.RessourceId);

    }


        //rajoutdela callback udpdate vers target

/*    update(path, data){
    //TODO : path pour rien peut etre a supprimer à réflechir
      data.RessourceId = this.RessourceId;
      this.target.update(data);

    }*/


}









 
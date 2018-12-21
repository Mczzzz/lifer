import superViews from "../superViews.js";

import Header from "./ressource/header.js";
import Main from "./ressource/main.js";
import Footer from "./ressource/footer.js";

export default class Ressource extends superViews{ 
     

     constructor(MyClass,path,ressourceId=false,prepend = false){

          super( MyClass , path);

          this.init();

          this.target = false;

          this.targetData = {};

          this.title = "";

          this.RessourceId = ressourceId;
          this.ItemList = false;


     }



     init(){


      this.Header = new Header("Header",this.path);

      this.Main   = new Main("Main",this.path);

      this.Footer = new Footer('Footer' , this.path);

     }


     setTargetData(path,method){

      this.targetData.obj = this.getObjectThisfromPath(path);
      this.targetData.method = method;

     }


     callBackDataTo(path,data){

      data.RessourceId = this.RessourceId;
      data.RessourceTitle = this.title;
      this.targetData.obj[this.targetData.method](data);
    
     }





     setTarget(path){

      console.log("in set Target");
      this.target = this.getObjectThisfromPath(path);
      this.initResource();
  //    console.log(this.target);
     }


    initResource(){

      if(this.target){

        if(!this.RessourceId){

          this.RessourceId = "tmp-"+this.Lifer.newTmpId();
        }
        
      }

    }


     setTitle(title){

      this.Header.setTitle(title);

     }



     addItem(type,itemId = false, data = false, pict=false, margin = false){


      let newItem = itemId;

      if(this.target && !itemId){

          itemId =  "tmp-"+this.target.newTmpId();     

      }


      this.ItemList[itemId];


      let anew = (pict)? false : true;


      let elt = this.Main.addItem(type,itemId,anew);

     
      if(type == 'image' && pict){
          elt.bloc.addThumb(pict);
       }

      if(data){
         elt.bloc.setData(data);
      } 


      if(margin){

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


}









 
import uuid from "uuid/v1"

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


     }



     init(){

      this.initResource();

      this.Header = new Header("Header",this.path);

      this.Main   = new Main("Main",this.path);

      this.Footer = new Footer('Footer' , this.path);

     }


     setTarget(path){

      this.target = this.getObjectThisfromPath(path);


     }


     initResource(){

      if(this.target){

        this.RessourceId = this.target.addRessource();

      }

     }


     addRessource(type){

      let RessourceId = false;

      if(this.target){

        RessourceId = this.target.addRessource(type);

      }


      this.Main.addRessource(type,RessourceId);

     }



}









 
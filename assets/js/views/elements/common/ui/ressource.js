import superViews from "../super/views.js";

import Header from "./ressource/header.js";
import Main from "./ressource/main.js";
import Footer from "./ressource/footer.js";

export default class Ressource extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super( MyClass , path);

          this.init();

          this.callBack = [];

     }



     init(){

      this.Header = new Header("Header",this.path);

      this.Main   = new Main("Main",this.path);

      this.Footer = new Footer('Footer' , this.path);



     }

     addRessource(type){

      this.Main.addRessource(type);

     }



}









 
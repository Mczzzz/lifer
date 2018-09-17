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

      this.Header = new Header("headerResource",this.path);

      this.Main   = new Main("mainResource",this.path);

      this.Footer = new Footer('footerResource' , this.path);



     }





}









 
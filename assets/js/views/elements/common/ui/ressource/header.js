import superViews from "../../super/views.js";

import Dropdown from "../dropdown.js";

import Card from "../card.js";

export default class HeaderRessource extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super( MyClass , path);

          this.init();

          this.callBack = [];


     }



     init(){


     	this.firstClick = true;

     	this.card = new Card('Card', this.path);
	
		this.card.setStyle("borderWidth", "0px");
		this.card.setStyle("borderRadius", "0px");
		this.card.setStyle("margin", "0px");
		this.card.setStyle("padding", "0px");
		this.card.setStyle("background", "linear-gradient(45deg, rgb(73, 50, 144) 0%, rgb(43, 46, 144) 100%)");




		let HeaderElement = this.card.setElement("Element");
		this.card.setStyleElement(HeaderElement,"justifyContent","space-between");
		this.card.setStyleElement(HeaderElement,"alignItems","center");



				let colButton = this.card.push("Button", HeaderElement,"collapse", "keyboard_arrow_down");

				this.card.setStylePictoComponent(HeaderElement,"collapse","fontSize","25px");
				this.card.setStylePictoComponent(HeaderElement,"collapse","margin","0px");
				this.card.setStylePictoComponent(HeaderElement,"collapse","marginLeft","5px");
				this.card.setStylePictoComponent(HeaderElement,"collapse","color","white");
				this.card.setStylePictoComponent(HeaderElement,"collapse","alignItems","center");

				colButton.getContainer().addEventListener("click",()=>this.colMain(colButton));






				this.card.push("Text",HeaderElement,"Title","");

				this.card.setAttributeComponent(HeaderElement,"Title","placeholder","Titre Ressource...");

				this.card.setStyleComponent(HeaderElement,"Title","fontSize","18px");
				this.card.setStyleComponent(HeaderElement,"Title","color","grey");
				this.card.setStyleComponent(HeaderElement,"Title","fontWeight","bold");






				let ddButton = this.card.push("Button", HeaderElement,"sep1", "more_vert");

				this.card.setStylePictoComponent(HeaderElement,"sep1","fontSize","25px");
				this.card.setStylePictoComponent(HeaderElement,"sep1","margin","0px");
				this.card.setStylePictoComponent(HeaderElement,"sep1","marginRight","10px");
				this.card.setStylePictoComponent(HeaderElement,"sep1","color","white");
				this.card.setStylePictoComponent(HeaderElement,"sep1","alignItems","center");


				ddButton.getContainer().addEventListener("click",()=>this.initDropDown());




     }


    initDropDown(){

    	console.log('initDropdown');

    	this.menu = new Dropdown("dropdown",this.path);

    	let position = {};
    	position.top = this.getContainer().getBoundingClientRect().y;
    	position.right = 0;

    	this.menu.setPosition(position);

    	let items = [];
    	items.push({'id':0,'picto':"","text":"partage"});
    	items.push({'id':1,'picto':"","text":"selection"});
    	items.push({'id':2,'picto':"","text":"supprimer"});
    	items.push({'id':1,'picto':"","text":"evenement"});

    	this.menu.setItems(items);

		document.addEventListener("click", (e)=>this.closeDropDown(e));

    }



    closeDropDown(e){


      console.log("CloseMenu");
      console.log(e);
      if(this.firstClick == false){
        console.log(this.firstClick);
        this.menu.destroyMe();
        this.firstClick = true;
      }

      this.firstClick = false;


    }




    colMain(colButton){



    	let Main = this.getObjectThisfromPath("Note/Note-Main/Note-Main-Empty/Note-Main-Empty-Resource/Note-Main-Empty-Resource-Main");

    	console.log(Main.getContainer().style.display);
    	if(Main.getContainer().style.display == "none"){

    		colButton.setData("keyboard_arrow_down");
    		Main.setStyle("display","");
    	}else{

    		colButton.setData("keyboard_arrow_up");
    		Main.setStyle("display","none");

    	}
    	
    	
    	
    	


    }


}









 
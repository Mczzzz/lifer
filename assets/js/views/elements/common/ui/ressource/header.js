import superViews from "../../super/views.js";

import Dropdown from "../dropdown.js";

import Card from "../card.js";

export default class HeaderRessource extends superViews{ 
     

     constructor(MyClass,path,prepend = false){

          super( MyClass , path);

          this.init();

          this.callBack = [];


        
        this.clicked = function (event) {

		      this.closeDropDown();

		}


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
		HeaderElement.setStyle("justifyContent","space-between");
		HeaderElement.setStyle("alignItems","center");



				let colButton = this.card.push("Button", HeaderElement,"collapse", "keyboard_arrow_down");

				this.card.setStylePictoComponent(HeaderElement,"collapse","fontSize","25px");
				this.card.setStylePictoComponent(HeaderElement,"collapse","margin","0px");
				this.card.setStylePictoComponent(HeaderElement,"collapse","marginLeft","5px");
				this.card.setStylePictoComponent(HeaderElement,"collapse","color","white");
				this.card.setStylePictoComponent(HeaderElement,"collapse","alignItems","center");

				colButton.getContainer().addEventListener("click",()=>this.colMain(colButton));






				this.card.push("Text",HeaderElement,"Title","");

				this.card.setAttributeComponent(HeaderElement,"Title","placeholder","Ma Ressource...");

				this.card.setStyleComponent(HeaderElement,"Title","fontSize","18px");
				this.card.setStyleComponent(HeaderElement,"Title","color","grey");
				this.card.setStyleComponent(HeaderElement,"Title","fontWeight","bold");
        this.card.setStyleComponent(HeaderElement,"Title","flex","1");




        this.collapseButton = this.card.push("Button", HeaderElement,"fold", "unfold_less");

        this.card.setStylePictoComponent(HeaderElement,"fold","fontSize","25px");
        this.card.setStylePictoComponent(HeaderElement,"fold","margin","0px");
        this.card.setStylePictoComponent(HeaderElement,"fold","marginRight","10px");
        this.card.setStylePictoComponent(HeaderElement,"fold","color","white");
        this.card.setStylePictoComponent(HeaderElement,"fold","alignItems","center");



        this.collapseButton.getContainer().addEventListener("click",()=>this.collapse());
        //collapseButton.getContainer().addEventListener("click",()=>obj.collapseAll());




				let ddButton = this.card.push("Button", HeaderElement,"sep1", "more_vert");

				this.card.setStylePictoComponent(HeaderElement,"sep1","fontSize","25px");
				this.card.setStylePictoComponent(HeaderElement,"sep1","margin","0px");
				this.card.setStylePictoComponent(HeaderElement,"sep1","marginRight","10px");
				this.card.setStylePictoComponent(HeaderElement,"sep1","color","white");
				this.card.setStylePictoComponent(HeaderElement,"sep1","alignItems","center");


				ddButton.getContainer().addEventListener("click",()=>this.initDropDown());




     }


     collapse(){

        let obj = this.getObjectThisfromPath("Note-Main-Empty-Resource-Main");
        let doneCollapsed = obj.collapseAll();

        if(doneCollapsed){
          this.collapseButton.setData("unfold_more");
        }else{
          this.collapseButton.setData("unfold_less");
        }
        

     }

    initDropDown(){

//    	console.log('initDropdown');

    	this.menu = new Dropdown("dropdown",this.path);

    	let position = {};
    	position.top = this.getContainer().getBoundingClientRect().y;
    	position.right = 0;

    	this.menu.setPosition(position);

    	let items = [];
    	items.push({'id':0,'picto':"share","text":"partage"});
    	//items.push({'id':1,'picto':"","text":"selection"});
    	items.push({'id':1,'picto':"delete","text":"supprimer"});
    	items.push({'id':2,'picto':"add_alarm","text":"evenement"});
    	items.push({'id':3,'picto':"more_horiz","text":"Item Action"});
    	items.push({'id':4,'picto':"check_box_outline_blank","text":"checkbox"});
    	items.push({'id':5,'picto':"unfold_less","text":"minimize","actionObj":"Note-Main-Empty-Resource-Main","method":"collapseAll"});
    	//gerer le maximize : unfold_more


    	this.menu.setItems(items);

    	this.CDP = 

    	this.clickHandler = this.clicked.bind(this);
		document.addEventListener("click",this.clickHandler);

    }



    closeDropDown(){


  //    console.log("CloseMenu");

      if(this.firstClick == false){

        this.menu.destroyMe();
        document.removeEventListener("click", this.clickHandler);
        this.firstClick = true;

      }else{

      	this.firstClick = false;

      }

    }




    colMain(colButton){



    	let Main = this.getObjectThisfromPath("Note-Main-Empty-Resource-Main");

  //  	console.log(Main.getContainer().style.display);
    	if(Main.getContainer().style.display == "none"){

    		colButton.setData("keyboard_arrow_down");
    		Main.setStyle("display","");
        this.collapseButton.setStyle("display", "");
    	}else{

    		colButton.setData("keyboard_arrow_up");
    		Main.setStyle("display","none");
         this.collapseButton.setStyle("display", "none");

    	}
    	
    	
    	
    	


    }


}









 
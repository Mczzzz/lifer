import layout from '../layout.js';

import Header from '../sections/header.js';
import Footer from '../sections/footer.js';
import Tools from '../elements/objects/main/bottom/tools/tools.js';
import jsTreeContainer from '../elements/objects/main/top/jsTreeContainer.js'
/*import Header from '../elements/objects/headerObjects.js';
import Footer from './sections/footer.js';

import ContainerCollect from '../../collections/ContainerCollection.js';
import ObjectCollect from '../../collections/ObjectTreeCollection.js';
import ObjectInfosCollect from '../../collections/ObjectInfosCollection.js';
import ObjectInfosResourcesTypeCollect from '../../collections/ObjectInfosResourcesTypeCollection.js';

import JsTreeContainer from '../elements/objects/jsTreeContainer.js';
import toolBar from '../elements/objects/toolBarObjects.js';
import infosLoader from '../elements/objects/leafLoaderObjects.js';
*/
export default class Objects extends layout{


	constructor(){

    super();

    this.bkgdHF = 'linear-gradient(45deg, #43A047 0%, #1de9b6 100%)';
    this.in = "Container";
    this.headerCustom();
    this.mainTopUp();
    this.mainTopBottom();
    this.mainBottomTools();
    this.footerCustom();
    this.elementAnimation();

	}


  headerCustom(){

    let HomeHeader = new Header();
    
    HomeHeader.setBkgdColor(this.bkgdHF);
    HomeHeader.setBackToHome();
    HomeHeader.setIconPage();

  }


  mainTopUp(){

    //divParent,Collection,class
     this.jsTreeParent = new jsTreeContainer('topUp','Container','JsTreeContainer');
     this.jsTreeParent.loadData();
    
  }

  mainTopBottom(){

    //divParent,Collection,class
    this.jsTreeChild = new jsTreeContainer('topBottom','ObjectTree','JsTreeObjects');

    
  }


  mainBottomTools(){


     let mainBottomTools = new Tools();

    
  }


  footerCustom(){

    let HomeFooter = new Footer();
    
    HomeFooter.setBkgdColor(this.bkgdHF);

  }


  elementAnimation(){

    //active search on parent tree
    this.jsTreeParent.linkSearch('toolsInput');

    //ask Parent tree to be informed on select
    let EvParSel = 'ObjectJsTreeParentSelect';
    window.addEventListener(EvParSel, (data) => this[EvParSel](data));
    this.jsTreeParent.initEventsElementSelect(EvParSel);

    //ask Parent tree to be informed on select
    let EvBreadParSel = 'ObjectBreadParentSelect';
    window.addEventListener(EvBreadParSel, (data) => this[EvBreadParSel](data));
    this.jsTreeParent.initEventsBreadSelect(EvBreadParSel);

    //ask Child tree to be informed on select
    let EvChildSel = 'ObjectJsTreeChildSelect';
    window.addEventListener(EvChildSel, (data) => this[EvChildSel](data));
    this.jsTreeChild.initEventsElementSelect(EvChildSel);



  }


  ObjectJsTreeParentSelect(data){
      this.jsTreeChild.unlinkSearch();
      this.jsTreeChild.loadData(data.detail.node);

  }

  ObjectBreadParentSelect(data){
      console.log('in breadParent callback object');
      this.jsTreeParent.show();
      this.jsTreeParent.getHTMLParent()[0].style.flex = 1;
      this.jsTreeChild.getHTMLParent()[0].style.flex = "";
      this.jsTreeChild.hide();
  }




  ObjectJsTreeChildSelect(data){

      if(this.in == "Container"){
        this.jsTreeParent.unlinkSearch();
        this.jsTreeParent.breadcrumbize('breadcrumb');
        this.jsTreeParent.deselectAll();
        this.jsTreeParent.closeAll();
        this.jsTreeParent.getHTMLParent()[0].style.flex = 0;

        this.jsTreeParent.hide();
        this.jsTreeChild.show();
        this.jsTreeChild.linkSearch('toolsInput');
        this.jsTreeChild.getHTMLParent()[0].style.flex = 1;
      }


      this.in = "Child";

  }

























  toolbarHTML(){

    this.ObjectToolBar = new toolBar(this.TheObjectInfosCollect,this.TheObjectInfosResourcesTypeCollect);
    this.ObjectToolBar.hide();

  }




	initContainerJstreeDOMElements(){

    //je charge l'objet jstree standard
    this.JstreeContainerObj = new JsTreeContainer(this.JsTreeContainer,'Parent', this.TheContainerCollect);

	}



  linkVakataDomEvent(){

    $(document).on('dnd_stop.vakata', (e, data) => this.vakataAction(e,data));

  }

  
  
  vakataAction(e, data){

        //Pour savoir quel jstree a lancée l'event
        let MyFrag = $(data.data.origin.element[0]);
        let ref = $('#'+MyFrag.filter("div").attr('id')).jstree(true);

        let TheJstree = "";

        if(MyFrag.filter("div").attr('id') == this.JsTreeContainer){

          console.log('on passe bien la');
          console.log(this.JstreeContainerObj);

          TheJstree = this.JstreeContainerObj;
        
        }else if (MyFrag.filter("div").attr('id') == this.JsTreeObjects){
        

          TheJstree = this.JstreeObjectsObj;

        }



       TheJstree.onDNDJstree(e,data,ref); 

       

    }

 


  onContainerSelected(e){

    console.log(e);
    if(e.detail.id == 0) return true;



    this.objectIdSelect = e.detail.id;
    //create or refresh the child
    if( this.JstreeObjectsObj === undefined ){

      this.JstreeObjectsObj = new JsTreeContainer(this.JsTreeObjects,'Child', this.TheObjectCollect,e.detail.id,e.detail.name);


      


    }else{

      this.JstreeObjectsObj.setParentId(e.detail.id,e.detail.name);

    }

    this.JstreeObjectsObj.getJstreeContainerElements();
    this.JstreeObjectsObj.onMaximize();

    this.ObjectToolBar.setContainerId(e.detail.id);

    this.ObjectToolBar.setLeafId("");

  }


  onChildAction(e){


    this.ObjectToolBar.setLeafId(e.detail.id);

    this.JstreeContainerObj.onMinimize();
    this.ObjectToolBar.show();

    //listing des infos
    $('#leafInfos').empty();

    if(e.detail.id == 0) return true;

    let infosElement = new infosLoader();


    if('id' in e.detail){

      infosElement.loadList(this.objectIdSelect,e.detail.id);


    }



  }


  onParentAction(e){

    this.JstreeObjectsObj.onMinimize(true);
    this.ObjectToolBar.hide();
    this.ObjectToolBar.setLeafId("");

  }




}



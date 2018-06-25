import layout from '../layout.js';

import Header from '../sections/header.js';
import Breadcrumb from '../sections/breadcrumb.js';
import Footer from '../sections/footer.js';
import Manager from '../elements/objects/main/bottom/manage/manager.js';
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
    this.breadcrumb();
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

  breadcrumb(){

    this.ObjBreadcrumb = new Breadcrumb();

  }


  mainTopUp(){

    //divParent,Collection,class
     this.jsTreeParent = new jsTreeContainer('topUp','Container','JsTreeContainer');
     this.jsTreeParent.loadData();
    
  }

  mainTopBottom(){

    //divParent,Collection,class
    this.jsTreeChild = new jsTreeContainer('topBottom','ObjectTree','JsTreeObjects');
    this.jsTreeChild.hide();
    
  }


  mainBottomTools(){


     this.mainBottomTools = new Tools();

    
  }


 mainBottomManager(field){


     this.mainBottomMyManager = new Manager(field);

    
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
    console.log('ParentSelect');
      this.ParentId = data.detail.node.id;
      this.jsTreeChild.unlinkSearch();
      this.jsTreeChild.loadData(data.detail.node);
      
      this.jsTreeParent.getHTMLParent()[0].style.flex = "1 1 0%";
      this.jsTreeChild.getHTMLParent()[0].style.flex = "";
      this.jsTreeChild.show();
      
      this.jsTreeParent.clearSearch();
      this.in = "Container";

  }

  ObjectBreadParentSelect(data){
      console.log('in breadParent callback object');
      this.ParentId = "";
      this.jsTreeParent.show();
      this.jsTreeParent.getHTMLParent()[0].style.flex = "1 1 0%";
      this.jsTreeChild.getHTMLParent()[0].style.flex = "0 0 0%";
      this.jsTreeChild.hide();
      this.mainBottomTools.removeInfos();
      this.mainBottomTools.clearSearch();
      this.jsTreeParent.linkSearch('toolsInput');
      this.in = "Container";
  }




  ObjectJsTreeChildSelect(data){

    console.log('ChildSelect');
    console.log(data);
    console.log(this.in);

      if(this.in == "Container"){

        //BREADCRUMB
            let listEl = this.jsTreeParent.getObjPathToNode();
            //on instancie breadcrumb et on lui passe les données
            console.log(tobc);

            this.ObjBreadcrumb.init("bcContainer", listEl ,true);
        ////////////

//this.jsTreeParent.breadcrumbize('breadcrumb');
        this.jsTreeParent.getHTMLParent()[0].style.flex = "0 0 0%";

        this.jsTreeParent.hide();
        this.jsTreeChild.linkSearch('toolsInput');
        this.jsTreeChild.getHTMLParent()[0].style.flex = "1 1 0%";

        this.mainBottomTools.initInfosObjects();
        this.mainBottomManager("manage");
      }


      this.in = "Child";
      this.mainBottomTools.clearSearch();
      this.mainBottomMyManager.loadList(this.ParentId,data.detail.node.id);

      //on lance le manager

      

  }

























  toolbarHTML(){

    this.ObjectToolBar = new toolBar(this.TheObjectInfosCollect,this.TheObjectInfosResourcesTypeCollect);
    this.ObjectToolBar.hide();

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

 


  







}



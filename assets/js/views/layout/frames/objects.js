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
    this.headerCustom();
    this.mainTop();
    this.mainBottomTools();
    this.footerCustom();

/*		this.getHTMLPage();

    this.JsTreeContainer = 'jstreeContainerdiv';

    this.JsTreeObjects   = 'jstreeObjectDiv';

    this.TheContainerCollect = new ContainerCollect();

    this.TheObjectCollect = new ObjectCollect();

    this.TheObjectInfosCollect = new ObjectInfosCollect();

    this.TheObjectInfosResourcesTypeCollect = new ObjectInfosResourcesTypeCollect();

		this.activeCSS();

		this.initContainerJstreeDOMElements();

    this.linkVakataDomEvent();

    this.toolbarHTML();

    this.activeJS();

    window.addEventListener('ContainerSelect', (e) => this.onContainerSelected(e));
    window.addEventListener('childAction', (e) => this.onChildAction(e));
    window.addEventListener('parentAction', (e) => this.onParentAction(e));*/
	}


  headerCustom(){

    let HomeHeader = new Header();
    
    HomeHeader.setBkgdColor(this.bkgdHF);
    HomeHeader.setBackToHome();
    HomeHeader.setIconPage();

  }


  mainTop(){

    //divParent,Collection,class
     let jsTreeParent = new jsTreeContainer('top','Container','JsTreeContainer');

    
  }



  mainBottomTools(){


     let mainBottomTools = new Tools();

    
  }


  footerCustom(){

    let HomeFooter = new Footer();
    
    HomeFooter.setBkgdColor(this.bkgdHF);

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



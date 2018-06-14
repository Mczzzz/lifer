import swal from 'sweetalert';

import toolBar from '../common/toolBar.js';


export default class toolBarObjects  extends toolBar {

	constructor(ObjectInfosCollect,ObjectInfosResourcesTypeCollect){


		super();

		this.ObjectInfosCollect = ObjectInfosCollect;
		this.ObjectInfosResourcesTypeCollect = ObjectInfosResourcesTypeCollect;
		this.init();

		this.containerId = "";
		this.leafId = "";

	}



	setContainerId(containerId){

		this.containerId = containerId;
	}


	setLeafId(leafId){

		this.leafId = leafId;
	}



	init(){

		this.initButton("add");

		this.ObjectsInitActions();
	}


	ObjectsInitActions(){

		//on load les éléments de la barre d'outils
		let AllButtons = this.ObjectInfosResourcesTypeCollect.getList();

		let buttons = {};

		for(let k in AllButtons){
			let eachButton = {};

			eachButton.color = AllButtons[k].color;

			eachButton.icon = AllButtons[k].picto;

			eachButton.id = AllButtons[k].id;

			eachButton.action = 'start'+ AllButtons[k].name[0].toUpperCase() + AllButtons[k].name.slice(1);

			buttons[AllButtons[k].name] = eachButton;
		}

	

	this.alimentList(buttons);

	//add listener here


	}


	startPhoto(){

		console.log('instartphoto');
	}


	startText(){
		console.log('instartText');

		var div = document.createElement("div");
		div.className = 'col s9';

		var nom = document.createElement("textarea");
		nom.id = "swal_wl_text";
		nom.placeholder = "Titre";
		div.append(nom);

	swal({
			  title : 'Note :',
			//  text: 'You can use <b>bold text</b>, ' + '<a href="//github.com">links</a> ' + 'and other HTML tags',

			  content : div,


			  button: {
			    text: "Ajouter",
			    closeModal: false,
			  }
	})

	}

	startWebLink(){

		console.log('instartweblink');
		

		//custom html for sweetAlert

		var div = document.createElement("div");
		div.className = 'col s9';

		var nom = document.createElement("input");
		nom.type = "text";
		nom.id = "swal_wl_name";
		nom.placeholder = "nom";
		div.append(nom);

		var url = document.createElement("input");
		url.type = "url";
		url.id = "swal_wl_url";
		url.placeholder = "http(s)://lifer.hopeful.care/...";
		div.append(url);

		//sweetalert definition

		swal({
			  title : 'Insérez un lien Web',
			//  text: 'You can use <b>bold text</b>, ' + '<a href="//github.com">links</a> ' + 'and other HTML tags',

			  content : div,


			  button: {
			    text: "Ajouter",
			    closeModal: false,
			  },
			})
			.then(name => {

			 	let formData = new FormData();

		        formData.append('titre',$("#swal_wl_name").val());
		        formData.append('url',$("#swal_wl_url").val());
				formData.append('ObjectId', this.containerId);
				formData.append('ObjectLeafId', this.leafId);

				let results = this.ObjectInfosCollect.create(formData);
			 	return results;
			  // enregistrement de l'infos en base

			  //on load la collection et onva enregistrer



			})
			.then(results => {

			let err = 0 ;
			// on contrôle le retour
			if(results.error != 0){
				err = results.error;
			} else{

			//je réactialise mes infos
			let evUpdateLinkList = new CustomEvent('InfosRefresh', {'detail' : results});
            window.dispatchEvent(evUpdateLinkList);
			//je ferme mon arbre
			swal.close();


			}


			})
			.then(err => {
			  if (err) {
			    swal("Arf !!!", "La synchro avec le serveur à merdée", "error");
			  } else {
			    swal.stopLoading();
			    swal.close();
			  }
			});


	}


}
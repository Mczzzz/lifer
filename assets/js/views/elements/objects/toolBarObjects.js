import swal from 'sweetalert';

import toolBar from '../common/toolBar.js';


export default class toolBarObjects  extends toolBar {

	constructor(){


		super();


		this.init();
	}


	init(){

		this.initButton("add");

		this.ObjectsInitActions();
	}


	ObjectsInitActions(){


		let buttons = {

			"photo" : {

				"color" :  "grey", //red
				"icon"  :  "camera_alt",
				"action" : "startPhoto"

			},

			"texte" : {

				"color" :  "grey", // yellow darken-1
				"icon"  :  "format_quote",
				"action" : "startTexte"

			},

			"event" : {

				"color" :  "grey", // green
				"icon"  :  "date_range",
				"action" : "startEvent"

			},

			"weblink" : {

				"color" :  "blue",
				"icon"  :  "insert_link",
				"action" : "startWebLink"

			},

			"value" : {

				"color" :  "grey", //blue
				"icon"  :  "looks_one",
				"action" : "startValue"

			},

		};

	

	this.alimentList(buttons);

	//add listener here


	}


	startPhoto(){

		console.log('instartphoto');
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
			 // console.log(name);
			 	console.log($("#swal_wl_name").val());
			 	console.log($("#swal_wl_url").val());

			  // enregistrement de l'infos en base

			  //on load la collection et onva enregistrer
			  


			})
			.then(results => {
			  return results.json();
			})
			.then(json => {
			  const movie = json.results[0];
			 
			  if (!movie) {
			    return swal("No movie was found!");
			  }
			 
			  const name = movie.trackName;
			  const imageURL = movie.artworkUrl100;
			 
			  swal({
			    title: "Top result:",
			    text: name,
			    icon: imageURL,
			  });
			})
			.catch(err => {
			  if (err) {
			    swal("Oh noes!", "The AJAX request failed!", "error");
			  } else {
			    swal.stopLoading();
			    swal.close();
			  }
			});


	}


}
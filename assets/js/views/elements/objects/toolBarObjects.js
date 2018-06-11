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

		swal({
			  text: 'Insérez un lien Web',
			  
			  content: {
			  	element :"input",
			  	    attributes: {
				      placeholder: "Lien",
				      type: "url",
				    },
				   },

			  button: {
			    text: "Ajouter",
			    closeModal: false,
			  },
			})
			.then(name => {
			  if (!name) throw null;
			 
			  // enregistrement de l'infos en base
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
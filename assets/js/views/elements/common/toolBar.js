export default class toolBar {


	constructor(){


		this.id = 'toolbar';

		//this.myList = myList;

		this.initHtml();

		

	}



	initHtml(){


 	 let TheToolBar =  `<div id="`+this.id+`"" class="fixed-action-btn horizontal ltr-lifer" style="position: absolute; display: inline-block; left: 0px;">

></div>`;


		$('.section').append(TheToolBar);


	}

	initButton(icon){

		let intiIcon = `<a class="btn-floating btn-large">
                            <i class="material-icons">`+icon+`</i>
                        </a>`;

		$('#'+this.id).append(intiIcon);

	}


	initList(){

		let coreList = `<ul id="ul_`+this.id+`"></ul>`;

		$('#'+this.id).append(intiIcon);

	}


	alimentList(){

		for (let k in this.myList){

			this.addTolist(k, myList[k].color, myList[k].icon, myList[k].action);

		}

	}
	


	addToList(k, color, icon, action){

		let addTolist = `<li>
	                        <a id="tbLink_`+k+`" class="btn-floating `+color+`">
	                          <i class="large material-icons">`+icon+`</i>
	                        </a>
                         </li>`; 


        $('#ul_'+this.id).append(addTolist);
	
        $('tbLink_'+k).on( "click", (e) => this.action(e));

	}


	hide(){

		 $('#'+this.id).hide();

	}


	html(){


      	let TheToolBar =  `
                           



                            <ul>


                              <li>
                                <a id="launch_cam" class="btn-floating red">
                                  <i class="large material-icons">camera_alt</i>
                                </a>
                              </li>


                              <li>
                                <a id="tooBarAddText" class="btn-floating yellow darken-1">
                                  <i class="large material-icons">format_quote</i>
                                </a>
                              </li>


                              <li>
                                <a class="btn-floating green">
                                  <i class="large material-icons">date_range</i>
                                </a>
                              </li>


                              <li>
                                <a class="btn-floating blue">
                                  <i class="large material-icons">insert_link</i>
                                </a>
                              </li>


                              <li>
                                <a class="btn-floating blue">
                                  <i class="large material-icons">looks_one</i>
                                </a>
                              </li>

                            </ul>

		`;

	}



}
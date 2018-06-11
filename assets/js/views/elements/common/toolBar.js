export default class toolBar {


	constructor(){

		this.id = 'toolbar';


		this.initHtml();

		

	}



	initHtml(){


 	 let TheToolBar =  `<div id="`+this.id+`"" class="fixed-action-btn horizontal ltr-lifer" style="position: absolute; display: inline-block; left: 0px;">

</div>`;


		$('.section').append(TheToolBar);


	}

	initButton(icon){

		let intiIcon = `<a class="btn-floating btn-large">
                            <i class="material-icons">`+icon+`</i>
                        </a>`;

		$('#'+this.id).append(intiIcon);

		this.initList();

	}


	initList(){

		let coreList = `<ul id="ul_`+this.id+`"></ul>`;

		$('#'+this.id).append(coreList);

	}


	alimentList(myList){

		for (let k in myList){

			this.addToList(k, myList[k].color, myList[k].icon, myList[k].action);

		}

	}
	


	addToList(k, color, icon, action){

		let addTolist = `<li>
	                        <a id="tbLink_`+k+`" class="btn-floating `+color+`">
	                          <i class="large material-icons">`+icon+`</i>
	                        </a>
                         </li>`; 


        $('#ul_'+this.id).append(addTolist);
	
		//(e) => this[e.detail.frame](e)
        $('#tbLink_'+k).on( "click", (e) => this[action](e));

	}


	hide(){

		 $('#'+this.id).hide();

	}


	
}
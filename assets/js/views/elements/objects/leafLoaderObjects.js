export default class leafLoaderObjects{


	constructor(){


		this.addHTML();
		this.activeJQUERY();
	}


	addHTML(){

		let html = `<div id="Swipeable-tab" class="section">
                        <div class="row">
                            <div class="col s12">
                                <ul id="tabs-swipe-demo" class="tabs">
                                    <li class="tab col s3"><a href="#test-swipe-1"><i class="material-icons">info</i></a></li>
                                    <li class="tab col s3"><a class="active" href="#test-swipe-2"><i class="material-icons">note</i></a></li>
                                    <li class="tab col s3"><a href="#test-swipe-3"><i class="material-icons">access_alarms</i></a></li>
                                </ul>
                                <div id="test-swipe-1" class="col s12 carousel carousel-item blue white-text">
                                    <div class="col s12 mt-1"></div>Test 1</div>
                                </div>
		                        <div id="test-swipe-2" class="col s12 carousel carousel-item red white-text">
		                            <div class="col s12 mt-1"></div>Test 2</div>
		                        </div>
                                <div id="test-swipe-3" class="col s12 carousel carousel-item green white-text">
                                    <div class="col s12 mt-1"></div>Test 3</div>
                                </div>
                            </div>
                        </div>
                    </div>`;   

        $('#leafInfos').append(html);

	}


	activeJQUERY(){

		   $('#tabs-swipe-demo').tabs({
            swipeable : true,
            responsiveThreshold : 1920
          });


	}

}
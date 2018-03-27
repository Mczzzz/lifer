var layout = function(LiferApp){

	this.addTool = new adder();


	this.init = function(){

		LiferApp.stage.addChild(this.addTool.init());

	}



}



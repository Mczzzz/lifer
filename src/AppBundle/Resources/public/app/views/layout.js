var layout = function(){

	this.addTool = new adder();


	this.init = function(){

		LiferApp.stage.addChild(this.addTool.init());

	}



}



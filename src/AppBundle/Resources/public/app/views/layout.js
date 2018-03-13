var layout = function(){

	this.addTool = new adder();


	this.init = function(){

		app.stage.addChild(this.addTool.init());

	}



}



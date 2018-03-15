var previewPict = function(){

	this.img = $('#photo')[0].files[0];

	this.draw = function(){

		var pict = new PIXI.Sprite.fromImage(this.img); 

		return pict;

	}










}
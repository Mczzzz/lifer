var previewPict = function(){

	this.img = $('#photo')[0].files[0];

	this.draw = function(){

		console.log(this.img);

		var pict = new PIXI.Sprite.fromImage(this.img); 

		return pict;

	}










}
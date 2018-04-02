export default class Image{
	



	constructor(data){

	//console.log("construct Image");
		let img = new Image();

		let MyPict;

		img.onload = function(){

			this.imageWidth  = img.width;
			this.imageHeight = img.height;

		}


		img.src = data;


	}



	ImgRatio(){

		console.log(this.imageWidth + " " + this.imageHeight);


	}







}
class ImageLoader {
	

	constructor(){

	}



	importPict(e){

		let reader = new FileReader();
		reader.readAsDataURL(this.camLauncher.files[0]);

		reader.onloadend = ()=> this.loadPict(reader.result);

	}

	loadPict(pict){


		this.imgObj = new Image();

		this.imgObj.src = pict;

		this.imgObj.addEventListener('load',()=>this.getOrientation(pict));


	}

	getOrientation(pict){

		EXIF(this.camLauncher.files[0],(err,orientation) => this.rotateImg(err,orientation,pict));

	}



	rotateImg(err,orientation,pict){


		this.imgDiv = document.createElement("div");
		this.divCore.append(this.imgDiv);
		this.imgDiv.style.display = "flex";
		this.imgDiv.style.borderRadius = "8px";
		this.imgDiv.style.margin = "10px";

		this.img = document.createElement("img");
		this.img.classList.add("obj");
		this.imgDiv.prepend(this.img); 

		let RatioPhoto = this.imgObj.naturalWidth / this.imgObj.naturalHeight;

		this.img.src = pict;
		this.img.style.width  = "100%";
		this.img.style.borderRadius = "8px";
		this.img.height = this.img.offsetWidth  / RatioPhoto;
		

		if(orientation.rotate == 90){

			let ImgHeight = this.img.offsetWidth;
			let ImgWidth = this.img.offsetWidth * RatioPhoto;

			let decalX = ((ImgWidth - this.img.offsetWidth) / 2);
			//let decalY = ((ImgWidth - this.img.offsetWidth) / 2);

			this.img.style.width = "";
			this.img.width = ImgWidth;
			this.img.height = ImgHeight;

			this.img.style.transform = 'rotate(' + orientation.rotate + 'deg) translate('+decalX+'px,'+decalX+'px)';

			this.imgDiv.style.minHeight = ImgWidth+"px";

		}else{

			this.imgDiv.style.minHeight = this.img.height+"px";
		}


		//envoyer en sauvegarde background
		this.dispatcher("","photo",this.camLauncher.files[0]);

	}





}

const instance = new ImageLoader();
export { instance as ImgLoader };

import superViews from "../../../super/views.js";

export default class Image extends superViews{ 
     

     constructor( MyClass,path,prepend = false){

          super( MyClass , path);



          this.init();

     }


     init(){


          this.setStyle("margin" , "10px");

          this.setStyle("border" , "none");
          this.setStyle("outline" , "none");
          this.setStyle("background" , "transparent");


     }


     setData(data){

          let img = document.createElement("img");
          this.container.append(img);
 
          
          if(!data.capture){

               img.src = data.data.pict +  "/" + this.parent.offsetWidth;

          }else{

               let RatioPhoto = data.data.ObjImg.naturalWidth / data.data.ObjImg.naturalHeight;

               img.src = data.data.pict;
               img.style.width  = "100%";
               img.height = img.offsetWidth  / RatioPhoto;


               if(data.data.orientation.rotate == 90){

                    let ImgHeight = img.offsetWidth;
                    let ImgWidth = img.offsetWidth * RatioPhoto;

                    let decalX = ((ImgWidth - img.offsetWidth) / 2);

                    img.style.width = "";
                    img.width = ImgWidth;
                    img.height = ImgHeight;

                    img.style.transform = 'rotate(' + data.data.orientation.rotate + 'deg) translate('+decalX+'px,'+decalX+'px)';

                    this.container.style.minHeight = ImgWidth+"px";

               }else{

                    this.container.style.minHeight = img.height+"px";
               }



          }
          

     }





}


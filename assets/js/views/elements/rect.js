export default class Rect {


	constructor(color , liStyle, x , y , width , height){



		let element = drwRect(color , liStyle, x , y , width , height);

		return element;
	}


	drwRect(color , liStyle, x , y , width , height){

		let rect = new PIXI.Graphics();
        rect.beginFill(color);
        rect.lineStyle(liStyle);
        rect.drawRect(x, y, width, height);
        rect.endFill();


		return rect; 

	}

}
export default class RoundedRect {


	constructor(color , liStyle, round, x , y , width , height, alpha){



		let element = this.drwRect(color , liStyle, x , y , width , height, round, alpha);

		return element;
	}


	drwRect(color , liStyle, x , y , width , height, round, alpha){

		console.log('RoundedRect !!!!!');
		let rect = new PIXI.Graphics();
        rect.beginFill(color);
        rect.lineStyle(liStyle);
        rect.drawRoundedRect(x, y, width, height, round);
        rect.endFill();

        rect.fillAlpha = alpha;

        console.log('on renvoi le rectangle');
		return rect; 

	}

}
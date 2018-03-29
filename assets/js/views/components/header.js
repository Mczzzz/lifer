export default class Header {
	

		constructor(){

		this.card = new PIXI.Container();

        this.backgroundCard = new PIXI.Graphics();
        this.backgroundCard.beginFill(0xFF0000);
        this.backgroundCard.lineStyle(0);
        this.backgroundCard.drawRect(0, 0, window.innerWidth , window.innerHeight * 0.1);
        this.backgroundCard.endFill();

        this.backgroundCard.interactive = true;

        return this.backgroundCard;
     


	}




}
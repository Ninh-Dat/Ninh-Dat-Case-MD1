class Food{
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.width = 30;
        this.height = 30;
        this.checkCoordinates();
    }
    checkCoordinates(){

        this.x = (Math.floor(Math.random() * (29 - 0)) + 0) * this.width + this.height;
        this.y = (Math.floor(Math.random() * (29 - 0)) + 0) * this.width + this.height;
    }
    draw2(){
        this.game.context.beginPath();
        this.game.context.fillStyle = "blue";
        this.game.context.fillRect(this.x, this.y, this.width, this.height);
        this.game.context.fill();
        this.game.context.closePath();
    }

}
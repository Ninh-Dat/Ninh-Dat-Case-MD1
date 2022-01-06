class Snake {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.width = 30;
        this.height = 30;
        this.dx = 10;
        this.dy = 0;
        this.cell=[];
        this.maxCell = 1;

    }
    run() {
        this.checkCollision();
        this.x += this.dx;
        this.y += this.dy;

        this.cell.unshift({x: this.x,y: this.y});
        if (this.cell.length > this.maxCell){
            this.cell.pop();
        }

    }

    draw() {
        for (let i = 0; i < this.cell.length; i++) {
            this.game.context.beginPath();
            this.game.context.fillStyle = "Orange";
            this.game.context.fillRect(this.cell[i].x, this.cell[i].y, this.width, this.height);
            this.game.context.fill();
            this.game.context.closePath();
        }

    }




    move() {
        window.addEventListener('keydown', (event) => {
            if (event.keyCode == 37 && this.dx == 0) {
                //Đi sang trái
                this.dx -= 10;
                this.dy = 0
            } else if (event.keyCode == 39 && this.dx == 0) {
                //Đi sang phải
                this.dx += 10;
                this.dy = 0;
            } else if (event.keyCode == 38 && this.dy == 0) {
                //Đi lên trên
                this.dx = 0;
                this.dy -= 10;
            } else if (event.keyCode == 40 && this.dy == 0) {
                //Đi xuống dưới
                this.dx = 0;
                this.dy += 10;
            }
        })
    }

    checkCollision() {//kiểm tra va chạm

        if (this.x < 0) {
            this.x = 0;
            alert('game over');
            window.location.reload();

        } else if (this.x > this.game.canvas.width - this.width) {
            this.x = this.game.canvas.width - this.width;
            alert('game over');
             window.location.reload();
        }
        if (this.y < 0) {
            this.y = 0;
            alert('game over');
             window.location.reload();

        } else if (this.y > this.game.canvas.height - this.height) {
            this.y = this.game.canvas.height - this.height;
            alert('game over');
            window.location.reload();
        }

    }

eat(x,y){
        if (this.x==x && this.y==y){
            this.maxCell  ++;
            return true;
        }
        return false;
}


}
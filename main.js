class Main {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.init();
     this.time();

    }

    init() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 900;
        this.canvas.height = 900;
        document.body.appendChild(this.canvas)// đưa canvas vào thẻ body
        this.snake = new Snake(this);//khởi tạo con rắn
        this.food = new  Food(this);//khởi tạo đồ ăn
    }

    time(){
        this.draw1();
        this.move();
        setTimeout(() => this.time(), 30);

    }
    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    move(){

        this.snake.run();
        this.snake.move();
        if (this.snake.x === this.food.x && this.snake.y === this.food.y){
            if (this.snake.eat(this.food.x, this.food.y)){
                this.food.checkCoordinates()

            }
        }

    }


    draw1() {

        this.clear();
        this.snake.draw();
        this.food.draw2();

    }

}

let main = new Main(0, 0)
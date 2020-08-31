let grid;
let balls = [];


function preload() {
    grid = new Board(9, 12, 64);
}


function setup() {

    createCanvas(grid.width(), grid.height());

    grid.addModule(new HorizontalPiece(), 0, 128);
    grid.addModule(new HorizontalPiece(), 64, 128);
    grid.addModule(new HorizontalPiece(), 128, 128);
    grid.addModule(new HorizontalPiece(), 192, 128);
    grid.addModule(new CurvePiece(), 256, 128);
    grid.addModule(new VerticalPiece(), 256, 192);
    grid.addModule(new VerticalPiece(), 256, 256);
    grid.addModule(new HorizontalPiece(), 256, 320);
    balls.push(new Ball(0, 160, 4, 0));
    balls.push(new Ball(64, 160, 4, 0));

}


function draw() {

    background(0);

    for (let module of grid.modules) {
        module.update();
        module.draw();
    }

    for (let ball of balls) {
        ball.update(grid);
        if (ball.dead()) {
            balls.splice(balls.indexOf(ball), 1);
            continue;
        }
        ball.draw();
    }

}


function mousePressed() {
    grid.addModule(new VerticalPiece(), mouseX, mouseY);
}

let grid;
let balls = [];


function preload() {
    grid = new ModuleGrid(9, 12, 64);
}


function setup() {

    createCanvas(grid.width(), grid.height());

    grid.addModule(new HorzPipeModule(), 64, 128);
    grid.addModule(new HorzPipeModule(), 128, 128);
    grid.addModule(new HorzPipeModule(), 192, 128);
    grid.addModule(new VertPipeModule(), 256, 128);
    grid.addModule(new VertPipeModule(), 256, 192);
    grid.addModule(new VertPipeModule(), 256, 256);
    grid.addModule(new HorzPipeModule(), 256, 320);
    balls.push(new Ball(0, 160, 4, 0));
    balls.push(new Ball(288, 128, 0, 4));

}


function draw() {

    background(0);

    for (let module of grid.modules) {
        module.update();
        module.draw();
    }

    for (let ball of balls) {
        ball.update();
        if (ball.dead()) {
            balls.splice(balls.indexOf(ball), 1);
            continue;
        }
        ball.draw();
        let module = grid.moduleAt(ball.pos.x, ball.pos.y);
        if (module) {
            module.handleBall(ball);
        }
    }

}


function mousePressed() {
    grid.addModule(new HorzPipeModule(), mouseX, mouseY);
}

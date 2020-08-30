let grid;
let balls = [];


function preload() {
    grid = new ModuleGrid(9, 12, 64);
}


function setup() {

    createCanvas(grid.width(), grid.height());

    grid.addModule(new Module(), 64, 64);
    grid.addModule(new Module(), 128, 192);
    balls.push(new Ball(0, 160));

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
    grid.addModule(new Module(), mouseX, mouseY);
}

let grid;
let balls = [];
let modules = [];

function addModule(module) {
    modules.push(module);
    grid.addModule(module);
}


function preload() {
    grid = new Grid(9, 12, 64);
}

function setup() {
    createCanvas(grid.width(), grid.height());

    addModule(new Module(64, 64));
    addModule(new Module(128, 192));
    balls.push(new Ball(0, 160));
}

function draw() {
    background(0);
    for (let module of modules) {
        module.update();
        module.draw();
    }
    for (let ball of balls) {
        ball.update();
        ball.draw();
        let module = grid.moduleAt(ball.pos.x, ball.pos.y);
        if (module) {
            module.handleBall(ball);
        }
    }
}

function mousePressed() {
    addModule(new Module(int(mouseX / grid.cellSize) * grid.cellSize, int(mouseY / grid.cellSize) * grid.cellSize));
}

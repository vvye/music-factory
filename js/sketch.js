let modules = [];
let balls = [];


function setup() {
    createCanvas(800, 600);
    modules.push(new Module(128, 128));
    modules.push(new Module(256, 64));
    balls.push(new Ball(0, 128));
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
    }
}

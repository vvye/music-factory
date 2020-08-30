let modules = [];


function setup() {
    createCanvas(800, 600);
    modules.push(new Module(128, 128));
    modules.push(new Module(256, 64));
}

function draw() {
    background(0);
    for (let module of modules) {
        module.draw();
    }
}

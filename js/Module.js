class Module {

    pos;

    constructor(x, y) {
        this.pos = createVector(x, y);
    }

    update() {
    }

    draw() {
        noStroke();
        fill(255, 0, 255);
        rect(this.pos.x, this.pos.y, 64, 64);
    }

}

class Ball {

    pos;
    speed;

    constructor(x, y) {
        this.pos = createVector(x, y);
        this.speed = createVector(4, 0);
    }

    update() {
        this.pos.add(this.speed)
    }

    draw() {
        noStroke();
        fill(255);
        circle(this.pos.x, this.pos.y, 20);
    }

    currentModule(modules) {
        let gridPos = createVector(int(this.pos.x / 64) * 64, int(this.pos.y / 64) * 64);
        return modules[gridPos] || null;
    }

}

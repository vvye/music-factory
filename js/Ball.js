class Ball {

    pos;
    speed;

    constructor(x, y) {
        this.pos = createVector(x, y);
        this.speed = createVector(3, 0);
    }

    update() {
        this.pos.add(this.speed)
    }

    draw() {
        noStroke();
        fill(255);
        circle(this.pos.x, this.pos.y, 10);
    }

}

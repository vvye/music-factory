class Module {

    pos;
    color;

    constructor(x, y) {
        this.color = 255;
        this.pos = createVector(x, y);
    }

    update() {
    }

    draw() {
        noStroke();
        fill(255, 0, this.color);
        rect(this.pos.x, this.pos.y, 64, 64);
    }

    handleBall(ball) {
        ball.speed.x *= -1;
    }

}

class VertPipeModule extends Module {

    constructor() {
        super();
    }

    draw() {
        noStroke();
        fill(255, 0, this.color);
        rect(this.pos.x + 8, this.pos.y, 48, 64);
    }

    onBallEnter(ball) {
        ball.speed.x *= -1;
    }

}

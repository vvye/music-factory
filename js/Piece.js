class Piece {

    pos;
    color;

    constructor() {
        this.color = 255;
        this.pos = createVector();
    }

    update() {
    }

    draw() {
    }

    onBallEnter(ball) {
    }

    onBallInside(ball) {
    }

    onBallLeave(ball) {
    }

    ballNearCenter(ball) {
        return abs(ball.pos.x - (this.pos.x + 32)) < abs(ball.speed.x) + 0.001
            && abs(ball.pos.y - (this.pos.y + 32)) < abs(ball.speed.y) + 0.001;
    }

    setBallToCenter(ball) {
        ball.pos.x = this.pos.x + 32;
        ball.pos.y = this.pos.y + 32;
    }

}

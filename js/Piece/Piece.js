class Piece {

    static backgroundSprite;

    pos;

    constructor() {
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
        return abs(ball.pos.x - (this.pos.x + 8)) < abs(ball.speed.x) + 0.001
            && abs(ball.pos.y - (this.pos.y + 8)) < abs(ball.speed.y) + 0.001;
    }

    setBallToCenter(ball) {
        ball.pos.x = this.pos.x + 8;
        ball.pos.y = this.pos.y + 8;
    }

}

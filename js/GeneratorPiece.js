class GeneratorPiece extends Piece {

    constructor() {
        super();
    }

    update(balls) {
        if (frameCount % 32 === 0 && balls.length < 100) {
            let newBall = new Ball(this.pos.x + 64, this.pos.y + 32, 4, 0);
            balls.push(newBall);
        }
    }

    onBallEnter(ball) {
        ball.rebound();
    }

    draw() {
        noStroke();
        fill(0, 255, 0);
        rect(this.pos.x, this.pos.y, 64, 64);
    }

}

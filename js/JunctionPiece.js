class JunctionPiece extends Piece {

    processedBalls;

    constructor() {
        super();
        this.processedBalls = [];
    }

    onBallInside(ball) {
        if (this.processedBalls.includes(ball.id)) {
            return;
        }
        if (this.ballNearCenter(ball)) {
            this.setBallToCenter(ball);
            if (Math.random() > 0.5) {
                [ball.speed.x, ball.speed.y] = [-ball.speed.y, ball.speed.x];
            } else {
                [ball.speed.x, ball.speed.y] = [ball.speed.y, ball.speed.x];
            }
            this.processedBalls.push(ball.id);
        }
    }

    onBallLeave(ball) {
        if (this.processedBalls.includes(ball.id)) {
            this.processedBalls.splice(this.processedBalls.indexOf(ball.id), 1);
        }
    }

    draw() {
        image(spritesheet, this.pos.x, this.pos.y, 64, 64, 128, 0, 16, 16);
        image(spritesheet, this.pos.x, this.pos.y, 64, 64, 160, 0, 16, 16);
    }

}

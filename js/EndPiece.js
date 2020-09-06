class EndPiece extends Piece {

    static sprite;

    processedBalls;
    orientation;

    constructor(orientation) {
        super();
        this.processedBalls = [];
        this.orientation = orientation;
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        EndPiece.sprite.draw(this.pos.x, this.pos.y, this.orientation);
    }

    onBallEnter(ball) {
        if (this.orientation === Orientation.UP && !ball.movingUp()
            || this.orientation === Orientation.RIGHT && !ball.movingRight()
            || this.orientation === Orientation.DOWN && !ball.movingDown()
            || this.orientation === Orientation.LEFT && !ball.movingLeft()) {
            ball.rebound();
        }
    }

    onBallInside(ball) {
        if (this.processedBalls.includes(ball.id)) {
            return;
        }
        if (this.ballNearCenter(ball)) {
            ball.rebound();
            this.processedBalls.push(ball.id);
        }
    }

    onBallLeave(ball) {
        if (this.processedBalls.includes(ball.id)) {
            this.processedBalls.splice(this.processedBalls.indexOf(ball.id), 1);
        }
    }

}

class CrossJunctionPiece extends Piece {

    static sprite;

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
            random([ball.moveDown, ball.moveUp, ball.moveLeft, ball.moveRight]).bind(ball)();
            this.processedBalls.push(ball.id);
        }
    }

    onBallLeave(ball) {
        if (this.processedBalls.includes(ball.id)) {
            this.processedBalls.splice(this.processedBalls.indexOf(ball.id), 1);
        }
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        CrossJunctionPiece.sprites[Orientation.UP].draw(this.pos.x, this.pos.y);
    }

}

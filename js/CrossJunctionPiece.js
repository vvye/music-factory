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

            if (ball.movingUp()) {
                random([ball.moveUp, ball.moveLeft, ball.moveRight]).bind(ball)();
            } else if (ball.movingLeft()) {
                random([ball.moveDown, ball.moveUp, ball.moveLeft]).bind(ball)();
            } else if (ball.movingDown()) {
                random([ball.moveDown, ball.moveLeft, ball.moveRight]).bind(ball)();
            } else {
                random([ball.moveDown, ball.moveUp, ball.moveRight]).bind(ball)();
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
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        CrossJunctionPiece.sprite.draw(this.pos.x, this.pos.y);
    }

}

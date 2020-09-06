class JunctionPiece extends Piece {

    static sprite;

    processedBalls;

    constructor(orientation) {
        super();
        this.processedBalls = [];
        this.orientation = orientation;
    }

    onBallEnter(ball) {
        if (this.orientation === Orientation.UP && ball.movingUp()
            || this.orientation === Orientation.RIGHT && ball.movingRight()
            || this.orientation === Orientation.DOWN && ball.movingDown()
            || this.orientation === Orientation.LEFT && ball.movingLeft()) {
            ball.rebound();
        }
    }

    onBallInside(ball) {
        if (this.processedBalls.includes(ball.id)) {
            return;
        }
        if (this.ballNearCenter(ball)) {
            this.setBallToCenter(ball);

            switch (this.orientation) {
                case Orientation.UP:
                    if (ball.movingDown()) {
                        random([ball.moveLeft, ball.moveRight]).bind(ball)();
                    } else if (ball.movingLeft()) {
                        random([ball.moveLeft, ball.moveUp]).bind(ball)();
                    } else if (ball.movingRight()) {
                        random([ball.moveUp, ball.moveRight]).bind(ball)();
                    } else {
                        ball.rebound();
                    }
                    break;
                case Orientation.RIGHT:
                    if (ball.movingDown()) {
                        random([ball.moveDown, ball.moveRight]).bind(ball)();
                    } else if (ball.movingLeft()) {
                        random([ball.moveDown, ball.moveUp]).bind(ball)();
                    } else if (ball.movingUp()) {
                        random([ball.moveUp, ball.moveRight]).bind(ball)();
                    } else {
                        ball.rebound();
                    }
                    break;
                case Orientation.DOWN:
                    if (ball.movingUp()) {
                        random([ball.moveLeft, ball.moveRight]).bind(ball)();
                    } else if (ball.movingLeft()) {
                        random([ball.moveLeft, ball.moveDown]).bind(ball)();
                    } else if (ball.movingRight()) {
                        random([ball.moveDown, ball.moveRight]).bind(ball)();
                    } else {
                        ball.rebound();
                    }
                    break;
                case Orientation.LEFT:
                    if (ball.movingDown()) {
                        random([ball.moveDown, ball.moveLeft]).bind(ball)();
                    } else if (ball.movingRight()) {
                        random([ball.moveDown, ball.moveUp]).bind(ball)();
                    } else if (ball.movingUp()) {
                        random([ball.moveUp, ball.moveLeft]).bind(ball)();
                    } else {
                        ball.rebound();
                    }
                    break;
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
        JunctionPiece.sprite.draw(this.pos.x, this.pos.y, this.orientation);
    }

}

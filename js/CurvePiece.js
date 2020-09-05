class CurvePiece extends Piece {

    static sprites;

    processedBalls;
    orientation;

    constructor(orientation) {
        super();
        this.processedBalls = [];
        this.orientation = orientation;
        if (!CurvePiece.sprites) {
            CurvePiece.sprites = {
                [Orientation.UP]: new Sprite(mainSpritesheet, 48, 0, 16, 16),
                [Orientation.RIGHT]: new Sprite(mainSpritesheet, 64, 0, 16, 16),
                [Orientation.DOWN]: new Sprite(mainSpritesheet, 80, 0, 16, 16),
                [Orientation.LEFT]: new Sprite(mainSpritesheet, 32, 0, 16, 16)
            }
        }
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        CurvePiece.sprites[this.orientation].draw(this.pos.x, this.pos.y);
    }

    onBallEnter(ball) {
        switch (this.orientation) {
            case Orientation.UP:
                if (!(ball.movingRight() || ball.movingDown())) {
                    ball.rebound();
                }
                break;
            case Orientation.RIGHT:
                if (!(ball.movingLeft() || ball.movingDown())) {
                    ball.rebound();
                }
                break;
            case Orientation.DOWN:
                if (!(ball.movingLeft() || ball.movingUp())) {
                    ball.rebound();
                }
                break;
            case Orientation.LEFT:
                if (!(ball.movingRight() || ball.movingUp())) {
                    ball.rebound();
                }
                break;
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
                case Orientation.DOWN:
                    [ball.speed.x, ball.speed.y] = [-ball.speed.y, -ball.speed.x];
                    break;
                case Orientation.LEFT:
                case Orientation.RIGHT:
                    [ball.speed.x, ball.speed.y] = [ball.speed.y, ball.speed.x];
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

}

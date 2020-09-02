class CurvePiece extends Piece {

    static directions = {TOP_LEFT: 0, TOP_RIGHT: 1, BOTTOM_LEFT: 2, BOTTOM_RIGHT: 3};
    static topLeftSprite;
    static topRightSprite;
    static bottomLeftSprite;
    static bottomRightSprite;

    processedBalls;
    direction;

    constructor(direction) {
        super();
        this.processedBalls = [];
        this.direction = direction;
        if (!CurvePiece.topLeftSprite) {
            CurvePiece.topLeftSprite = new Sprite(spritesheet, 48, 0, 16, 16);
            CurvePiece.topRightSprite = new Sprite(spritesheet, 64, 0, 16, 16);
            CurvePiece.bottomLeftSprite = new Sprite(spritesheet, 32, 0, 16, 16);
            CurvePiece.bottomRightSprite = new Sprite(spritesheet, 80, 0, 16, 16);
        }
    }

    draw() {
        let sprite = {
            [CurvePiece.directions.BOTTOM_LEFT]: CurvePiece.bottomLeftSprite,
            [CurvePiece.directions.TOP_LEFT]: CurvePiece.topLeftSprite,
            [CurvePiece.directions.TOP_RIGHT]: CurvePiece.topRightSprite,
            [CurvePiece.directions.BOTTOM_RIGHT]: CurvePiece.bottomRightSprite,
        }[this.direction];
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        sprite.draw(this.pos.x, this.pos.y);
    }

    onBallEnter(ball) {
        switch (this.direction) {
            case CurvePiece.directions.TOP_LEFT:
                if (!(ball.movingRight() || ball.movingDown())) {
                    ball.rebound();
                }
                break;
            case CurvePiece.directions.TOP_RIGHT:
                if (!(ball.movingLeft() || ball.movingDown())) {
                    ball.rebound();
                }
                break;
            case CurvePiece.directions.BOTTOM_LEFT:
                if (!(ball.movingRight() || ball.movingUp())) {
                    ball.rebound();
                }
                break;
            case CurvePiece.directions.BOTTOM_RIGHT:
                if (!(ball.movingLeft() || ball.movingUp())) {
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
            switch (this.direction) {
                case CurvePiece.directions.TOP_LEFT:
                case CurvePiece.directions.BOTTOM_RIGHT:
                    [ball.speed.x, ball.speed.y] = [-ball.speed.y, -ball.speed.x];
                    break;
                case CurvePiece.directions.TOP_RIGHT:
                case CurvePiece.directions.BOTTOM_LEFT:
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

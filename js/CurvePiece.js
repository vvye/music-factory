class CurvePiece extends Piece {

    static directions = {TOP_LEFT: 0, TOP_RIGHT: 1, BOTTOM_LEFT: 2, BOTTOM_RIGHT: 3};

    processedBalls;
    direction;

    constructor(direction) {
        super();
        this.processedBalls = [];
        this.direction = direction;
    }

    draw() {
        let spritesheetPos = {
            [CurvePiece.directions.BOTTOM_LEFT]: 32,
            [CurvePiece.directions.TOP_LEFT]: 48,
            [CurvePiece.directions.TOP_RIGHT]: 64,
            [CurvePiece.directions.BOTTOM_RIGHT]: 80,
        }[this.direction];
        image(spritesheet, this.pos.x, this.pos.y, 64, 64, 128, 0, 16, 16);
        image(spritesheet, this.pos.x, this.pos.y, 64, 64, spritesheetPos, 0, 16, 16);
    }

    onBallEnter(ball) {
        switch (this.direction) {
            case CurvePiece.directions.TOP_LEFT:
                if (!(ball.movingRight() && ball.stationaryY() || ball.stationaryX() && ball.movingDown())) {
                    ball.rebound();
                }
                break;
            case CurvePiece.directions.TOP_RIGHT:
                if (!(ball.movingLeft() && ball.stationaryY() || ball.stationaryX() && ball.movingDown())) {
                    ball.rebound();
                }
                break;
            case CurvePiece.directions.BOTTOM_LEFT:
                if (!(ball.movingRight() && ball.stationaryY() || ball.stationaryX() && ball.movingUp())) {
                    ball.rebound();
                }
                break;
            case CurvePiece.directions.BOTTOM_RIGHT:
                if (!(ball.movingLeft() && ball.stationaryY() || ball.stationaryX() && ball.movingUp())) {
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
                    [ball.speed.x, ball.speed.y] = [-ball.speed.y, -ball.speed.x];
                    break;
                case CurvePiece.directions.TOP_RIGHT:
                    [ball.speed.x, ball.speed.y] = [ball.speed.y, ball.speed.x];
                    break;
                case CurvePiece.directions.BOTTOM_LEFT:
                    [ball.speed.x, ball.speed.y] = [ball.speed.y, ball.speed.x];
                    break;
                case CurvePiece.directions.BOTTOM_RIGHT:
                    [ball.speed.x, ball.speed.y] = [-ball.speed.y, -ball.speed.x];
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

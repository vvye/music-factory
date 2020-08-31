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
        noStroke();
        fill(255, 0, this.color);
        switch (this.direction) {
            case CurvePiece.directions.TOP_LEFT:
                rect(this.pos.x, this.pos.y + 8, 16, 48);
                rect(this.pos.x + 8, this.pos.y, 48, 16);
                arc(this.pos.x + 16, this.pos.y + 16, 80, 80, 0, HALF_PI);
                break;
            case CurvePiece.directions.TOP_RIGHT:
                rect(this.pos.x + 48, this.pos.y + 8, 16, 48);
                rect(this.pos.x + 8, this.pos.y, 48, 16);
                arc(this.pos.x + 48, this.pos.y + 16, 80, 80, HALF_PI, PI);
                break;
            case CurvePiece.directions.BOTTOM_RIGHT:
                rect(this.pos.x + 48, this.pos.y + 8, 16, 48);
                rect(this.pos.x + 8, this.pos.y + 48, 48, 16);
                arc(this.pos.x + 48, this.pos.y + 48, 80, 80, PI, PI + HALF_PI);
                break;
            case CurvePiece.directions.BOTTOM_LEFT:
                rect(this.pos.x, this.pos.y + 8, 16, 48);
                rect(this.pos.x + 8, this.pos.y + 48, 48, 16);
                arc(this.pos.x + 16, this.pos.y + 48, 80, 80, -HALF_PI, 0);
                break;
        }
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

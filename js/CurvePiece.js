class CurvePiece extends Piece {

    originalSpeeds;

    constructor() {
        super();
        this.originalSpeeds = {};
    }

    draw() {
        noStroke();
        fill(255, 0, this.color);
        rect(this.pos.x, this.pos.y + 8, 16, 48);
        rect(this.pos.x + 8, this.pos.y + 48, 48, 16);
        arc(this.pos.x + 16, this.pos.y + 48, 80, 80, -HALF_PI, 0);
    }

    onBallEnter(ball) {
        this.originalSpeeds[ball.id] = ball.speed.copy();
    }

    onBallInside(ball) {
        let origSpeed = this.originalSpeeds[ball.id];
        if (origSpeed.x > 0 && origSpeed.y === 0) {
            if (ball.speed.x > 0) {
                ball.speed.x -= 0.25;
            }
            if (ball.speed.y < 4) {
                ball.speed.y += 0.25;
            }
        } else if (origSpeed.x === 0 && origSpeed.y < 0) {
            if (ball.speed.x > -4) {
                ball.speed.x -= 0.25;
            }
            if (ball.speed.y < 0) {
                ball.speed.y += 0.25;
            }
        } else {
            ball.speed.x *= -1;
            ball.speed.y *= -1;
        }
    }

    onBallLeave(ball) {
        let origSpeed = this.originalSpeeds[ball.id];
        if (origSpeed.x > 0 && origSpeed.y === 0) {
            ball.pos.x = this.pos.x + 32;
            ball.speed.x = 0;
            ball.speed.y = 4;
        } else if (origSpeed.x === 0 && origSpeed.y < 0) {
            ball.pos.y = this.pos.y + 32;
            ball.speed.x = -4;
            ball.speed.y = 0;
        }
        delete this.originalSpeeds[ball.id];
    }

}

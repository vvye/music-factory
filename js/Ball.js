const BallLifetime = 25;

class Ball {

    id;
    pos;
    speed;
    lifetime;
    contactedPiece;

    constructor(x, y, xSpeed, ySpeed) {
        this.id = Math.random();
        this.pos = createVector(x, y);
        this.speed = createVector(xSpeed, ySpeed);
        this.lifetime = BallLifetime;
        this.contactedPiece = null;
    }

    update(board) {
        this.pos.add(this.speed);

        let newContactedPiece = board.pieceAt(this.pos.x, this.pos.y);
        if (newContactedPiece !== this.contactedPiece) {
            if (this.contactedPiece) {
                this.contactedPiece.onBallLeave(this);
            }
            if (newContactedPiece) {
                newContactedPiece.onBallEnter(this);
                this.contactedPiece = newContactedPiece;
            }
        }
        if (this.contactedPiece) {
            this.contactedPiece.onBallInside(this);
        } else {
            this.lifetime = 0;
        }
    }

    resetLifetime() {
        this.lifetime = BallLifetime;
    }

    dead() {
        return this.lifetime <= 0;
    }

    draw() {
        image(spritesheet, this.pos.x - 16, this.pos.y - 16, 32, 32, 144, 0, 8, 8);
    }

    movingLeft() {
        return this.speed.x < 0;
    }

    movingRight() {
        return this.speed.x > 0;
    }

    stationaryX() {
        return this.speed.x === 0;
    }

    movingUp() {
        return this.speed.y < 0;
    }

    movingDown() {
        return this.speed.y > 0;
    }

    stationaryY() {
        return this.speed.y === 0;
    }

    rebound() {
        this.speed.mult(-1);
    }

    reboundX() {
        this.speed.x *= -1;
    }

    reboundY() {
        this.speed.y *= -1;
    }

}

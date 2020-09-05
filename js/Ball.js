class Ball {

    static lifetime = 25;
    static sprite;

    id;
    pos;
    speed;
    lifetime;
    contactedPiece;

    constructor(x, y, xSpeed, ySpeed) {
        this.id = Math.random();
        this.pos = createVector(x, y);
        this.speed = createVector(xSpeed, ySpeed);
        this.lifetime = Ball.lifetime;
        this.contactedPiece = null;
        if (!Ball.sprite) {
            Ball.sprite = new Sprite(mainSpritesheet, 448, 0, 7, 7);
        }
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
        this.lifetime = Ball.lifetime;
    }

    die() {
        this.lifetime = 0;
    }

    dead() {
        return this.lifetime <= 0;
    }

    draw() {
        Ball.sprite.draw(this.pos.x - 3.5, this.pos.y - 3.5);
    }

    movingLeft() {
        return this.speed.x < 0;
    }

    movingRight() {
        return this.speed.x > 0;
    }

    movingUp() {
        return this.speed.y < 0;
    }

    movingDown() {
        return this.speed.y > 0;
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

    absSpeed() {
        return max(abs(this.speed.x), abs(this.speed.y))
    }

    moveUp() {
        [this.speed.x, this.speed.y] = [0, -this.absSpeed()];
    }

    moveRight() {
        [this.speed.x, this.speed.y] = [this.absSpeed(), 0];
    }

    moveDown() {
        [this.speed.x, this.speed.y] = [0, this.absSpeed()];
    }

    moveLeft() {
        [this.speed.x, this.speed.y] = [-this.absSpeed(), 0];
    }

}

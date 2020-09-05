class GeneratorPiece extends Piece {

    static sprites;
    static animatedSprites;

    orientation;

    constructor(orientation) {
        super();
        this.orientation = orientation;
    }

    update() {
        if (frameCount % 32 === 0 && balls.length < 100) {
            let newBall;
            switch (this.orientation) {
                case Orientation.UP:
                    newBall = new Ball(this.pos.x + 8, this.pos.y, 0, -1);
                    break;
                case Orientation.RIGHT:
                    newBall = new Ball(this.pos.x + 16, this.pos.y + 8, 1, 0);
                    break;
                case Orientation.DOWN:
                    newBall = new Ball(this.pos.x + 8, this.pos.y + 16, 0, 1);
                    break;
                case Orientation.LEFT:
                    newBall = new Ball(this.pos.x, this.pos.y + 8, -1, 0);
                    break;
            }
            balls.push(newBall);
        }
    }

    onBallEnter(ball) {
        ball.rebound();
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        GeneratorPiece.animatedSprites[this.orientation].draw(this.pos.x, this.pos.y);
    }

}

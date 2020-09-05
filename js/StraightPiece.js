class StraightPiece extends Piece {

    static sprites;

    orientation;

    constructor(orientation) {
        super();
        this.orientation = orientation;
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        StraightPiece.sprites[this.orientation].draw(this.pos.x, this.pos.y);
    }

    onBallEnter(ball) {
        if (this.orientation === Orientation.RIGHT || this.orientation === Orientation.LEFT) {
            ball.reboundY();
        } else {
            ball.reboundX();
        }
    }

}

class StraightPiece extends Piece {

    static sprite;

    orientation;

    constructor(orientation) {
        super();
        this.orientation = orientation;
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        StraightPiece.sprite.draw(this.pos.x, this.pos.y, this.orientation);
    }

    onBallEnter(ball) {
        if (this.orientation === Orientation.RIGHT || this.orientation === Orientation.LEFT) {
            ball.reboundY();
        } else {
            ball.reboundX();
        }
    }

}

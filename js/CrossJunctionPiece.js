class CrossJunctionPiece extends Piece {

    static sprite;

    constructor() {
        super();
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        CrossJunctionPiece.sprites[Orientation.UP].draw(this.pos.x, this.pos.y);
    }

}

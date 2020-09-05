class CrossJunctionPiece extends Piece {

    static sprite;

    constructor() {
        super();
        if (!CrossJunctionPiece.sprite) {
            CrossJunctionPiece.sprite = new Sprite(mainSpritesheet, 160, 0, 16, 16);
        }
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        CrossJunctionPiece.sprite.draw(this.pos.x, this.pos.y);
    }

}

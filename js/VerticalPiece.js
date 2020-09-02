class VerticalPiece extends Piece {

    static sprite;

    constructor() {
        super();
        if (!VerticalPiece.sprite) {
            VerticalPiece.sprite = new Sprite(mainSpritesheet, 16, 0, 16, 16);
        }
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        VerticalPiece.sprite.draw(this.pos.x, this.pos.y);
    }

    onBallEnter(ball) {
        ball.reboundX();
    }

}

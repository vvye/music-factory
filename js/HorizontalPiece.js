class HorizontalPiece extends Piece {

    static sprite;

    constructor() {
        super();
        if (!HorizontalPiece.sprite) {
            HorizontalPiece.sprite = new Sprite(spritesheet, 0, 0, 16, 16);
        }
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        HorizontalPiece.sprite.draw(this.pos.x, this.pos.y);
    }

    onBallEnter(ball) {
        ball.reboundY();
    }

}

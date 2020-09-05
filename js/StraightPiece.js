class StraightPiece extends Piece {

    static sprites;

    orientation;

    constructor(orientation) {
        super();
        this.orientation = orientation;
        if (!StraightPiece.sprites) {
            StraightPiece.sprites = {
                [Orientation.UP]: new Sprite(mainSpritesheet, 16, 0, 16, 16),
                [Orientation.RIGHT]: new Sprite(mainSpritesheet, 0, 0, 16, 16),
                [Orientation.DOWN]: new Sprite(mainSpritesheet, 16, 0, 16, 16),
                [Orientation.LEFT]: new Sprite(mainSpritesheet, 0, 0, 16, 16),
            };
        }
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

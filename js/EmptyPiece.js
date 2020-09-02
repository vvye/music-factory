class EmptyPiece extends Piece {

    static sprites;

    sprite;

    constructor() {
        super();
        if (!EmptyPiece.sprites) {
            EmptyPiece.sprites = [
                new Sprite(mainSpritesheet, 256, 0, 16, 16),
                new Sprite(mainSpritesheet, 256, 16, 16, 16),
                new Sprite(mainSpritesheet, 256, 32, 16, 16)
            ]
        }
        this.sprite = random(EmptyPiece.sprites);
    }

    draw() {
        this.sprite.draw(this.pos.x, this.pos.y);
    }

    onBallEnter(ball) {
        ball.lifetime = 12;
    }

    onBallInside(ball) {
        ball.lifetime--;
    }

    onBallLeave(ball) {
        ball.lifetime = 0;
    }

}

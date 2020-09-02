class EmptyPiece extends Piece {

    static sprites;

    sprite;

    constructor() {
        super();
        if (!EmptyPiece.sprites) {
            EmptyPiece.sprites = [
                new Sprite(spritesheet, 128, 0, 16, 16),
                new Sprite(spritesheet, 128, 16, 16, 16),
                new Sprite(spritesheet, 128, 32, 16, 16)
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

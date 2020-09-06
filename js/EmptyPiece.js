class EmptyPiece extends Piece {

    static code = '_';
    static sprites;

    sprite;

    constructor() {
        super();
        this.sprite = random(EmptyPiece.sprites);
    }

    draw() {
        this.sprite.draw(this.pos.x, this.pos.y);
    }

    onBallInside(ball) {
        if (this.ballNearCenter(ball)) {
            ball.die();
        }
    }

}

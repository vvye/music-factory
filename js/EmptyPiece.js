class EmptyPiece extends Piece {

    static sprites;

    sprite;

    constructor() {
        super();
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

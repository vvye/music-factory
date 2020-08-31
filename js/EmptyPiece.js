class EmptyPiece extends Piece {

    constructor() {
        super();
    }

    draw() {
        image(spritesheet, this.pos.x, this.pos.y, 64, 64, 128, 0, 16, 16);
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

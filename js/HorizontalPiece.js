class HorizontalPiece extends Piece {

    constructor() {
        super();
    }

    draw() {
        image(spritesheet, this.pos.x, this.pos.y, 64, 64, 0, 0, 16, 16);
    }

    onBallEnter(ball) {
        ball.reboundY();
    }

}

class VerticalPiece extends Piece {

    constructor() {
        super();
    }

    draw() {
        image(spritesheet, this.pos.x, this.pos.y, 64, 64, 128, 0, 16, 16);
        image(spritesheet, this.pos.x, this.pos.y, 64, 64, 16, 0, 16, 16);
    }

    onBallEnter(ball) {
        ball.reboundX();
    }

}

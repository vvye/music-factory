class VerticalPiece extends Piece {

    constructor() {
        super();
    }

    draw() {
        image(spritesheet, this.pos.x * scaleFactor, this.pos.y * scaleFactor, 16 * scaleFactor, 16 * scaleFactor, 128, 0, 16, 16);
        image(spritesheet, this.pos.x * scaleFactor, this.pos.y * scaleFactor, 16 * scaleFactor, 16 * scaleFactor, 16, 0, 16, 16);
    }

    onBallEnter(ball) {
        ball.reboundX();
    }

}

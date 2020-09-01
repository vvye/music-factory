class EmptyPiece extends Piece {

    img;

    constructor() {
        super();
        this.img = random([0, 1, 2]);
    }

    draw() {
        image(spritesheet, this.pos.x, this.pos.y, 64, 64, 128, this.img * 16, 16, 16);
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

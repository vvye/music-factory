class EmptyPiece extends Piece {

    constructor() {
        super();
    }

    draw() {
        stroke(128);
        strokeWeight(1);
        noFill()
        rect(this.pos.x, this.pos.y, 64, 64);
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

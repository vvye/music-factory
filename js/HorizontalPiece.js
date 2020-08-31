class HorizontalPiece extends Piece {

    constructor() {
        super();
    }

    draw() {
        noStroke();
        fill(255, 0, this.color);
        rect(this.pos.x, this.pos.y + 8, 64, 48);
    }

    onBallEnter(ball) {
        ball.speed.y *= -1;
    }

}

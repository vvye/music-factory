class GeneratorPiece extends Piece {

    static sprite;

    constructor() {
        super();
    }

    update(balls) {
        if (frameCount % 32 === 0 && balls.length < 100) {
            let newBall = new Ball(this.pos.x + 16, this.pos.y + 8, 1, 0);
            balls.push(newBall);
        }
    }

    onBallEnter(ball) {
        ball.rebound();
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        GeneratorPiece.sprite.draw(this.pos.x, this.pos.y);
    }

}

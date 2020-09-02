class GeneratorPiece extends Piece {

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
        let frame = int(frameCount / 8) % 4;
        image(spritesheet, this.pos.x * scaleFactor, this.pos.y * scaleFactor, 16 * scaleFactor, 16 * scaleFactor, 128, 0, 16, 16);
        image(spritesheet, this.pos.x * scaleFactor, this.pos.y * scaleFactor, 16 * scaleFactor, 16 * scaleFactor, 96, frame * 16, 16, 16);
    }

}

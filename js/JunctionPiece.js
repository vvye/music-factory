class JunctionPiece extends Piece {

    static sprite;

    processedBalls;

    constructor() {
        super();
        this.processedBalls = [];
        if (!JunctionPiece.sprite) {
            JunctionPiece.sprite = new Sprite(spritesheet, 160, 0, 16, 16);
        }
    }

    onBallInside(ball) {
        if (this.processedBalls.includes(ball.id)) {
            return;
        }
        if (this.ballNearCenter(ball)) {
            this.setBallToCenter(ball);
            if (Math.random() > 0.5) {
                [ball.speed.x, ball.speed.y] = [-ball.speed.y, ball.speed.x];
            } else {
                [ball.speed.x, ball.speed.y] = [ball.speed.y, ball.speed.x];
            }
            this.processedBalls.push(ball.id);
        }
    }

    onBallLeave(ball) {
        if (this.processedBalls.includes(ball.id)) {
            this.processedBalls.splice(this.processedBalls.indexOf(ball.id), 1);
        }
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        JunctionPiece.sprite.draw(this.pos.x, this.pos.y);
    }

}

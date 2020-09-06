class GeneratorPiece extends Piece {

    static code = 'g';
    static sprite;
    static animatedSprite;

    orientation;
    smokeTimeOffset;

    constructor(orientation) {
        super();
        this.orientation = orientation;
        this.smokeTimeOffset = int(random(-32, 32));
    }

    update() {
        if (frameCount % 32 === 0 && balls.length < 100) {
            let newBall;
            switch (this.orientation) {
                case Orientation.UP:
                    newBall = new Ball(this.pos.x + 8, this.pos.y, 0, -1);
                    break;
                case Orientation.RIGHT:
                    newBall = new Ball(this.pos.x + 16, this.pos.y + 8, 1, 0);
                    break;
                case Orientation.DOWN:
                    newBall = new Ball(this.pos.x + 8, this.pos.y + 16, 0, 1);
                    break;
                case Orientation.LEFT:
                    newBall = new Ball(this.pos.x, this.pos.y + 8, -1, 0);
                    break;
            }
            balls.push(newBall);
        }
        if (frameCount % (128 + this.smokeTimeOffset) === 0) {
            let sprite = new SyncedAnimatedSprite(mainSpritesheet, 656, 0, 16, 16, 4);
            particles.push(new Particle(this.pos.x + 6, this.pos.y, 0, -0.6, sprite));
            this.smokeTimeOffset = int(random(-32, 32));
        }
    }

    onBallEnter(ball) {
        ball.rebound();
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        GeneratorPiece.animatedSprite.draw(this.pos.x, this.pos.y, this.orientation);
    }

}

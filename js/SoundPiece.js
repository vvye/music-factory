class SoundPiece extends Piece {

    static code = 's';
    static sprites;

    instrument;

    constructor(instrument) {
        super();
        this.instrument = instrument;
    }

    onBallEnter(ball) {
        random(sounds[this.instrument]).play();
        ball.die();
        let sprite = new SyncedAnimatedSprite(mainSpritesheet, 640, 0, 16, 16, 4);
        particles.push(new Particle(this.pos.x + 6, this.pos.y, 0, -1, sprite));
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        SoundPiece.sprites[this.instrument].draw(this.pos.x, this.pos.y);
    }

}

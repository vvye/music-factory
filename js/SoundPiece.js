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
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        SoundPiece.sprites[this.instrument].draw(this.pos.x, this.pos.y);
    }

}

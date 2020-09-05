class SoundPiece extends Piece {

    static sprite;

    sound;

    constructor(sound) {
        super();
        this.sound = sound;
    }

    onBallEnter(ball) {
        this.sound.play();
        ball.die();
    }

    draw() {
        Piece.backgroundSprite.draw(this.pos.x, this.pos.y);
        SoundPiece.sprite.draw(this.pos.x, this.pos.y);
    }

}

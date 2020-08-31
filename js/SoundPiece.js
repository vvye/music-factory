class SoundPiece extends Piece {

    sound;

    constructor(sound) {
        super();
        this.sound = sound;
    }

    onBallEnter(ball) {
        this.sound.play();
        ball.rebound();
    }

}

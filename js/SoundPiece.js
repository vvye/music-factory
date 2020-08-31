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

    draw() {
        image(spritesheet, this.pos.x, this.pos.y, 64, 64, 128, 0, 16, 16);
        image(spritesheet, this.pos.x, this.pos.y, 64, 64, 112, 0, 16, 16);
    }

}

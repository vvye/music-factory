class SoundPiece extends Piece {

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
        image(spritesheet, this.pos.x * scaleFactor, this.pos.y * scaleFactor, 16 * scaleFactor, 16 * scaleFactor, 128, 0, 16, 16);
        image(spritesheet, this.pos.x * scaleFactor, this.pos.y * scaleFactor, 16 * scaleFactor, 16 * scaleFactor, 112, 0, 16, 16);
    }

}

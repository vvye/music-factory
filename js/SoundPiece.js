class SoundPiece extends Piece {

    static sprite;

    sound;

    constructor(sound) {
        super();
        this.sound = sound;
        if (!SoundPiece.sprite) {
            SoundPiece.sprite = new Sprite(mainSpritesheet, 528, 0, 16, 16);
        }
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

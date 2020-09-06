class AnimatedSprite extends Sprite {

    animationFrames;

    constructor(spritesheet, xOffset, yOffset, width, height, animationFrames) {
        super(spritesheet, xOffset, yOffset, width, height);
        this.animationFrames = animationFrames;
    }

    draw(x, y) {
        let frame = int(frameCount / 8) % this.animationFrames;
        image(this.spritesheet, x * scaleFactor, y * scaleFactor, this.width * scaleFactor, this.height * scaleFactor,
            this.offset.x, this.offset.y + this.height * frame, this.width, this.height);
    }

}

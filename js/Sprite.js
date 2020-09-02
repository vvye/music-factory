class Sprite {

    spritesheet;
    offset;
    width;
    height;
    animationFrames;

    constructor(spritesheet, xOffset, yOffset, width, height, animationFrames = 1) {
        this.spritesheet = spritesheet;
        this.offset = createVector(xOffset, yOffset);
        this.width = width;
        this.height = height;
        this.animationFrames = animationFrames;
    }

    draw(x, y) {
        let frame = int(frameCount / 8) % this.animationFrames;
        image(this.spritesheet, x * scaleFactor, y * scaleFactor, this.width * scaleFactor, this.height * scaleFactor,
            this.offset.x, this.offset.y + this.height * frame, this.width, this.height);
    }

}

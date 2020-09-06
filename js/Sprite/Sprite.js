class Sprite {

    spritesheet;
    offset;
    width;
    height;

    constructor(spritesheet, xOffset, yOffset, width, height) {
        this.spritesheet = spritesheet;
        this.offset = createVector(xOffset, yOffset);
        this.width = width;
        this.height = height;
    }

    draw(x, y) {
        image(this.spritesheet, x * scaleFactor, y * scaleFactor, this.width * scaleFactor, this.height * scaleFactor,
            this.offset.x, this.offset.y, this.width, this.height);
    }

}

class Button {

    pos;
    width;
    height;
    associatedPiece;
    active;
    spritesheetOffset;

    constructor(x, y, width, height, associatedPiece, spritesheetXOffset, spritesheetYOffset) {
        this.pos = createVector(x, y);
        this.width = width;
        this.height = height;
        this.associatedPiece = associatedPiece;
        this.active = false;
        this.spritesheetOffset = createVector(spritesheetXOffset, spritesheetYOffset);
    }

    draw(baseX, baseY) {
        let xOffset = this.active ? 200 : 176;
        let posYOffset = this.active ? 1 : 0;
        image(spritesheet, (baseX + this.pos.x) * scaleFactor, (baseY + this.pos.y + posYOffset) * scaleFactor, this.width * scaleFactor, this.height * scaleFactor, xOffset, 0, 22, 22);
        image(spritesheet, (baseX + this.pos.x + 3) * scaleFactor, (baseY + this.pos.y + posYOffset + 3) * scaleFactor, 16 * scaleFactor, 16 * scaleFactor, this.spritesheetOffset.x, this.spritesheetOffset.y, 16, 16);
    }

}

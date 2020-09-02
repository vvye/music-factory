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
        let posYOffset = this.active ? 4 : 0;
        image(spritesheet, baseX + this.pos.x, baseY + this.pos.y + posYOffset, this.width, this.height, xOffset, 0, 22, 22);
        image(spritesheet, baseX + this.pos.x + 12, baseY + this.pos.y + posYOffset + 12, 64, 64, this.spritesheetOffset.x, this.spritesheetOffset.y, 16, 16);
    }

}

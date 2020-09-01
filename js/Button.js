class Button {

    pos;
    width;
    height;
    associatedPiece;
    active;

    constructor(x, y, width, height, associatedPiece) {
        this.pos = createVector(x, y);
        this.width = width;
        this.height = height;
        this.associatedPiece = associatedPiece;
        this.active = false;
    }

    draw(baseX, baseY) {
        let xOffset = this.active ? 204 : 176;
        rect(baseX + this.pos.x, baseY + this.pos.y, this.width, this.height);
        image(spritesheet, baseX + this.pos.x, baseY + this.pos.y, this.width, this.height, xOffset, 0, 28, 28);
        image(spritesheet, baseX + this.pos.x + 12, baseY + this.pos.y + 12, 32, 32, 96, 0, 16, 16);
    }

}

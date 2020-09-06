class Button {

    static inactiveSprite;
    static activeSprite;

    pos;
    width;
    height;
    associatedPiece;
    active;
    labelSprite;

    constructor(x, y, width, height, associatedPiece, labelSprite) {
        this.pos = createVector(x, y);
        this.width = width;
        this.height = height;
        this.associatedPiece = associatedPiece;
        this.active = false;
        this.labelSprite = labelSprite;
    }

    hovered(baseX, baseY) {
        return mouseX - (baseX * scaleFactor) >= this.pos.x * scaleFactor
            && mouseX - (baseX * scaleFactor) < (this.pos.x + this.width) * scaleFactor
            && mouseY - (baseY * scaleFactor) >= this.pos.y * scaleFactor
            && mouseY - (baseY * scaleFactor) < (this.pos.y + this.height) * scaleFactor;
    }

    draw(baseX, baseY, pieceOrientation) {
        let sprite = this.active ? Button.activeSprite : Button.inactiveSprite;
        let yOffset = this.active ? 1 : 0;
        sprite.draw(baseX + this.pos.x, baseY + this.pos.y + yOffset);
        this.labelSprite.draw(baseX + this.pos.x + 3, baseY + this.pos.y + yOffset + 3, pieceOrientation);
    }

}

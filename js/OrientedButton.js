class OrientedButton extends Button {

    pos;
    width;
    height;
    associatedPiece;
    active;
    labelSprites;

    constructor(x, y, width, height, associatedPiece, labelSprites) {
        super();
        this.pos = createVector(x, y);
        this.width = width;
        this.height = height;
        this.associatedPiece = associatedPiece;
        this.active = false;
        this.labelSprites = labelSprites;
    }

    draw(baseX, baseY, pieceOrientation) {
        let sprite = this.active ? Button.activeSprite : Button.inactiveSprite;
        let yOffset = this.active ? 1 : 0;
        sprite.draw(baseX + this.pos.x, baseY + this.pos.y + yOffset);
        this.labelSprites[pieceOrientation].draw(baseX + this.pos.x + 3, baseY + this.pos.y + yOffset + 3);
    }

}

class PieceButton extends Button {

    static inactiveSprite;
    static activeSprite;

    associatedPiece;
    active;
    labelSprite;

    constructor(x, y, width, height, associatedPiece, labelSprite) {
        super(x, y, width, height);
        this.associatedPiece = associatedPiece;
        this.active = false;
        this.labelSprite = labelSprite;
    }

    draw(baseX, baseY, pieceOrientation) {
        let sprite = this.active ? PieceButton.activeSprite : PieceButton.inactiveSprite;
        let yOffset = this.active ? 1 : 0;
        sprite.draw(this.pos.x, this.pos.y + yOffset);
        this.labelSprite.draw(this.pos.x + 3, this.pos.y + yOffset + 3, pieceOrientation);
    }

}

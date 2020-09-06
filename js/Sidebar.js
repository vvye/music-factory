class Sidebar {

    static backgroundSprite;
    static borderSprite;
    static logoSprite;

    pos;
    width;
    height;
    pieceButtons;
    toolbarButtons;
    pieceOrientation;

    constructor(x, y, width, height) {
        this.pos = createVector(x, y);
        this.width = width;
        this.height = height;
        this.initButtons();
        this.pieceOrientation = Orientation.UP;
    }

    initButtons() {

        let baseX = this.pos.x;
        let baseY = this.pos.y;

        this.toolbarButtons = [
            new ToolbarButton(8 + baseX, 40 + baseY, 16, 16, resetBoard, new Sprite(mainSpritesheet, 384, 0, 16, 16)),
            new ToolbarButton(26 + baseX, 40 + baseY, 16, 16, saveBoard, new Sprite(mainSpritesheet, 608, 0, 16, 16)),
            new ToolbarButton(41 + baseX, 40 + baseY, 16, 16, loadBoard, new Sprite(mainSpritesheet, 624, 0, 16, 16)),
            new ToolbarButton(59 + baseX, 40 + baseY, 16, 16, this.rotatePiecesRight.bind(this), new Sprite(mainSpritesheet, 400, 0, 16, 16)),
            new ToolbarButton(77 + baseX, 40 + baseY, 16, 16, zoomIn, new Sprite(mainSpritesheet, 416, 0, 16, 16)),
            new ToolbarButton(92 + baseX, 40 + baseY, 16, 16, zoomOut, new Sprite(mainSpritesheet, 432, 0, 16, 16)),
        ]
        this.pieceButtons = [
            new PieceButton(8 + baseX, 66 + baseY, 22, 22, () => new EmptyPiece(), new Sprite(mainSpritesheet, 368, 0, 16, 16)),
            new PieceButton(34 + baseX, 66 + baseY, 22, 22, () => new StraightPiece(this.pieceOrientation), StraightPiece.sprite),
            new PieceButton(60 + baseX, 66 + baseY, 22, 22, () => new CurvePiece(this.pieceOrientation), CurvePiece.sprite),
            new PieceButton(86 + baseX, 66 + baseY, 22, 22, () => new JunctionPiece(this.pieceOrientation), JunctionPiece.sprite),
            new PieceButton(8 + baseX, 92 + baseY, 22, 22, () => new CrossJunctionPiece(), CrossJunctionPiece.sprite),
            new PieceButton(34 + baseX, 92 + baseY, 22, 22, () => new EndPiece(this.pieceOrientation), EndPiece.sprite),
            new PieceButton(60 + baseX, 92 + baseY, 22, 22, () => new GeneratorPiece(this.pieceOrientation), GeneratorPiece.sprite),
            new PieceButton(86 + baseX, 92 + baseY, 22, 22, () => new SoundPiece(Instrument.PIANO), SoundPiece.sprites[Instrument.PIANO]),
            new PieceButton(8 + baseX, 118 + baseY, 22, 22, () => new SoundPiece(Instrument.GUITAR), SoundPiece.sprites[Instrument.GUITAR]),
            new PieceButton(34 + baseX, 118 + baseY, 22, 22, () => new SoundPiece(Instrument.FLUTE), SoundPiece.sprites[Instrument.FLUTE]),
            new PieceButton(60 + baseX, 118 + baseY, 22, 22, () => new SoundPiece(Instrument.DRUM), SoundPiece.sprites[Instrument.DRUM]),
            new PieceButton(86 + baseX, 118 + baseY, 22, 22, () => new SoundPiece(Instrument.DING), SoundPiece.sprites[Instrument.DING])
        ];
    }

    pieceToPlace() {
        for (let button of this.pieceButtons) {
            if (button.active) {
                return button.associatedPiece();
            }
        }
        return null;
    }

    draw() {

        cursor('default');

        for (let y = 0; y < this.height; y += 16) {
            for (let x = 0; x < this.width; x += 16) {
                Sidebar.backgroundSprite.draw(this.pos.x + x, this.pos.y + y);
            }
            Sidebar.borderSprite.draw(this.pos.x - 8, this.pos.y + y);
        }
        Sidebar.logoSprite.draw(this.pos.x + 14, this.pos.y + 4);

        for (let button of this.pieceButtons) {
            if (button.hovered()) {
                cursor(HAND);
            }
            button.draw(this.pos.x, this.pos.y, this.pieceOrientation);
        }

        for (let button of this.toolbarButtons) {
            if (button.hovered()) {
                cursor(HAND);
            }
            button.draw(this.pos.x, this.pos.y);
        }

        if (!this.hovered()) {
            let activeButton = this.activeButton();
            if (activeButton) {
                let x = mouseX / scaleFactor - 8;
                let y = mouseY / scaleFactor - 8;
                tint(255, 128);
                activeButton.labelSprite.draw(x, y, this.pieceOrientation);
                noTint();
            }
        }
    }

    hovered() {
        return mouseX >= this.pos.x * scaleFactor && mouseX < (this.pos.x + this.width) * scaleFactor
            && mouseY >= this.pos.y * scaleFactor && mouseY < (this.pos.y + this.height) * scaleFactor;
    }

    onMousePressed() {
        if (!this.hovered()) {
            return;
        }
        for (let button of this.toolbarButtons) {
            if (button.hovered()) {
                button.actionFunction();
                return;
            }
        }
        for (let button of this.pieceButtons) {
            button.active = button.hovered() && !button.active;
        }
    }

    rotatePiecesRight() {
        this.pieceOrientation = (this.pieceOrientation + 1) % 4;
    }

    activeButton() {
        for (let button of this.pieceButtons) {
            if (button.active) {
                return button;
            }
        }
        return null;
    }

}

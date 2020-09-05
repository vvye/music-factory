class Sidebar {

    static backgroundSprite;
    static borderSprite;
    static logoSprite;

    pos;
    width;
    height;
    buttons;
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
        this.toolbarButtons = [
            new ToolbarButton(23, 40, 16, 16, resetBoard, new Sprite(mainSpritesheet, 384, 0, 16, 16)),
            new ToolbarButton(41, 40, 16, 16, this.rotatePiecesRight.bind(this), new Sprite(mainSpritesheet, 400, 0, 16, 16)),
            new ToolbarButton(59, 40, 16, 16, this.zoomIn.bind(this), new Sprite(mainSpritesheet, 416, 0, 16, 16)),
            new ToolbarButton(77, 40, 16, 16, this.zoomOut.bind(this), new Sprite(mainSpritesheet, 432, 0, 16, 16)),
        ]
        this.buttons = [
            new Button(8, 66, 22, 22, () => new EmptyPiece(), {
                [Orientation.UP]: new Sprite(mainSpritesheet, 368, 0, 16, 16),
                [Orientation.RIGHT]: new Sprite(mainSpritesheet, 368, 0, 16, 16),
                [Orientation.DOWN]: new Sprite(mainSpritesheet, 368, 0, 16, 16),
                [Orientation.LEFT]: new Sprite(mainSpritesheet, 368, 0, 16, 16),
            }),
            new Button(34, 66, 22, 22, () => new StraightPiece(this.pieceOrientation), StraightPiece.sprites),
            new Button(60, 66, 22, 22, () => new CurvePiece(this.pieceOrientation), CurvePiece.sprites),
            new Button(86, 66, 22, 22, () => new JunctionPiece(this.pieceOrientation), JunctionPiece.sprites),
            new Button(8, 92, 22, 22, () => new CrossJunctionPiece(), CrossJunctionPiece.sprites),
            new Button(34, 92, 22, 22, () => new GeneratorPiece(this.pieceOrientation), GeneratorPiece.sprites),
            new Button(60, 92, 22, 22, () => new SoundPiece(Instrument.PIANO), {
                [Orientation.UP]: SoundPiece.sprites[Instrument.PIANO],
                [Orientation.RIGHT]: SoundPiece.sprites[Instrument.PIANO],
                [Orientation.DOWN]: SoundPiece.sprites[Instrument.PIANO],
                [Orientation.LEFT]: SoundPiece.sprites[Instrument.PIANO],
            }),
            new Button(86, 92, 22, 22, () => new SoundPiece(Instrument.GUITAR), {
                [Orientation.UP]: SoundPiece.sprites[Instrument.GUITAR],
                [Orientation.RIGHT]: SoundPiece.sprites[Instrument.GUITAR],
                [Orientation.DOWN]: SoundPiece.sprites[Instrument.GUITAR],
                [Orientation.LEFT]: SoundPiece.sprites[Instrument.GUITAR],
            }),
            new Button(34, 118, 22, 22, () => new SoundPiece(Instrument.FLUTE), {
                [Orientation.UP]: SoundPiece.sprites[Instrument.FLUTE],
                [Orientation.RIGHT]: SoundPiece.sprites[Instrument.FLUTE],
                [Orientation.DOWN]: SoundPiece.sprites[Instrument.FLUTE],
                [Orientation.LEFT]: SoundPiece.sprites[Instrument.FLUTE],
            }),
            new Button(60, 118, 22, 22, () => new SoundPiece(Instrument.DRUM), {
                [Orientation.UP]: SoundPiece.sprites[Instrument.DRUM],
                [Orientation.RIGHT]: SoundPiece.sprites[Instrument.DRUM],
                [Orientation.DOWN]: SoundPiece.sprites[Instrument.DRUM],
                [Orientation.LEFT]: SoundPiece.sprites[Instrument.DRUM],
            }),
            new Button(86, 118, 22, 22, () => new SoundPiece(Instrument.DING), {
                [Orientation.UP]: SoundPiece.sprites[Instrument.DING],
                [Orientation.RIGHT]: SoundPiece.sprites[Instrument.DING],
                [Orientation.DOWN]: SoundPiece.sprites[Instrument.DING],
                [Orientation.LEFT]: SoundPiece.sprites[Instrument.DING],
            })
        ];
    }

    pieceToPlace() {
        for (let button of this.buttons) {
            if (button.active) {
                return button.associatedPiece();
            }
        }
        return null;
    }

    draw() {
        for (let y = 0; y < this.height; y += 16) {
            for (let x = 0; x < this.width; x += 16) {
                Sidebar.backgroundSprite.draw(this.pos.x + x, this.pos.y + y);
            }
            Sidebar.borderSprite.draw(this.pos.x - 8, this.pos.y + y);
        }
        Sidebar.logoSprite.draw(this.pos.x + 14, this.pos.y + 4);
        for (let button of this.buttons) {
            button.draw(this.pos.x, this.pos.y, this.pieceOrientation);
        }
        for (let button of this.toolbarButtons) {
            button.draw(this.pos.x, this.pos.y);
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
        for (let toolbarButton of this.toolbarButtons) {
            if (toolbarButton.hovered(this.pos.x, this.pos.y)) {
                toolbarButton.actionFunction();
                return;
            }
        }
        for (let button of this.buttons) {
            button.active = button.hovered(this.pos.x, this.pos.y) && !button.active;
        }
    }

    rotatePiecesRight() {
        this.pieceOrientation = (this.pieceOrientation + 1) % 4;
    }

    zoomIn() {
        scaleFactor = min(scaleFactor + 1, maxScaleFactor);
    }

    zoomOut() {
        scaleFactor = max(minScaleFactor, scaleFactor - 1);
    }

}

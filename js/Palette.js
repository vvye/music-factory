class Palette {

    static backgroundSprite;
    static borderSprite;
    static logoSprite;

    pos;
    width;
    height;
    buttons;
    toolButtons;
    pieceOrientation;

    constructor(x, y, width, height) {
        this.pos = createVector(x, y);
        this.width = width;
        this.height = height;
        this.initButtons();
        this.pieceOrientation = Orientation.UP;
        if (!Palette.backgroundSprite) {
            Palette.backgroundSprite = new Sprite(mainSpritesheet, 272, 0, 16, 16);
            Palette.borderSprite = new Sprite(mainSpritesheet, 288, 0, 16, 16);
            Palette.logoSprite = new Sprite(logoSpritesheet, 0, 0, 87, 29);
        }
    }

    initButtons() {
        this.toolButtons = [
            new ToolbarButton(23, 40, 16, 16, this.resetBoard.bind(this), new Sprite(mainSpritesheet, 384, 0, 16, 16)),
            new ToolbarButton(41, 40, 16, 16, this.rotatePiecesLeft.bind(this), new Sprite(mainSpritesheet, 400, 0, 16, 16)),
            new ToolbarButton(59, 40, 16, 16, this.zoomIn.bind(this), new Sprite(mainSpritesheet, 416, 0, 16, 16)),
            new ToolbarButton(77, 40, 16, 16, this.zoomOut.bind(this), new Sprite(mainSpritesheet, 432, 0, 16, 16)),
        ]
        this.buttons = [
            new Button(8, 66, 22, 22, () => new EmptyPiece(), new Sprite(mainSpritesheet, 368, 0, 16, 16)),
            new Button(34, 66, 22, 22, () => new HorizontalPiece(), new Sprite(mainSpritesheet, 0, 0, 16, 16)),
            new Button(60, 66, 22, 22, () => new CurvePiece(CurvePiece.directions.BOTTOM_LEFT), new Sprite(mainSpritesheet, 32, 0, 16, 16)),
            new Button(86, 66, 22, 22, () => new JunctionPiece(), new Sprite(mainSpritesheet, 96, 0, 16, 16)),
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
                Palette.backgroundSprite.draw(this.pos.x + x, this.pos.y + y);
            }
            Palette.borderSprite.draw(this.pos.x - 8, this.pos.y + y);
        }
        Palette.logoSprite.draw(this.pos.x + 14, this.pos.y + 4);
        for (let button of this.buttons) {
            button.draw(this.pos.x, this.pos.y);
        }
        for (let button of this.toolButtons) {
            button.draw(this.pos.x, this.pos.y);
        }
    }

    onMousePressed() {
        if (mouseX < this.pos.x * scaleFactor || mouseX > (this.pos.x + this.width) * scaleFactor
            || mouseY < this.pos.y * scaleFactor || mouseY > (this.pos.y + this.height) * scaleFactor) {
            return;
        }
        for (let button of this.buttons) {
            button.active = (mouseX - (this.pos.x * scaleFactor) >= button.pos.x * scaleFactor && mouseX - (this.pos.x * scaleFactor) < (button.pos.x + button.width) * scaleFactor
                && mouseY - (this.pos.y * scaleFactor) >= button.pos.y * scaleFactor && mouseY - (this.pos.y * scaleFactor) < (button.pos.y + button.height) * scaleFactor);
        }
        for (let button of this.toolButtons) {
            if (mouseX - (this.pos.x * scaleFactor) >= button.pos.x * scaleFactor && mouseX - (this.pos.x * scaleFactor) < (button.pos.x + button.width) * scaleFactor
                && mouseY - (this.pos.y * scaleFactor) >= button.pos.y * scaleFactor && mouseY - (this.pos.y * scaleFactor) < (button.pos.y + button.height) * scaleFactor) {
                button.actionFunction();
            }
        }
    }

    rotatePiecesLeft() {
        this.pieceOrientation = (this.pieceOrientation + 3) % 4;
    }

    zoomIn() {
        scaleFactor = min(scaleFactor + 1, maxScaleFactor);
    }

    zoomOut() {
        scaleFactor = max(minScaleFactor, scaleFactor - 1);
    }

    resetBoard() {
        resetBoard();
    }

}

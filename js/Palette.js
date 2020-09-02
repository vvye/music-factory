class Palette {

    pos;
    width;
    height;
    buttons;

    constructor(x, y, width, height) {
        this.pos = createVector(x, y);
        this.width = width;
        this.height = height;
        this.initButtons();
    }

    initButtons() {
        this.buttons = [
            new Button(8, 40, 22, 22, () => new EmptyPiece(), 224, 0),
            new Button(34, 40, 22, 22, () => new HorizontalPiece(), 0, 0),
            new Button(60, 40, 22, 22, () => new CurvePiece(CurvePiece.directions.BOTTOM_LEFT), 32, 0),
            new Button(86, 40, 22, 22, () => new JunctionPiece(), 160, 0),
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
                image(spritesheet, (this.pos.x + x) * scaleFactor, (this.pos.y + y) * scaleFactor, 16 * scaleFactor, 16 * scaleFactor, 144, 16, 16, 16);
            }
            image(spritesheet, (this.pos.x - 8) * scaleFactor, (this.pos.y + y) * scaleFactor, 16 * scaleFactor, 16 * scaleFactor, 144, 32, 16, 16);
        }
        image(logo, (this.pos.x + 14) * scaleFactor, (this.pos.y + 4) * scaleFactor, 87 * scaleFactor, 29 * scaleFactor, 0, 0, 87, 29);
        for (let button of this.buttons) {
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
    }

}

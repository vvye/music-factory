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
            new Button(32, 160, 88, 88, () => new EmptyPiece(), 224, 0),
            new Button(136, 160, 88, 88, () => new HorizontalPiece(), 0, 0),
            new Button(240, 160, 88, 88, () => new CurvePiece(CurvePiece.directions.BOTTOM_LEFT), 32, 0),
            new Button(344, 160, 88, 88, () => new JunctionPiece(), 160, 0),
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
        for (let y = 0; y < this.height; y += 64) {
            for (let x = 0; x < this.width; x += 64) {
                image(spritesheet, this.pos.x + x, this.pos.y + y, 64, 64, 144, 16, 16, 16);
            }
            image(spritesheet, this.pos.x - 32, this.pos.y + y, 64, 64, 144, 32, 16, 16);
        }
        image(logo, this.pos.x + 56, this.pos.y + 16, 348, 116, 0, 0, 87, 29);
        for (let button of this.buttons) {
            button.draw(this.pos.x, this.pos.y);
        }
    }

    onMousePressed() {

        if (mouseX < this.pos.x || mouseX > this.pos.x + this.width
            || mouseY < this.pos.y || mouseY > this.pos.y + this.height) {
            console.log(mouseX, mouseY, this.pos, this.width, this.height);
            return;
        }

        for (let button of this.buttons) {
            button.active = (mouseX - this.pos.x >= button.pos.x && mouseX - this.pos.x < button.pos.x + button.width
                && mouseY - this.pos.y >= button.pos.y && mouseY - this.pos.y < button.pos.y + button.height);
        }

    }

}

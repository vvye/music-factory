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
        this.buttons = [new Button(16, 16, 56, 56, () => new SoundPiece(sound))];
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
        noStroke();
        fill(65,26,36);
        rect(this.pos.x, this.pos.y, this.width, this.height);
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
                && mouseY - this.pos.y >= button.pos.y && mouseY - this.pos.y < button.pos.x + button.height);
        }

    }

}

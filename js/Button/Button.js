class Button {

    pos;
    width;
    height;

    constructor(x, y, width, height) {
        this.pos = createVector(x, y);
        this.width = width;
        this.height = height;
    }

    hovered() {
        return mouseX >= this.pos.x * scaleFactor && mouseX < (this.pos.x + this.width) * scaleFactor
            && mouseY >= this.pos.y * scaleFactor && mouseY < (this.pos.y + this.height) * scaleFactor;
    }

}

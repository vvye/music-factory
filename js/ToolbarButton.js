class ToolbarButton {

    pos;
    width;
    height;
    actionFunction;
    sprite;

    constructor(x, y, width, height, actionFunction, sprite) {
        this.pos = createVector(x, y);
        this.width = width;
        this.height = height;
        this.actionFunction = actionFunction;
        this.sprite = sprite;
    }

    hovered(baseX, baseY) {
        return mouseX - (baseX * scaleFactor) >= this.pos.x * scaleFactor
            && mouseX - (baseX * scaleFactor) < (this.pos.x + this.width) * scaleFactor
            && mouseY - (baseY * scaleFactor) >= this.pos.y * scaleFactor
            && mouseY - (baseY * scaleFactor) < (this.pos.y + this.height) * scaleFactor;
    }

    draw(baseX, baseY) {
        this.sprite.draw(baseX + this.pos.x, baseY + this.pos.y);
    }

}

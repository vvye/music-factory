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

    draw(baseX, baseY) {
        this.sprite.draw(baseX + this.pos.x, baseY + this.pos.y);
    }

}

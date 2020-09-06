class ToolbarButton extends Button {

    actionFunction;
    sprite;

    constructor(x, y, width, height, actionFunction, sprite) {
        super(x, y, width, height);
        this.actionFunction = actionFunction;
        this.sprite = sprite;
    }

    draw() {
        this.sprite.draw(this.pos.x, this.pos.y);
    }

}

class OrientedSprite {

    spritesByOrientation;

    constructor(spritesByOrientation) {
        this.spritesByOrientation = spritesByOrientation;
    }

    draw(x, y, orientation) {
        this.spritesByOrientation[orientation].draw(x, y);
    }

}

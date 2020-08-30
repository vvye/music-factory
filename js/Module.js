class Module {

    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        fill(255, 0, 255);
        rect(this.x, this.y, 64, 64);
    }

}

class EmptyModule extends Module {

    constructor(row, col) {
        super(row, col);
    }

    draw() {
        stroke(128);
        strokeWeight(1);
        noFill()
        rect(this.pos.x, this.pos.y, 64, 64);
    }

}

class Ball {

    x;
    y;
    xSpeed;
    ySpeed;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xSpeed = 3;
        this.ySpeed = 0;
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    draw() {
        noStroke();
        fill(255);
        circle(this.x, this.y, 10);
    }

}

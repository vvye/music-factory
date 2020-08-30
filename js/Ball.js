const BallLifetime = 50;

class Ball {

    pos;
    speed;
    lifetime;

    constructor(x, y) {
        this.pos = createVector(x, y);
        this.speed = createVector(4, 0);
        this.lifetime = BallLifetime;
    }

    update() {
        this.pos.add(this.speed);
        this.lifetime--;
    }

    resetLifetime() {
        this.lifetime = BallLifetime;
    }

    dead() {
        return this.lifetime <= 0;
    }

    draw() {
        noStroke();
        fill(255, 255, 255, map(this.lifetime, 0, BallLifetime, 0, 512));
        circle(this.pos.x, this.pos.y, 20);
    }

    currentModule(modules) {
        let gridPos = createVector(int(this.pos.x / 64) * 64, int(this.pos.y / 64) * 64);
        return modules[gridPos] || null;
    }

}

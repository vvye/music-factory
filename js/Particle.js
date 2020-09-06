class Particle {

    static initialLifetime = 31;

    pos;
    speed;
    lifetime;
    sprite;

    constructor(x, y, xSpeed, ySpeed, sprite) {
        this.pos = createVector(x, y);
        this.speed = createVector(xSpeed, ySpeed);
        this.lifetime = Particle.initialLifetime;
        this.sprite = sprite;
    }

    update() {
        this.pos.add(this.speed);
        this.lifetime--;
    }

    draw() {
        this.sprite.draw(this.pos.x, this.pos.y);
    }

}

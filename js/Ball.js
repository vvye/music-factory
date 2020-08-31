const BallLifetime = 25;

class Ball {

    id;
    pos;
    speed;
    lifetime;
    contactedModule;

    constructor(x, y, xSpeed, ySpeed) {
        this.id = Math.random();
        this.pos = createVector(x, y);
        this.speed = createVector(xSpeed, ySpeed);
        this.lifetime = BallLifetime;
        this.contactedModule = null;
    }

    update(grid) {
        this.pos.add(this.speed);

        let newContactedModule = grid.moduleAt(this.pos.x, this.pos.y);
        if (newContactedModule !== this.contactedModule) {
            if (this.contactedModule) {
                this.contactedModule.onBallLeave(this);
            }
            if (newContactedModule) {
                newContactedModule.onBallEnter(this);
                this.contactedModule = newContactedModule;
            }
        }
        if (this.contactedModule) {
            this.contactedModule.onBallInside(this);
        } else {
            this.lifetime = 0;
        }
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

    movingLeft() {
        return this.speed.x < 0;
    }

    movingRight() {
        return this.speed.x > 0;
    }

    stationaryX() {
        return this.speed.x === 0;
    }

    movingUp() {
        return this.speed.y < 0;
    }

    movingDown() {
        return this.speed.y > 0;
    }

    stationaryY() {
        return this.speed.y === 0;
    }

    rebound() {
        this.speed.mult(-1);
    }

    reboundX() {
        this.speed.x *= -1;
    }

    reboundY() {
        this.speed.y *= -1;
    }

}

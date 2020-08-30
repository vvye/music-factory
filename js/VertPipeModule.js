class VertPipeModule extends Module {

    draw() {
        noStroke();
        fill(255, 0, this.color);
        rect(this.pos.x + 8, this.pos.y, 48, 64);
    }

    handleBall(ball) {
        ball.resetLifetime();
        ball.speed.x *= -1;
    }

}

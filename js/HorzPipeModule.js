class HorzPipeModule extends Module {

    draw() {
        noStroke();
        fill(255, 0, this.color);
        rect(this.pos.x, this.pos.y + 8, 64, 48);
    }

    handleBall(ball) {
        ball.resetLifetime();
        ball.speed.y *= -1;
    }

}

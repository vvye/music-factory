let board;
let balls = [];
let sound;
let spritesheet;


function preload() {
    board = new Board(9, 12, 64);
    sound = loadSound('sound.wav');
    spritesheet = loadImage('img/spritesheet.png');
}


function setup() {

    let canvas = createCanvas(board.width(), board.height());
    // nearest-neighbor interpolation
    let context = canvas.elt.getContext('2d');
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;

    board.addPiece(new HorizontalPiece(), 64, 128);
    board.addPiece(new HorizontalPiece(), 128, 0);
    board.addPiece(new VerticalPiece(), 128, 64);
    board.addPiece(new VerticalPiece(), 384, 64);
    board.addPiece(new VerticalPiece(), 0, 128);
    board.addPiece(new VerticalPiece(), 512, 128);
    board.addPiece(new VerticalPiece(), 512, 320);
    board.addPiece(new VerticalPiece(), 0, 320);
    board.addPiece(new VerticalPiece(), 128, 384);
    board.addPiece(new VerticalPiece(), 384, 384);
    board.addPiece(new HorizontalPiece(), 128, 448);
    board.addPiece(new CurvePiece(CurvePiece.directions.BOTTOM_RIGHT), 128, 128);
    board.addPiece(new HorizontalPiece(), 192, 128);
    board.addPiece(new HorizontalPiece(), 256, 128);
    board.addPiece(new HorizontalPiece(), 320, 128);
    board.addPiece(new HorizontalPiece(), 384, 0);
    board.addPiece(new HorizontalPiece(), 384, 448);
    board.addPiece(new CurvePiece(CurvePiece.directions.BOTTOM_LEFT), 384, 128);
    board.addPiece(new HorizontalPiece(), 448, 128);
    board.addPiece(new VerticalPiece(), 384, 192);
    board.addPiece(new VerticalPiece(), 384, 256);
    board.addPiece(new HorizontalPiece(), 64, 320);
    board.addPiece(new CurvePiece(CurvePiece.directions.TOP_LEFT), 384, 320);
    board.addPiece(new GeneratorPiece(), 192, 320);
    board.addPiece(new HorizontalPiece(), 256, 320);
    board.addPiece(new HorizontalPiece(), 320, 320);
    board.addPiece(new CurvePiece(CurvePiece.directions.TOP_RIGHT), 128, 320);
    board.addPiece(new HorizontalPiece(), 448, 320);
    board.addPiece(new JunctionPiece(), 128, 192);
    board.addPiece(new SoundPiece(sound), 128, 256);

    balls.push(new Ball(256, 160, -4, 0));
    balls.push(new Ball(192, 160, 4, 0));

    balls.push(new Ball(64, 160, 4, 0));
    balls.push(new Ball(160, 112, 0, 4));

    balls.push(new Ball(480, 160, 4, 0));
    balls.push(new Ball(416, 112, 0, 4));

    balls.push(new Ball(64, 352, 4, 0));
    balls.push(new Ball(160, 432, 0, -4));

    balls.push(new Ball(448, 352, 4, 0));
    balls.push(new Ball(416, 432, 0, -4));

}


function draw() {

    background(0);

    for (let piece of board.pieces) {
        piece.update(balls);
        piece.draw();
    }

    for (let ball of balls) {
        ball.update(board);
        ball.draw();
    }
    balls = balls.filter(ball => !ball.dead());

}


function mousePressed() {
    board.addPiece(new VerticalPiece(), mouseX, mouseY);
}

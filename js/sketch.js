let board;
let balls = [];
let sound;
let spritesheet;
let logo;
let palette;

let scaleFactor = 4;


function preload() {
    spritesheet = loadImage('img/spritesheet.png');
    logo = loadImage('img/logo.png');
    board = new Board(9, 12, 16);
    sound = loadSound('sound.wav');
    palette = new Palette(board.width(), 0, 114, 144);
}


function setup() {

    let canvas = createCanvas((board.width() + palette.width) * scaleFactor, (max(board.height(), palette.height)) * scaleFactor);
    // nearest-neighbor interpolation
    let context = canvas.elt.getContext('2d');
    context.imageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;

    board.addPiece(new HorizontalPiece(), 16, 32);
    board.addPiece(new HorizontalPiece(), 32, 0);
    board.addPiece(new VerticalPiece(), 32, 16);
    board.addPiece(new VerticalPiece(), 96, 16);
    board.addPiece(new VerticalPiece(), 0, 32);
    board.addPiece(new VerticalPiece(), 128, 32);
    board.addPiece(new VerticalPiece(), 128, 80);
    board.addPiece(new VerticalPiece(), 0, 80);
    board.addPiece(new VerticalPiece(), 32, 96);
    board.addPiece(new VerticalPiece(), 96, 96);
    board.addPiece(new HorizontalPiece(), 32, 112);
    board.addPiece(new CurvePiece(CurvePiece.directions.BOTTOM_RIGHT), 32, 32);
    board.addPiece(new HorizontalPiece(), 48, 32);
    board.addPiece(new HorizontalPiece(), 64, 32);
    board.addPiece(new HorizontalPiece(), 80, 32);
    board.addPiece(new HorizontalPiece(), 96, 0);
    board.addPiece(new HorizontalPiece(), 96, 112);
    board.addPiece(new CurvePiece(CurvePiece.directions.BOTTOM_LEFT), 96, 32);
    board.addPiece(new HorizontalPiece(), 112, 32);
    board.addPiece(new VerticalPiece(), 96, 48);
    board.addPiece(new VerticalPiece(), 96, 64);
    board.addPiece(new HorizontalPiece(), 16, 80);
    board.addPiece(new CurvePiece(CurvePiece.directions.TOP_LEFT), 96, 80);
    board.addPiece(new GeneratorPiece(), 48, 80);
    board.addPiece(new HorizontalPiece(), 64, 80);
    board.addPiece(new HorizontalPiece(), 80, 80);
    board.addPiece(new CurvePiece(CurvePiece.directions.TOP_RIGHT), 32, 80);
    board.addPiece(new HorizontalPiece(), 112, 80);
    board.addPiece(new JunctionPiece(), 32, 48);
    board.addPiece(new SoundPiece(sound), 32, 64);

    balls.push(new Ball(64, 40, -1, 0));
    balls.push(new Ball(48, 40, 1, 0));

    balls.push(new Ball(16, 40, 1, 0));
    balls.push(new Ball(40, 28, 0, 1));

    balls.push(new Ball(120, 40, 1, 0));
    balls.push(new Ball(104, 28, 0, 1));

    balls.push(new Ball(16, 88, 1, 0));
    balls.push(new Ball(40, 108, 0, -1));

    balls.push(new Ball(112, 88, 1, 0));
    balls.push(new Ball(104, 108, 0, -1));

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

    palette.draw();

}


function mousePressed() {

    palette.onMousePressed();
    let piece = palette.pieceToPlace();
    if (piece) {
        board.addPiece(piece, mouseX / scaleFactor, mouseY / scaleFactor);
    }

}

let board;
let balls = [];
let sound;
let mainSpritesheet;
let logoSpritesheet;
let palette;

let scaleFactor = 4;
let scaleFactorLastFrame = scaleFactor;
let minScaleFactor = 1;
let maxScaleFactor = 6;


function preload() {

    mainSpritesheet = loadImage('img/spritesheet.png');
    logoSpritesheet = loadImage('img/logo.png');
    board = new Board(9, 12, 16);
    sound = loadSound('sound.wav');
    palette = new Palette(board.width(), 0, 114, 144);

}


function setup() {

    let canvas = createCanvas((board.width() + palette.width) * scaleFactor, (max(board.height(), palette.height)) * scaleFactor);
    let context = canvas.elt.getContext('2d');
    context.imageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;

    resetBoard();

}


function draw() {

    if (scaleFactor !== scaleFactorLastFrame) {
        resizeCanvas((board.width() + palette.width) * scaleFactor, (max(board.height(), palette.height)) * scaleFactor);
    }
    scaleFactorLastFrame = scaleFactor;

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
    if (palette.hovered()) {
        return;
    }

    let piece = palette.pieceToPlace();
    if (piece) {
        board.addPiece(piece, mouseX / scaleFactor, mouseY / scaleFactor);
    }

}


function resetBoard() {

    board = new Board(9, 12, 16);
    balls = [];

    board.addPiece(new StraightPiece(Orientation.LEFT), 16, 32);
    board.addPiece(new StraightPiece(Orientation.LEFT), 32, 0);
    board.addPiece(new StraightPiece(Orientation.UP), 32, 16);
    board.addPiece(new StraightPiece(Orientation.UP), 96, 16);
    board.addPiece(new StraightPiece(Orientation.UP), 0, 32);
    board.addPiece(new StraightPiece(Orientation.UP), 128, 32);
    board.addPiece(new StraightPiece(Orientation.UP), 128, 80);
    board.addPiece(new StraightPiece(Orientation.UP), 0, 80);
    board.addPiece(new StraightPiece(Orientation.UP), 32, 96);
    board.addPiece(new StraightPiece(Orientation.UP), 96, 96);
    board.addPiece(new StraightPiece(Orientation.LEFT), 32, 112);
    board.addPiece(new CurvePiece(Orientation.DOWN), 32, 32);
    board.addPiece(new StraightPiece(Orientation.LEFT), 48, 32);
    board.addPiece(new StraightPiece(Orientation.LEFT), 64, 32);
    board.addPiece(new StraightPiece(Orientation.LEFT), 80, 32);
    board.addPiece(new StraightPiece(Orientation.LEFT), 96, 0);
    board.addPiece(new StraightPiece(Orientation.LEFT), 96, 112);
    board.addPiece(new CurvePiece(Orientation.LEFT), 96, 32);
    board.addPiece(new StraightPiece(Orientation.LEFT), 112, 32);
    board.addPiece(new StraightPiece(Orientation.UP), 96, 48);
    board.addPiece(new StraightPiece(Orientation.UP), 96, 64);
    board.addPiece(new StraightPiece(Orientation.LEFT), 16, 80);
    board.addPiece(new CrossJunctionPiece(), 96, 80);
    board.addPiece(new GeneratorPiece(), 48, 80);
    board.addPiece(new StraightPiece(Orientation.LEFT), 64, 80);
    board.addPiece(new StraightPiece(Orientation.LEFT), 80, 80);
    board.addPiece(new CurvePiece(Orientation.RIGHT), 32, 80);
    board.addPiece(new StraightPiece(Orientation.LEFT), 112, 80);
    board.addPiece(new JunctionPiece(Orientation.UP), 32, 48);
    board.addPiece(new JunctionPiece(Orientation.RIGHT), 48, 48);
    board.addPiece(new JunctionPiece(Orientation.LEFT), 16, 48);
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

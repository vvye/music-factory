class Board {

    rows;
    cols;
    cellSize;
    pieces;

    constructor(rows, cols, cellSize) {
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.pieces = [];
        this.initPieces();
    }

    initPieces() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.addPieceRowCol(new EmptyPiece(), row, col);
            }
        }
    }

    width() {
        return this.cols * this.cellSize;
    }

    height() {
        return this.rows * this.cellSize;
    }

    addPiece(module, x, y) {
        let row = int(y / this.cellSize);
        let col = int(x / this.cellSize);
        if (row < this.rows && col < this.cols) {
            this.addPieceRowCol(module, row, col);
        }
    }

    addPieceRowCol(module, row, col) {
        this.pieces[row * this.cols + col] = module;
        module.pos.x = col * this.cellSize;
        module.pos.y = row * this.cellSize;
    }

    pieceAt(x, y) {
        let row = int(y / this.cellSize);
        let col = int(x / this.cellSize);
        return this.pieces[row * this.cols + col];
    }
}

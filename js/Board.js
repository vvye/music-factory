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

    addPiece(piece, x, y) {
        let row = int(y / this.cellSize);
        let col = int(x / this.cellSize);
        if (row < this.rows && col < this.cols) {
            this.addPieceRowCol(piece, row, col);
        }
    }

    addPieceRowCol(piece, row, col) {
        this.pieces[row * this.cols + col] = piece;
        piece.pos.x = col * this.cellSize;
        piece.pos.y = row * this.cellSize;
    }

    pieceAt(x, y) {
        let row = int(y / this.cellSize);
        let col = int(x / this.cellSize);
        return this.pieces[row * this.cols + col];
    }

    representation() {
        let repr = '';
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                let piece = this.pieces[row * this.cols + col];
                repr += piece.constructor.code + (piece.instrument ?? piece.orientation ?? '');
            }
        }
        return repr;
    }

    initFromRepresentation(repr) {
        if (!repr || trim(repr) === '') {
            return;
        }

        try {
            this.pieces = [];
            let i = 0;
            for (let row = 0; row < this.rows; row++) {
                for (let col = 0; col < this.cols; col++) {
                    let piece;
                    let orientation;
                    let instrument;
                    let char = repr[i];
                    if (!char) {
                        piece = new EmptyPiece();
                    } else {
                        switch (char) {
                            case EmptyPiece.code:
                                piece = new EmptyPiece();
                                i++;
                                break;
                            case CrossJunctionPiece.code:
                                piece = new CrossJunctionPiece();
                                i++;
                                break;
                            case CurvePiece.code:
                                orientation = (repr[i + 1]) ?? 0;
                                piece = new CurvePiece(orientation);
                                i += 2;
                                break;
                            case EndPiece.code:
                                orientation = int(repr[i + 1]) ?? 0;
                                piece = new EndPiece(orientation);
                                i += 2;
                                break;
                            case GeneratorPiece.code:
                                orientation = int(repr[i + 1]) ?? 0;
                                piece = new GeneratorPiece(orientation);
                                i += 2;
                                break;
                            case JunctionPiece.code:
                                orientation = int(repr[i + 1]) ?? 0;
                                piece = new JunctionPiece(orientation);
                                i += 2;
                                break;
                            case StraightPiece.code:
                                orientation = int(repr[i + 1]) ?? 0;
                                piece = new StraightPiece(orientation);
                                i += 2;
                                break;
                            case SoundPiece.code:
                                instrument = int(repr[i + 1]) ?? 0;
                                piece = new SoundPiece(instrument);
                                i += 2;
                                break;
                        }
                    }
                    this.addPieceRowCol(piece, row, col);
                }
            }
        } catch (error) {
            this.initPieces();
        }
    }

}

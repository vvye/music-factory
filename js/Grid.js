class Grid {

    rows;
    cols;
    cellSize;
    grid;

    constructor(rows, cols, cellSize) {
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;

        this.grid = [];
        for (let row = 0; row < this.rows; row++) {
            this.grid[row] = []
            for (let col = 0; col < this.cols; col++) {
                this.grid[row][col] = null;
            }
        }
    }

    width() {
        return this.cols * this.cellSize;
    }

    height() {
        return this.rows * this.cellSize;
    }

    addModule(module) {
        let row = int(module.pos.y / this.cellSize);
        let col = int(module.pos.x / this.cellSize);
        this.grid[row][col] = module;
    }

    moduleAt(x, y) {
        let row = int(y / this.cellSize);
        let col = int(x / this.cellSize);
        return this.grid[row][col];
    }

}

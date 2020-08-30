class ModuleGrid {

    rows;
    cols;
    cellSize;
    modules;

    constructor(rows, cols, cellSize) {
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.modules = [];
        this.initModules();
    }

    initModules() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.addModuleRowCol(new EmptyModule(), row, col);
            }
        }
    }

    width() {
        return this.cols * this.cellSize;
    }

    height() {
        return this.rows * this.cellSize;
    }

    addModule(module, x, y) {
        let row = int(y / this.cellSize);
        let col = int(x / this.cellSize);
        this.addModuleRowCol(module, row, col);
    }

    addModuleRowCol(module, row, col) {
        this.modules[row * this.cols + col] = module;
        module.pos.x = col * this.cellSize;
        module.pos.y = row * this.cellSize;
    }

    moduleAt(x, y) {
        let row = int(y / this.cellSize);
        let col = int(x / this.cellSize);
        return this.modules[row * this.cols + col];
    }
}

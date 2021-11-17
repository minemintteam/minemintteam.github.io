class TileSet {
    constructor(config) {
        this.name = config[0];
        this.image = config[1];
        this.tileSizeX = config[2];
        this.tileSizeY = config[3];
        this.tileRowCount = config[4];
        this.tileColumnCount = config[5];
    }

    getTile(tileIndex) {
        return {
            x: (tileIndex % this.tileColumnCount) * this.tileSizeX,
            y: Math.floor(tileIndex / this.tileColumnCount) * this.tileSizeY,
            width: this.tileSizeX,
            height: this.tileSizeY
        };
    }

    getTileIndex(x, y) {
        return Math.floor(y / this.tileSizeY) * this.tileColumnCount + Math.floor(x / this.tileSizeX);
    }

    getImage() {
        return this.image;
    }

    getName() {
        return this.name;
    }
}

export default TileSet;
class TileSet {
    constructor(name, image, tileSizeX, tileSizeY, tileRowCount, tileColumnCount) {
        this.name = name;
        this.image = image;
        this.tileSizeX = tileSizeX;
        this.tileSizeY = tileSizeY;
        this.tileRowCount = tileRowCount;
        this.tileColumnCount = tileColumnCount;
    }

    getTile(tileIndex) {
        return {
            x: (tileIndex % this.tileColumnCount[1]) * this.tileSizeX,
            y: Math.floor(tileIndex / this.tileRowCount[1]) * this.tileSizeY,
            width: this.tileSizeX,
            height: this.tileSizeY
        };
    }

    getTileIndex(x, y) {
        return Math.floor(y / this.tileSizeY) * this.tileColumnCount[1] + Math.floor(x / this.tileSizeX);
    }

    getImage() {
        return this.image;
    }

    getName() {
        return this.name;
    }
}

export default TileSet;
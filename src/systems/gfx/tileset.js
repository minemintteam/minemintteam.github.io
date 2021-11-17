class TileSet {
    constructor(name, image, tileSizeX, tileSizeY, tileColumnCount) {
        this.name = name;
        this.image = image;
        this.tileSizeX = tileSizeX;
        this.tileSizeY = tileSizeY;
        this.tileColumnCount = tileColumnCount;
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
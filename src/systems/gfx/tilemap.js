import TileSet from './tileset.js';

class TileMap extends TileSet{
    constructor(name, image, tileSizeX, tileSizeY, tileRowCount, tileColumnCount, gfx) {
        super(name, image, tileSizeX, tileSizeY, tileColumnCount);

        this.name = name;
        this.image = image;
        this.tileSizeX = tileSizeX;
        this.tileSizeY = tileSizeY;
        this.tileRowCount = tileRowCount;
        this.tileColumnCount = tileColumnCount;

        this.canvas = gfx.getCanvas();
        this.ctx = gfx.getContext();
    }

    draw() {
        let x = 9; 
        let y = 9;

        var xX = 0;
        var xY = 0;

        var i; 
        var ii; 
        var word = "";

        //nested loops 
        for(i = 0; i <= this.tileRowCount; i++) {
            for(ii = 0; ii <= this.tileColumnCount; ii++) {
                word = word + " [" + xX + "," + xY + "] ";
                xX++;
            }
            xX = 0; 
            xY++;
            word = word + "\n";
        }

        console.log(word);
    }

}

export default TileMap;
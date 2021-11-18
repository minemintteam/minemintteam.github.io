import TileSet from '../../systems/gfx/tileset.js';

class TileMap extends TileSet{
    constructor(name, image, tileSizeX, tileSizeY, tileRowCount, tileColumnCount, grid_conf, gfx) {
        super(name, image, tileSizeX, tileSizeY, tileColumnCount);

        this.name = name;
        this.image = new Image();
        this.image.src = image;
        this.tileSizeX = tileSizeX;
        this.tileSizeY = tileSizeY;
        this.tileRowCount = tileRowCount;
        this.tileColumnCount = tileColumnCount;
        this.grid_conf = grid_conf;

        this.canvas = gfx.getCanvas();
        this.ctx = gfx.getContext();
    }

    draw() {
        this.layer_one();

        if(this.grid_conf == true) {
            this.grid();
        }
    }

    layer_one() {
        var xX = 0;
        var xY = 0;

        var i; 
        var ii; 
      
        for(i = 0; i <= this.tileRowCount; i++) {
            for(ii = 0; ii <= this.tileColumnCount; ii++) {
                this.ctx.drawImage(this.image, 22*this.tileSizeX, 3*this.tileSizeY, this.tileSizeX, this.tileSizeY, xX, xY, this.tileSizeX, this.tileSizeY);
                xX = xX + 32;
            }
            xX = 0;
            xY = xY + 32; 
        }
    }

    grid() {
        var xX = 32;
        var xY = 32;

        var i; 
        var ii; 

        this.ctx.strokeStyle = "gray";
        this.ctx.beginPath();       
        for(i = 0; i <= this.tileRowCount; i++) {
            for(ii = 0; ii <= this.tileColumnCount; ii++) {
                this.ctx.moveTo(0, xX);
                this.ctx.lineTo((this.tileColumnCount + 1)*this.tileSizeX, xX);
                xX = xX + 32;
            }
            xX = 32; 
        }

        for(i = 0; i <= this.tileRowCount; i++) {
            for(ii = 0; ii <= this.tileColumnCount; ii++) {
                this.ctx.moveTo(xY, 0);
                this.ctx.lineTo(xY, (this.tileRowCount + 1)*this.tileSizeY);
                xY = xY + 32;
            }
            xY = 32; 
        }
        this.ctx.stroke();
    }

}

export default TileMap;
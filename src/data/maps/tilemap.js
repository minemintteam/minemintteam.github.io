import TileSet from '../../systems/gfx/tileset.js';

class TileMap extends TileSet{
    constructor(name, image, tileSizeX, tileSizeY, tileRowCount, tileColumnCount, locX, locY, grid_conf, map, gfx) {
        super(name, image, tileSizeX, tileSizeY, tileRowCount, tileColumnCount);

        this.name = name;
        this.image = new Image();
        this.image.src = image;
        this.tileSizeX = tileSizeX;
        this.tileSizeY = tileSizeY;
        this.tileRowCount = tileRowCount;
        this.tileColumnCount = tileColumnCount;
        this.locX = locX;
        this.locY = locY;
        this.grid_conf = grid_conf;

        this.map = map;

        this.bottom = this.map.layers[0].data;
        this.mid = this.map.layers[1].data;
        this.midtop = this.map.layers[2].data;
        this.top = this.map;

        this.canvas = gfx.getCanvas();
        this.ctx = gfx.getContext();
    }

    drawBottom() {
        this.bottom_layer();
        this.mid_layer();
    }

    drawTop() {
        this.mid_top_layer();
        //this.top_layer();
        if(this.grid_conf == true) {
            this.grid();
        }
    }

    bottom_layer() {
        var xX = this.locX;
        var xY = this.locY;

        var i; 
        var ii; 

        var terrain_index = 0;

        for(i = 0; i <= this.tileRowCount[0]; i++) {
            for(ii = 0; ii <= this.tileColumnCount[0]; ii++) {
                this.ctx.drawImage(this.image, this.getTile(this.bottom[terrain_index] - 1).x, this.getTile(this.bottom[terrain_index] - 1).y, this.tileSizeX, this.tileSizeY, xX, xY, this.tileSizeX, this.tileSizeY);
                terrain_index++;
                xX = xX + 32;
            }
            xX = this.locX;
            xY = xY + 32; 
        }
    }

    mid_layer() {
        var xX = this.locX;
        var xY = this.locY;

        var i; 
        var ii; 

        var terrain_index = 0;

        for(i = 0; i <= this.tileRowCount[0]; i++) {
            for(ii = 0; ii <= this.tileColumnCount[0]; ii++) {
                if(this.mid[terrain_index] != 0) {
                    this.ctx.drawImage(this.image, this.getTile(this.mid[terrain_index] - 1).x, this.getTile(this.mid[terrain_index] - 1).y, this.tileSizeX, this.tileSizeY, xX, xY, this.tileSizeX, this.tileSizeY);
                }
                terrain_index++;
                xX = xX + 32;
            }
            xX = this.locX;
            xY = xY + 32; 
        }
    }

    mid_top_layer() {
        var xX = this.locX;
        var xY = this.locY;

        var i; 
        var ii; 

        var terrain_index = 0;

        for(i = 0; i <= this.tileRowCount[0]; i++) {
            for(ii = 0; ii <= this.tileColumnCount[0]; ii++) {
                if(this.midtop[terrain_index] != 0) {
                    this.ctx.drawImage(this.image, this.getTile(this.midtop[terrain_index] - 1).x, this.getTile(this.midtop[terrain_index] - 1).y, this.tileSizeX, this.tileSizeY, xX, xY, this.tileSizeX, this.tileSizeY);
                }
                terrain_index++;
                xX = xX + 32;
            }
            xX = this.locX;
            xY = xY + 32; 
        }
    }

    top_layer() {
        var xX = this.locX;
        var xY = this.locY;

        var i; 
        var ii; 

        var terrain_index = 0;

        for(i = 0; i <= this.tileRowCount[0]; i++) {
            for(ii = 0; ii <= this.tileColumnCount[0]; ii++) {
                if(this.mid[terrain_index] != 0) {
                    this.ctx.drawImage(this.image, this.getTile(this.mid[terrain_index] - 1).x, this.getTile(this.mid[terrain_index] - 1).y, this.tileSizeX, this.tileSizeY, xX, xY, this.tileSizeX, this.tileSizeY);
                }
                terrain_index++;
                xX = xX + 32;
            }
            xX = this.locX;
            xY = xY + 32; 
        }
    }

    grid() {
        var xX = this.locX;
        var xY = this.locY;

        var i; 
        var ii; 

        var terrain_index = 0;

        this.ctx.strokeStyle = "gray";
        this.ctx.beginPath();       
        for(i = 0; i <= this.tileRowCount[0] + 1; i++) {
            for(ii = 0; ii <= this.tileColumnCount[0] + 1; ii++) {
                this.ctx.moveTo(0, xX);
                this.ctx.lineTo((this.tileColumnCount[0] + 1)*this.tileSizeX, xX);
                xX = xX + 32;
            }
            xX = this.locX; 
        }

        for(i = 0; i <= this.tileRowCount[0] + 1; i++) {
            for(ii = 0; ii <= this.tileColumnCount[0] + 1; ii++) {
                this.ctx.moveTo(xY, 0);
                this.ctx.lineTo(xY, (this.tileRowCount[0] + 1)*this.tileSizeY);
                xY = xY + 32;
            }
            xY = this.locY; 
        }
        this.ctx.stroke();
    }

    gridToggle() {
        this.grid_conf = !this.grid_conf;
    }

}

export default TileMap;
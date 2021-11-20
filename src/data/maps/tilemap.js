import TileSet from '../../systems/gfx/tileset.js';

class TileMap extends TileSet{
    constructor(name, image, locX, locY, playerX, playerY, map, gfx) {
        super(name, image, map.tilewidth, map.tileheight, 32, 32);

        this.name = name;
        this.image = new Image();
        this.image.src = image;
        this.locX = locX;
        this.locY = locY;

        this.map = map;

        this.playerX = playerX;
        this.playerY = playerY;

        this.canvas = gfx.getCanvas();
        this.ctx = gfx.getContext();
    }

    drawBottom() {
        var xX = this.locX;
        var xY = this.locY;

        var i; 
        var ii;
        var iii; 

        var terrain_index = 0;
        for(i = 0; i <= 1; i++) {
            for(ii = 0; ii <= this.map.height - 1; ii++) {
                for(iii = 0; iii <= this.map.width - 1; iii++) {
                    if((xX + this.map.tilewidth * 8) > (this.playerX - this.map.tilewidth * 8) && (xX - this.map.tilewidth * 8) < (this.playerX + this.map.tilewidth * 8) && (xY + this.map.tileheight * 6) > (this.playerY - this.map.tileheight * 6) && (xY - this.map.tileheight * 6) < (this.playerY + this.map.tileheight * 6)) {
                        if(this.map.layers[i].data[terrain_index] != 0) {
                            this.ctx.drawImage(this.image, this.getTile(this.map.layers[i].data[terrain_index] - 1).x, this.getTile(this.map.layers[i].data[terrain_index] - 1).y, this.map.tilewidth, this.map.tileheight, xX, xY, this.map.tilewidth, this.map.tileheight);                        
                        }
                    }
                    terrain_index++;
                    xX = xX + this.map.tilewidth;
                }
                xX = this.locX;
                xY = xY + this.map.tileheight;
            } 
            xX = this.locX;
            xY = this.locY;
            terrain_index = 0;    
        }
    }

    drawTop() {
        var xX = this.locX;
        var xY = this.locY;

        var i; 
        var ii;

        var terrain_index = 0;
        
        for(i = 0; i <= this.map.height - 1; i++) {
            for(ii = 0; ii <= this.map.width - 1; ii++) {
                if((xX + this.map.tilewidth * 8) > (this.playerX - this.map.tilewidth * 8) && (xX - this.map.tilewidth * 8) < (this.playerX + this.map.tilewidth * 8) && (xY + this.map.tileheight * 6) > (this.playerY - this.map.tileheight * 6) && (xY - this.map.tileheight * 6) < (this.playerY + this.map.tileheight * 6)) {
                    if(this.map.layers[2].data[terrain_index] != 0) {
                        this.ctx.drawImage(this.image, this.getTile(this.map.layers[2].data[terrain_index] - 1).x, this.getTile(this.map.layers[2].data[terrain_index] - 1).y, this.map.tilewidth, this.map.tileheight, xX, xY, this.map.tilewidth, this.map.tileheight);                        
                    }
                }
                terrain_index++;
                xX = xX + this.map.tilewidth;
            }
            xX = this.locX;
            xY = xY + this.map.tileheight;
        } 
    }

    updatePlayerLocation(playerX, playerY) {
        this.playerX = playerX;
        this.playerY = playerY;
    }
}

export default TileMap;
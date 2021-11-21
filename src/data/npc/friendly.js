//2021-2022 samuel r rivera-bonilla
import SpriteSheet from "../../systems/gfx/spritesheet.js";

class Friendly extends SpriteSheet {
    constructor(name, health, mana, image, locX, locY, tileSizeX, tileSizeY, tileRowCount, tileColumnCount, tileIndexX, tileIndexY, gfx) {
        super(name, image, tileSizeX, tileSizeY, tileRowCount, tileColumnCount);

        this.image = new Image();
        this.image.src = image;
        this.health = health;
        this.mana = mana;
        this.locX = locX;
        this.locY = locY;
        this.ctx = gfx.getContext();
        this.tileSizeX = tileSizeX;
        this.tileSizeY = tileSizeY;
        this.tileRowCount = tileRowCount;
        this.tileColumnCount = tileColumnCount;

        this.tileIndexX = tileIndexX;
        this.tileIndexY = tileIndexY;

        this.originX = tileIndexX;
        this.originY = tileIndexY;

        this.moving = false;
        //setInterval(() => { this.animate(); }, 300);
    }
    
    updateFriendlyPlayer(x, y, health, mana, moving) {
        this.locX = x;
        this.locY = y;
        this.health = health;
        this.mana = mana;
        this.moving = moving;
    }

    async animate() {
        if(this.moving == true && this.tileIndexY == this.originY + 1) {
            switch(this.tileIndexX) {
                case this.originX - 1:
                    this.tileIndexX = this.originX + 1;
                    break;
                case this.originX + 1:
                    this.tileIndexX = this.originX - 1;
                    break;
                default:
                    this.tileIndexX = this.originX + 1;
                    break;
            }
        } else if(this.moving == false && this.tileIndexY == this.originY + 1) {
            this.tileIndexX = this.originX;
        }

        if(this.moving == true && this.tileIndexY == this.originY + 2) {
            switch(this.tileIndexX) {
                case this.originX - 1:
                    this.tileIndexX = this.originX + 1;
                    break;
                case this.originX + 1:
                    this.tileIndexX = this.originX - 1;
                    break;
                default:
                    this.tileIndexX = this.originX + 1;
                    break;
            }
        } else if(this.moving == false && this.tileIndexY == this.originY + 2) {
            this.tileIndexX = this.originX;
        }

        if(this.moving == true && this.tileIndexY == this.originY + 3) {
            switch(this.tileIndexX) {
                case this.originX - 1:
                    this.tileIndexX = this.originX + 1;
                    break;
                case this.originX + 1:
                    this.tileIndexX = this.originX - 1;
                    break;
                default:
                    this.tileIndexX = this.originX + 1;
                    break;
            }
        } else if(this.moving == false && this.tileIndexY == this.originY + 3) {
            this.tileIndexX = this.originX;
        }

        if(this.moving == true && this.tileIndexY == this.originY) {
            switch(this.tileIndexX) {
                case this.originX - 1:
                    this.tileIndexX = this.originX + 1;
                    break;
                case this.originX + 1:
                    this.tileIndexX = this.originX - 1;
                    break;
                default:
                    this.tileIndexX = this.originX + 1;
                    break;
            }
        } else if(this.moving == false && this.tileIndexY == this.originY) {
            this.tileIndexX = this.originX;
        }
    }

    draw() {
        this.ctx.drawImage(this.image, this.tileIndexX*this.tileSizeX, this.tileIndexY*this.tileSizeY, this.tileSizeX, this.tileSizeY, this.locX, this.locY, this.tileSizeX, this.tileSizeY);
    }
}

export default Friendly;
//2021-2022 samuel r rivera-bonilla
import SpriteSheet from "../gfx/spritesheet.js";

class Player extends SpriteSheet {
    constructor(name, health, mana, power, image, locX, locY, tileSizeX, tileSizeY, tileRowCount, tileColumnCount, tileIndexX, tileIndexY, gfx, input) {
        super(name, image, tileSizeX, tileSizeY, tileRowCount, tileColumnCount);
        this.image = new Image();
        this.image.src = image;
        this.health = health;
        this.mana = mana;
        this.power = power;
        this.locX = locX;
        this.locY = locY;
        this.ctx = gfx.getContext();
        this.input = input;
        this.tileSizeX = tileSizeX;
        this.tileSizeY = tileSizeY;
        this.tileRowCount = tileRowCount;
        this.tileColumnCount = tileColumnCount;

        this.walkSpeed = 5;

        this.tileIndexX = tileIndexX;
        this.tileIndexY = tileIndexY;

        this.originX = tileIndexX;
        this.originY = tileIndexY;

        this.moving = false;

        this.collision = [];
        this.collision_left = false;
        this.collision_right = false;
        this.collision_up = false;
        this.collision_down = false;

        //this.ctx.scale(1.0,1.0);

        setInterval(() => { this.animate(); }, 300);
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
        this.collision_right = this.collision_left = this.collision_up = this.collision_down = false;
        this.isColliding();
        if(this.input.getLeftPressed() == true && this.collision_left == false) {
            this.locX -= this.walkSpeed | 0;
            this.tileIndexY = this.originY + 1;
        }
        if(this.input.getRightPressed() == true && this.collision_right == false) {
            this.locX += this.walkSpeed | 0;
            this.tileIndexY = this.originY + 2;
        }
        if(this.input.getUpPressed() == true && this.collision_up == false) {
            this.locY -= this.walkSpeed | 0;
            this.tileIndexY = this.originY + 3;
        }
        if(this.input.getDownPressed() == true && this.collision_down == false) {
            this.locY += this.walkSpeed | 0;
            this.tileIndexY = this.originY;
        }
        if(this.input.getLeftPressed() == true || this.input.getRightPressed() == true || this.input.getUpPressed() == true || this.input.getDownPressed() == true) {
            this.moving = true;
        } else {
            this.moving = false;
        }
        this.ctx.drawImage(this.image, this.tileIndexX*this.tileSizeX, this.tileIndexY*this.tileSizeY, this.tileSizeX, this.tileSizeY, this.locX, this.locY, this.tileSizeX, this.tileSizeY);
    }

    getMoving() {
        return this.moving;
    }

    getLocation() {
        return { x: this.locX, y: this.locY };
    }
    getHealth() {
        return this.health;
    }
    getMana() {
        return this.mana;
    }
    heal(x) {
        if(this.health < 100) {
            this.health += x;
            if(this.health > 100) {
                this.health = 100;
            }
        }
    }
    damage(x) {
        if(this.health > 0) {
            this.health -= x;
            if(this.health < 0) {
                this.health = 0;
            }
        }
    }
    manaRegen(x) {
        if(this.mana < 100) {
            this.mana += x;
            if(this.mana > 100) {
                this.mana = 100;
            }
        }
    }

    manaSpend(x) {
        if(this.mana > 0) {
            this.mana -= x;
            if(this.mana < 0) {
                this.mana = 0;
            }
        }
    }

    isColliding() {
        var i;
        for(i = 0; i < this.collision.length; i++) {
            if(this.locX < this.collision[i].x + this.collision[i].width && this.locX + this.tileSizeX > this.collision[i].x && this.locY < this.collision[i].y + this.collision[i].height && this.locY + this.tileSizeY > this.collision[i].y) {
                if(this.locX + this.tileSizeX  < this.collision[i].x + this.collision[i].width) {
                    this.collision_right = true;
                }
                if(this.locX > this.collision[i].x) {
                    this.collision_left = true;
                } 
                if(this.locY + this.tileSizeY < this.collision[i].y + this.collision[i].height) {
                    this.collision_down = true;
                } 
                if(this.locY > this.collision[i].y) {
                    this.collision_up = true;
                } 
            } 
        }
        return false;
    }
    
    setStart(x, y, collision) {
        this.locX = x;
        this.locY = y;
        this.collision = collision;
        //console.log(this.collision);
    }
}

export default Player;

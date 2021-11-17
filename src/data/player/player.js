//2021-2022 samuel r rivera-bonilla
import SpriteSheet from "../../systems/gfx/spritesheet.js";

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

        this.walkSpeed = 2.5;
        this.runningSpeed = 6;

        this.tileIndexX = tileIndexX;
        this.tileIndexY = tileIndexY;

        this.originX = tileIndexX;
        this.originY = tileIndexY;

        this.moving = false;

        setInterval(() => { this.animate(); }, 300);
    }

    async animate() {
        if(this.moving == true && this.tileIndexY == 1) {
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
        } else if(this.moving == false && this.tileIndexY == 1) {
            this.tileIndexX = this.originX;
        }

        if(this.moving == true && this.tileIndexY == 2) {
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
        } else if(this.moving == false && this.tileIndexY == 2) {
            this.tileIndexX = this.originX;
        }

        if(this.moving == true && this.tileIndexY == 3) {
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
        } else if(this.moving == false && this.tileIndexY == 3) {
            this.tileIndexX = this.originX;
        }

        if(this.moving == true && this.tileIndexY == 0) {
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
        } else if(this.moving == false && this.tileIndexY == 0) {
            this.tileIndexX = this.originX;
        }
    }

    draw() {
        if(this.input.getLeftPressed() == true) {
            if(this.input.getSpacePressed() == true) {
                this.locX -= this.runningSpeed;
            } else {
                this.locX -= this.walkSpeed;
            }
            this.tileIndexY = 1;
        }
        if(this.input.getRightPressed() == true) {
            if(this.input.getSpacePressed() == true) {
                this.locX += this.runningSpeed;
            } else {
                this.locX += this.walkSpeed;
            }
            this.tileIndexY = 2;
        }
        if(this.input.getUpPressed() == true) {
            if(this.input.getSpacePressed() == true) {
                this.locY -= this.runningSpeed;
            } else {
                this.locY -= this.walkSpeed;
            }
            this.tileIndexY = 3;
        }
        if(this.input.getDownPressed() == true) {
            if(this.input.getSpacePressed() == true) {
                this.locY += this.runningSpeed;
            } else {
                this.locY += this.walkSpeed;
            }
            this.tileIndexY = 0;
        }
        if(this.input.getLeftPressed() == true || this.input.getRightPressed() == true || this.input.getUpPressed() == true || this.input.getDownPressed() == true) {
            this.moving = true;
        } else {
            this.moving = false;
        }
        
        this.ctx.drawImage(this.image, this.tileIndexX*this.tileSizeX, this.tileIndexY*this.tileSizeY, this.tileSizeX, this.tileSizeY, this.locX, this.locY, this.tileSizeX, this.tileSizeY);
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
}

export default Player;

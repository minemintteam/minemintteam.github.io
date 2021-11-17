//2021-2022 samuel r rivera-bonilla
import SpriteSheet from "../../systems/gfx/spritesheet.js";

class Player extends SpriteSheet {
    constructor(name, health, mana, power, image, locX, locY, tileSizeX, tileSizeY, tileRowCount, tileColumnCount, tileIndexX, tileIndexY, ctx, input) {
        super(name, image, tileSizeX, tileSizeY, tileRowCount, tileColumnCount);
        this.image = new Image();
        this.image.src = image;
        this.health = health;
        this.mana = mana;
        this.power = power;
        this.locX = locX;
        this.locY = locY;
        this.ctx = ctx;
        this.input = input;
        this.tileSizeX = tileSizeX;
        this.tileSizeY = tileSizeY;
        this.tileRowCount = tileRowCount;
        this.tileColumnCount = tileColumnCount;
        this.walkSpeed = 2.5;
        this.runningSpeed = 6;

        this.tileIndexX = tileIndexX;
        this.tileIndexY = tileIndexY;
    }

    draw() {
        if(this.input.getLeftPressed() == true) {
            if(this.input.getSpacePressed() == true) {
                this.locX -= this.runningSpeed;
            } else {
                this.locX -= this.walkSpeed;
            }
        }
        if(this.input.getRightPressed() == true) {
            if(this.input.getSpacePressed() == true) {
                this.locX += this.runningSpeed;
            } else {
                this.locX += this.walkSpeed;
            }
        }
        if(this.input.getUpPressed() == true) {
            if(this.input.getSpacePressed() == true) {
                this.locY -= this.runningSpeed;
            } else {
                this.locY -= this.walkSpeed;
            }
        }
        if(this.input.getDownPressed() == true) {
            if(this.input.getSpacePressed() == true) {
                this.locY += this.runningSpeed;
            } else {
                this.locY += this.walkSpeed;
            }
        }

        this.ctx.drawImage(this.image, this.getTile(this.getTileIndex(this.tileIndexX, this.tileIndexY)).x, this.getTile(this.getTileIndex(this.tileIndexX, this.tileIndexY)).y, this.getTile(this.getTileIndex(this.tileIndexX, this.tileIndexY)).width, this.getTile(this.getTileIndex(this.tileIndexX, this.tileIndexY)).height, this.locX, this.locY, this.getTile(this.getTileIndex(this.tileIndexX, this.tileIndexY)).width, this.getTile(this.getTileIndex(this.tileIndexX, this.tileIndexY)).height);
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
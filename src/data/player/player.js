//2021-2022 samuel r rivera-bonilla
import CharaterSprite from "../../systems/gfx/charactersprite.js";

class Player extends CharaterSprite {
    constructor(config, config_sprite) {
        super(config_sprite, config[1], config[2]);
        this.name = config[0];
        this.x = config[1];
        this.y = config[2];
        this.health = config[3];
        this.mana = config[4];
    }
    
    getLocation() {
        return { x: this.x, y: this.y };
    }
    getHealth() {
        return this.health;
    }
    getMana() {
        return this.mana;
    }
    move(xX, yY, dir) {
        this.x = xX;
        this.y = yY;
        this.update(this.x, this.y, dir);
    }
    heal(x) {
        if(!this.health == 100) {
            this.health += x;
            if(this.health > 100) {
                this.health = 100;
            }
        }
    }
    damage(x) {
        if(!this.health == 0) {
            this.health -= x;
            if(this.health < 0) {
                this.health = 0;
            }
        }
    }
    manaRegen(x) {
        this.mana += x;
    }
    manaSpend(x) {
        this.mana -= x;
    }
}

export default Player;
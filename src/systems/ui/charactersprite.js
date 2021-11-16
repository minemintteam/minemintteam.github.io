class CharaterSprite {
    constructor(config, lX, lY) {

        this.canvas = config[0].getCanvas();
        this.ctx = config[0].getContext();
        this.image = new Image();
        this.image.src = config[1];
        this.frameWidth = 32;
        this.frameHeight = 32;
        this.originX = config[3];
        this.originY = config[2];
        this.ogX = config[3];
        this.ogY = config[2];
        this.locX = lX;
        this.locY = lY;

        this.dir = 0;

        setInterval(() => { this.animate() }, 300);

    }

    draw() {
        this.ctx.drawImage(this.image, this.originX*this.frameWidth, this.originY*this.frameHeight, this.frameWidth, this.frameHeight, this.locX, this.locY, this.frameWidth, this.frameHeight);
    }

    update(x,y,direction) {
        this.locX = x;
        this.locY = y;
        this.originY = direction;
    }

    async animate() {
        switch(this.originX) { // down
            case (this.ogX):
                this.originX = this.ogX + 2;
                break;
            case (this.ogX + 2):
                this.originX = this.ogX;
                break;
        }
    }
}

export default CharaterSprite;
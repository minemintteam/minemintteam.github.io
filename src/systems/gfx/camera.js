class Camera {
    constructor(player, width, height, gfx) {
        this.x = player.getLocation().x;
        this.y = player.getLocation().y;
        this.width = width;
        this.height = height;
        this.ctx = gfx.getContext();

        this.lastX = this.x;
        this.lastY = this.y;
    }

    update(x,y) {
        this.x = x;
        this.y = y;
        if(this.x != this.lastX) {
            if(this.x > this.lastX) {
                var diff = this.x - this.lastX;
                this.ctx.translate(-diff|0, 0);
            } else if(this.x < this.lastX) {
                var diff = this.lastX - this.x;
                this.ctx.translate(diff|0, 0);
            }
        }
        if(this.y != this.lastY) {
            if(this.y > this.lastY) {
                var diff = this.y - this.lastY;
                this.ctx.translate(0, -diff|0);
            } else if(this.y < this.lastY) {
                var diff = this.lastY - this.y;
                this.ctx.translate(0, diff|0);
            }
        }
        this.lastX = this.x;
        this.lastY = this.y;
    }

    getLocation() {
        return {x: this.x, y: this.y};
    }
}

export default Camera;
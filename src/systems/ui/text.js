class Text {
    constructor(x, y, color, gfx) {
        this.x = x;
        this.y = y;
        this.color = color;

        this.canvas = gfx.getCanvas();
        this.ctx = gfx.getContext();
    }

    draw(text) {
        this.ctx.fillStyle = this.color;
        this.ctx.font = "20px Roboto";
        var text_width = this.ctx.measureText(text).width;
        var text_height = 20;
        this.ctx.fillText(text, this.x - (text_width / 2), this.y - (text_height / 2));
    }
}

export default Text;
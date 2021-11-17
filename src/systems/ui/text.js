class Text {
    constructor(config) {
        this.canvas = config[0].getCanvas();
        this.ctx = config[0].getContext();
        this.x = config[1];
        this.y = config[2];
        this.color = config[3];
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
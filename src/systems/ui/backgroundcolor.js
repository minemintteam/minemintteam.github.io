class BackgroundColor {
    constructor(color, opacity, gfx) {
            this.color = color;
            this.opacitiy = opacity;

            this.canvas = gfx.getCanvas();
            this.ctx = gfx.getContext();
    }

    setOpacity(opacity) {
        this.opacity = opacity;
    }

    setColor(color) {
        this.color = color;
    }

    drawColor()  {
        this.ctx.fillStyle = this.color;
        this.ctx.globalAlpha = this.opacitiy;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.globalAlpha = 1.0;
    }
    
}

export default BackgroundColor;
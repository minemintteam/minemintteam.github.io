class Background {
    constructor(config) {
        if(config.length == 6) {
            this.canvas = config[0].getCanvas();
            this.ctx = config[0].getContext();
            this.image = config[1];
            this.x = config[2];
            this.y = config[3];
            this.width = config[4];
            this.height = config[5];
        }   else if(config.length == 3) {
            this.canvas = config[0].getCanvas();
            this.ctx = config[0].getContext();
            this.color = config[1];
            this.opacitiy = config[2];
        }   
    }

    drawImage() {
        //var image = new Image();
        //image.src = image_X;
        //this.ctx.drawImage(image, x, y);
    }

    drawColor()  {
        this.ctx.fillStyle = this.color;
        this.ctx.globalAlpha = this.opacitiy;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.globalAlpha = 1.0;
    }
    
}

export default Background;
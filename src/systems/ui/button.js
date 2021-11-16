class Button  {
    constructor(config) {
        this.canvas = config[0].getCanvas();
        this.ctx = config[0].getContext();
        this.input = config[1];
        this.text = config[2];
        this.x = config[3];
        this.y = config[4];
        this.background_color = config[5];
        this.border_color = config[6];
        this.text_color = config[7];
        this.background_dark_color = config[8];
        this.callback = config[9];

        this.count = 0;
    }

    draw() {
        if(this.isPressed() == true) {
            this.count += 1;
            if(this.count == 1) {
                this.callback();
            }
            this.text_width = this.ctx.measureText(this.text).width;
            this.text_height = 20;
            this.roundRectBackground(this.x - ((this.text_width + 20) / 2), this.y - (this.text_height + 35 / 2), this.ctx.measureText(this.text).width + 20, this.text_height + 20, 15, this.background_dark_color);
            this.ctx.shadowColor = "#424242";
            this.ctx.shadowBlur = 20;
            this.ctx.shadowOffsetX = 3;
            this.ctx.shadowOffsetY = 3;
            this.roundRectBorder(this.x - ((this.text_width + 20) / 2), this.y - (this.text_height + 35 / 2), this.ctx.measureText(this.text).width + 20, this.text_height + 20, 15, this.border_color);
            this.ctx.fillStyle = this.text_color;
            this.ctx.font = "20px Roboto";
            this.ctx.fillText(this.text, this.x - (this.text_width / 2), this.y - (this.text_height / 2));
        } else {
            this.count = 0;
            this.text_width = this.ctx.measureText(this.text).width;
            this.text_height = 20;
            this.roundRectBackground(this.x - ((this.text_width + 20) / 2), this.y - (this.text_height + 35 / 2), this.ctx.measureText(this.text).width + 20, this.text_height + 20, 15, this.background_color);
            this.ctx.shadowColor = "#424242";
            this.ctx.shadowBlur = 20;
            this.ctx.shadowOffsetX = 3;
            this.ctx.shadowOffsetY = 3;
            this.roundRectBorder(this.x - ((this.text_width + 20) / 2), this.y - (this.text_height + 35 / 2), this.ctx.measureText(this.text).width + 20, this.text_height + 20, 15, this.border_color);
            this.ctx.fillStyle = this.text_color;
            this.ctx.font = "20px Roboto";
            this.ctx.fillText(this.text, this.x - (this.text_width / 2), this.y - (this.text_height / 2));
        }

        //top left x = (px - ((text_width + 20) / 2))  //top left y = (py - (text_height + 35 / 2))
        //bottom right x = (px + ((text_width + 20) / 2)) //bottom right y = (py - (text_height - 45 / 2)) 
    }    

    roundRectBorder(x, y, w, h, radius, color) {
        var r = x + w;
        var b = y + h;
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.moveTo(x+radius, y);
        this.ctx.lineTo(r-radius, y);
        this.ctx.quadraticCurveTo(r, y, r, y+radius);
        this.ctx.lineTo(r, y+h-radius);
        this.ctx.quadraticCurveTo(r, b, r-radius, b);
        this.ctx.lineTo(x+radius, b);
        this.ctx.quadraticCurveTo(x, b, x, b-radius);
        this.ctx.lineTo(x, y+radius);
        this.ctx.quadraticCurveTo(x, y, x+radius, y);
        this.ctx.stroke();
    }

    roundRectBackground(x, y, w, h, radius, color) {
        var r = x + w;
        var b = y + h;
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.moveTo(x+radius, y);
        this.ctx.lineTo(r-radius, y);
        this.ctx.quadraticCurveTo(r, y, r, y+radius);
        this.ctx.lineTo(r, y+h-radius);
        this.ctx.quadraticCurveTo(r, b, r-radius, b);
        this.ctx.lineTo(x+radius, b);
        this.ctx.quadraticCurveTo(x, b, x, b-radius);
        this.ctx.lineTo(x, y+radius);
        this.ctx.quadraticCurveTo(x, y, x+radius, y);
        this.ctx.fill();
    }

    isPressed() {
        if(this.input.getMouseClicked() == true) {
            if(this.input.getMouseX() > this.x - ((this.text_width + 20) / 2) && this.input.getMouseX() < this.x + ((this.text_width + 20) / 2) && this.input.getMouseY() > this.y - (this.text_height + 35 / 2) && this.input.getMouseY() < this.y + (this.text_height - 35 / 2)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

export default Button;
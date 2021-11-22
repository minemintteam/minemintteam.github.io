class Button  {
    constructor(text, x, y, text_color, background_color, background_dark_color, border_color, gfx, input, callback) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.text_color = text_color;
        this.background_color = background_color;
        this.background_dark_color = background_dark_color;
        this.border_color = border_color;
        
        this.canvas = gfx.getCanvas();
        this.ctx = gfx.getContext();
        this.input = input;

        this.callback = callback;

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
            this.roundRectBorder(this.x - ((this.text_width + 20) / 2), this.y - (this.text_height + 35 / 2), this.ctx.measureText(this.text).width + 20, this.text_height + 20, 15, this.border_color);
            this.ctx.fillStyle = this.text_color;
            this.ctx.font = "20px Roboto";
            this.ctx.fillText(this.text, this.x - (this.text_width / 2), this.y - (this.text_height / 2));
        } else {
            this.count = 0;
            this.text_width = this.ctx.measureText(this.text).width;
            this.text_height = 20;
            this.roundRectBackground(this.x - ((this.text_width + 20) / 2), this.y - (this.text_height + 35 / 2), this.ctx.measureText(this.text).width + 20, this.text_height + 20, 15, this.background_color);
            this.roundRectBorder(this.x - ((this.text_width + 20) / 2), this.y - (this.text_height + 35 / 2), this.ctx.measureText(this.text).width + 20, this.text_height + 20, 15, this.border_color);
            this.ctx.fillStyle = this.text_color;
            this.ctx.font = "20px Roboto";
            this.ctx.fillText(this.text, this.x - (this.text_width / 2), this.y - (this.text_height / 2));
        }
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
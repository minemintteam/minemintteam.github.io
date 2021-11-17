//2021-2022 samuel r rivera-bonilla
class Graphics {
    constructor(canvas, x, y) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
    }

    getContext() {
        return this.ctx;
    }

    getCanvas() {
        return this.canvas;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export default Graphics;
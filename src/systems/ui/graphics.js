//2021-2022 samuel r rivera-bonilla
class Graphics {
    constructor(config) {
        this.canvas = config[0];
        this.ctx = config[0].getContext("2d");
        this.x = config[1];
        this.y = config[2];
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
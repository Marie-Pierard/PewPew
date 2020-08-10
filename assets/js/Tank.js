class Tank {
    constructor(ctx) {
        this.x = 400;
        this.y = 400;
        this.width = 150;
        this.heigth = 100;
        this.ctx = ctx;
    }
draw() {
    this.ctx.fillStyle = "rgb(200,0,0)";
    this.ctx.fillRect (this.x, this.y, this.width, this.heigth);
}
}
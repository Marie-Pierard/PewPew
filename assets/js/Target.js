class Target {
    constructor(ctx) {
        this.x = Math.floor(Math.random()*500) + 100;
        this.y = Math.floor(Math.random()*250) + 100;
        this.r = 25;
        this.ctx = ctx;
    }
draw() {
    this.ctx.fillStyle = "blue";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);/*dernieres variables ne changeront pas puisque ca reste un cercle*/
    this.ctx.fill();
}
}
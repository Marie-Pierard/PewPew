class Projectile {
    constructor(ctx, x, y) {
        this.x = x;
        this.y = y;
        this.r = 5;
        this.ctx = ctx;
    }
draw() {
    this.ctx.fillStyle = "grey";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);/*dernieres variables ne changeront pas puisque ca reste un cercle*/
    this.ctx.fill();
}
}


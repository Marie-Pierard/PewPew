//https://www.kirupa.com/canvas/moving_shapes_canvas_keyboard.htm
(() => {
const canvas = document.getElementById("canvas");
canvas.width=750;
canvas.height=500;
const ctx = canvas.getContext("2d");

const tank = new Tank(ctx);
let target = new Target(ctx);
let projectile = null;
let targetReached = 0;


  
function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
            // left key pressed
        
            if(tank.x > 0) {
                tank.x -= 5;
            } else {
                tank.x = 0
            }
            break;
        case 39:
            // right key pressed
            
            if(tank.x < canvas.width - tank.width) {
                tank.x += 5;
            } else {
                tank.x = canvas.width - tank.width;
            }
            break; 

        case 32: 
            //Space pressed

            if(projectile === null) {
                projectile = new Projectile (ctx, tank.x + (tank.width/2), tank.y);
            }
            break;
    }   
    
}       
function draw() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    tank.draw();
    target.draw();
   if(projectile != null) {
       projectile.y-=5;
       projectile.draw();
        
        const dx = projectile.x - target.x;
        const dy = projectile.y - target.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < projectile.r + target.r) {
            projectile = null;
            target = new Target(ctx);
        // collision détectée !
        targetReached++;
        console.log(targetReached);
        }
        else if(projectile.y < 0) {
            projectile = null;
        }
    }
}


function gameOn() {
    window.addEventListener("keydown", moveSomething, false);
    setInterval(draw, 1000/30);
    document.getElementById("start").disabled = true;
    document.getElementById("start").blur();
}

document.getElementById("start").onclick = gameOn; //autre option: .addEventListener("click", gameOn, false);
})();
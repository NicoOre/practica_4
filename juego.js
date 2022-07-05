var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var movX = 0
var movY = 0
dibujar(ctx)

function dibujar(ctx) {
    ctx.fillStyle = "red"
    ctx.fillRect(movX, movY, 100, 100)
}


function moverDerecha() {
    if (movX != 300) {
        ctx.clearRect(movX, movY, 100, 100)
        movX += 10
        ctx.fillRect(movX, movY, 100, 100)
    }

}

function moverAbajo() {
    if (movY != 300) {
        ctx.clearRect(movX, movY, 100, 100)
        movY += 10
        ctx.fillRect(movX, movY, 100, 100)
    }
}

function moverIzquierda() {
    if (movX != 0) {
        ctx.clearRect(movX, movY, 100, 100)
        movX -= 10
        ctx.fillRect(movX, movY, 100, 100)
    }
}

function moverArriba() {
    if (movY != 0) {
        ctx.clearRect(movX, movY, 100, 100)
        movY -= 10
        ctx.fillRect(movX, movY, 100, 100)
    }
}

window.onload = function(){
    window.onkeydown = function(tecla){
        if(tecla.keyCode == 38 || tecla.keyCode == 87){
            moverArriba()
        } else if (tecla.keyCode == 37 || tecla.keyCode == 65) {
            moverIzquierda()
        } else if (tecla.keyCode == 40 || tecla.keyCode == 83) {
            moverAbajo()
        } else if (tecla.keyCode == 39 || tecla.keyCode == 68) {
            moverDerecha()
        }
        console.log(tecla)
    }
};
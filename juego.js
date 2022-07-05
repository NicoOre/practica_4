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
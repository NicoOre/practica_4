var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var score = 0
var movX = 0
var movY = 0
dibujar(ctx)
setInterval(generarPuntos, 1000);


function dibujar(ctx) {
    ctx.fillStyle = "red"
    ctx.fillRect(movX, movY, 100, 100)
}


function moverDerecha() {
    ctx.fillStyle = "red"
    if (movX != 300) {
        ctx.clearRect(movX, movY, 100, 100)
        movX += 10
        ctx.fillRect(movX, movY, 100, 100)
    }

}

function moverAbajo() {
    ctx.fillStyle = "red"
    if (movY != 300) {
        ctx.clearRect(movX, movY, 100, 100)
        movY += 10
        ctx.fillRect(movX, movY, 100, 100)
    }
}

function moverIzquierda() {
    ctx.fillStyle = "red"
    if (movX != 0) {
        ctx.clearRect(movX, movY, 100, 100)
        movX -= 10
        ctx.fillRect(movX, movY, 100, 100)
    }
}

function moverArriba() {
    ctx.fillStyle = "red"
    if (movY != 0) { 
        ctx.clearRect(movX, movY, 100, 100)
        movY -= 10
        ctx.fillRect(movX, movY, 100, 100)
    }
}

function generarPuntos() {
    var x = Math.floor(Math.random()*400)
    var y = Math.floor(Math.random()*400)
    
    ctx.fillStyle =  "blue"
    ctx.fillRect(x, y, 10, 10)
}


window.onkeydown = function (tecla) {  
    if (tecla.keyCode == 38 || tecla.keyCode == 87) {
        moverArriba()
    } else if (tecla.keyCode == 37 || tecla.keyCode == 65) {
        moverIzquierda()
    } else if (tecla.keyCode == 40 || tecla.keyCode == 83) {
        moverAbajo()
    } else if (tecla.keyCode == 39 || tecla.keyCode == 68) {
        moverDerecha()
    }
    
}

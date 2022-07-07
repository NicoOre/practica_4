var canvas
var ctx
var posX = 0
var posY = 0
var tecla

function inicio() {
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext('2d')
    setInterval(actualizar, 1)
}

function actualizar() {
    ctx.clearRect(0, 0, 800, 400)
    dibujar()
}

window.onkeydown = function obtenerTecla(valor) {
    tecla = valor.key

    if (tecla == 'w') {
        posY -= 10
    } else if (tecla == 'a') {
        posX -= 10
    } else if (tecla == 's') {
        posY += 10
    } else if (tecla == 'd') {
        posX += 10
    }

    console.log(tecla)
}

function dibujar() {
    ctx.fillStyle = 'red'
    ctx.fillRect(posX, posY, 100, 100)
}

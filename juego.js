var canvas
var ctx
var posX = 0
var posY = 0
var tiempo
var tiempoInicial
var tf = 20
var tm = 15
var td = 10
var tecla

function facil() {
    tiempo = tf
    tiempoInicial = tiempo
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext('2d')
    document.getElementById('tiempo').innerHTML = 'Tiempo: ' + (tiempo)
    tiempo--
    setInterval(temporizador, 1000)
    setInterval(actualizar, 20)
}

function medio() {
    tiempo = tm
    tiempoInicial = tiempo
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext('2d')
    document.getElementById('tiempo').innerHTML = 'Tiempo: ' + (tiempo)
    tiempo--
    setInterval(temporizador, 1000)
    setInterval(actualizar, 1)
}

function dificil() {
    tiempo = td
    tiempoInicial = tiempo
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext('2d')
    document.getElementById('tiempo').innerHTML = 'Tiempo: ' + (tiempo)
    tiempo--
    setInterval(temporizador, 1000)
    setInterval(actualizar, 1)
}

function temporizador() {
    if (tiempo >= 0) {
        document.getElementById('tiempo').innerHTML = 'Tiempo: ' + (tiempo)
    }

    if (tiempo > -1) {
        tiempo--
    }
}

function actualizar() {

    if (tiempo > -1) {
        limpiar()
        dibujar()
    } else {
        gameOver()
    }

}

window.onkeydown = function obtenerTecla(valor) {
    tecla = valor.key

    if (posY > 0 && (tecla == 'w' || tecla == 'W' || tecla == 'ArrowUp')) {
        posY -= 10
    } else if (posX > 0 && (tecla == 'a' || tecla == 'A' || tecla == 'ArrowLeft')) {
        posX -= 10
    } else if (posY + 100 < 400 && (tecla == 's' || tecla == 'S' || tecla == 'ArrowDown')) {
        posY += 10
    } else if (posX + 100 < 800 && (tecla == 'd' || tecla == 'D' || tecla == 'ArrowRight')) {
        posX += 10
    }

    console.log(tecla)
}

function dibujar() {
    ctx.fillStyle = 'red'
    ctx.fillRect(posX, posY, 100, 100)
}

function gameOver() {
    limpiar()
    ctx.fillStyle = "rgb(250,0,0)"
    ctx.font = "100px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText("Has perdido", 400, 180);
    ctx.font = "25px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "rgb(0,0,0)"
    ctx.fillText("(Recarga la pagina para jugar de nuevo)", 400, 280);
}

function limpiar() {
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, 800, 400)
}

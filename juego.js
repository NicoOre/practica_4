var canvas
var ctx
var posX = 0
var posY = 0
var posAleatoriaX
var posAleatoriaY
var posAleatoriaX2
var posAleatoriaY2
var tiempo
var tf = 20
var tm = 15
var td = 10
var puntos = 0
var tecla

function facil() {
    tiempo = tf
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext('2d')
    document.getElementById('tiempo').innerHTML = 'Tiempo: ' + (tiempo)
    tiempo--
    posAleatoriaX = random(0, 790)
    posAleatoriaY = random(0, 390)
    posAleatoriaX2 = random(0, 790)
    posAleatoriaY2 = random(0, 390)
    setInterval(temporizador, 1000)
    setInterval(actualizar, 20)

}

function medio() {
    tiempo = tm
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext('2d')
    document.getElementById('tiempo').innerHTML = 'Tiempo: ' + (tiempo)
    tiempo--
    posAleatoriaX = random(0, 790)
    posAleatoriaY = random(0, 390)
    posAleatoriaX2 = random(0, 790)
    posAleatoriaY2 = random(0, 390)
    setInterval(temporizador, 1000)
    setInterval(actualizar, 1)
}

function dificil() {
    tiempo = td
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext('2d')
    document.getElementById('tiempo').innerHTML = 'Tiempo: ' + (tiempo)
    tiempo--
    posAleatoriaX = random(0, 790)
    posAleatoriaY = random(0, 390)
    posAleatoriaX2 = random(0, 790)
    posAleatoriaY2 = random(0, 390)
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
        dibujarPunto()
        tomarPunto()
        dibujarBuff()
        tomarBuff()
        escribirPuntos()
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
}

function dibujar() {
    ctx.fillStyle = 'red'
    ctx.fillRect(posX, posY, 100, 100)
}

function gameOver() {
    limpiar()
    ctx.font = "100px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText("Has perdido", 400, 180);
    ctx.font = "25px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText("(Recarga la pagina para jugar de nuevo)", 400, 280);
}

function limpiar() {
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, 800, 400)
}

function dibujarPunto() {
    ctx.fillStyle = "blue"
    ctx.fillRect(posAleatoriaX, posAleatoriaY, 10, 10)
}

function tomarPunto() {

    if ((posAleatoriaX >= posX && posAleatoriaX + 11 <= posX + 101) && (posAleatoriaY >= posY && posAleatoriaY + 11 <= posY + 101)) {
        posAleatoriaX = random(0, 790)
        posAleatoriaY = random(0, 390)
        ctx.fillStyle = "blue"
        ctx.fillRect(posAleatoriaX, posAleatoriaY, 10, 10)
        puntos ++
    }
}

function escribirPuntos() {
    document.getElementById("puntos").innerHTML = "Puntos: " + puntos
}

function dibujarBuff() {
    ctx.fillStyle = "black"
    ctx.fillRect(posAleatoriaX2, posAleatoriaY2, 10, 10)
}

function tomarBuff() {
    if ((posAleatoriaX2 >= posX && posAleatoriaX2 + 10 <= posX + 100) && (posAleatoriaY2 >= posY && posAleatoriaY2 + 10 <= posY + 100)) {
        posAleatoriaX2 = random(0, 790)
        posAleatoriaY2 = random(0, 390)
        ctx.fillStyle = "black"
        ctx.fillRect(posAleatoriaX2, posAleatoriaY2, 10, 10)
        tiempo += 3
        puntos--
    }
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
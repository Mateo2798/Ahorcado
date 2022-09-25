var startGame = document.getElementById("startGame");
var addWord = document.getElementById("addWord");
var saveStart = document.getElementById("saveStart");
var cancel = document.getElementById("cancel");

/*Input oculto autofocus */
var inputOculto = document.getElementById("input-oculto");

/*Contenedores */
var botonesPrincipal = document.getElementsByClassName("contenedor-botonesPrincipal");
var contenedorGame = document.getElementsByClassName("contenedor-Game");
var wrongLetter = document.getElementsByClassName("contenedor-letrasincorrectas");
var scriptContent = document.getElementById("contenedor-guiones");
var guiones = document.getElementsByClassName("line");
var letter = document.getElementsByClassName("letter");

var year = document.getElementById("year");

/*Variables del juego */
var palabraSecreta = "";
var secretWords = ["pajaro", "avion", "manzana", "elefante"];
var letrasIncorrectas = "";

function yearActual() {
    copyright = new Date();
    yearUpdate = copyright.getFullYear();

    return yearUpdate;
}

function newGame() {
    createSecretWord();

    setTimeout(function () {
        inicializarCanvas();
        addEventListener("resize", inicializarCanvas);
    }, 15);

    drawLines(palabraSecreta.length, scriptContent, "line");

    //Evento input en un input para obtener el valor de la tecla presionada
    inputOculto.oninput = (e) => {
        let letra = e.target.value.toUpperCase(); //Pasar la letra presionada a mayuscula
        let codigoAscii = letra.charCodeAt(0); //obtener el codigo ascii de la letra
        drawLetterAndCanvas(codigoAscii, letra); //enviar datos a la función
        /*borrar el contenido del input */
        inputOculto.value = "";
    }

    //Evento keydown para pcs
    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        let code = e.keyCode;
        drawLetterAndCanvas(code, letra);

    }

}

function createSecretWord() {
    var numbRandom = Math.round(Math.random() * (secretWords.length - 1));
    console.log(secretWords[numbRandom] + " " + numbRandom);

    /*Palabra elegida aleatoriamente*/
    palabraSecreta = secretWords[numbRandom].toUpperCase();

    /*Elementos de la pantalla */
    botonesPrincipal[0].style.display = "none";
    contenedorGame[0].style.display = "flex";
    inputOculto.focus();
}

function drawLines(number, content, className) {
    content.innerHTML = "";

    for (var i = 0; i < number; i++) {
        var divs = document.createElement("div");
        divs.id = i;
        divs.className = className
        content.appendChild(divs);
    }
}

//Funcion para verificar si la tecla es letra y no caracter
function keyDown(code) {
    if ((code >= 65 && code <= 90) || code == 192) {
        return true;
    } else {
        return false;
    }
}

function drawLetterAndCanvas(code, letra) {
    if (keyDown(code) && palabraSecreta.includes(letra)) {
        for (let i = 0; i < palabraSecreta.length; i++) {
            /*Draw letter on the line*/
            if (palabraSecreta[i] === letra) {
                guiones[i].innerHTML = letra.toUpperCase();
            }
        }
    } else if (keyDown(code)) {
        /* Se verifica si la letra incorrecta ya ha sido presionada */
        if (letrasIncorrectas.includes(letra.toUpperCase())) {
            letter[0].innerHTML = letrasIncorrectas;
        } else {
            letrasIncorrectas += letra.toUpperCase();
            letter[0].innerHTML = letrasIncorrectas;
        }
    }
}

startGame.addEventListener("click", newGame);
year.innerText = yearActual();
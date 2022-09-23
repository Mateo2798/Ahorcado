var startGame = document.getElementById("startGame");
var addWord = document.getElementById("addWord");
var saveStart = document.getElementById("saveStart");
var cancel = document.getElementById("cancel");

/*Contenedores */
var botonesPrincipal = document.getElementsByClassName("contenedor-botonesPrincipal");
var contenedorGame = document.getElementsByClassName("contenedor-Game");
var scriptContent = document.getElementById("contenedor-guiones");
var guiones = document.getElementsByClassName("line");

var year = document.getElementById("year");

/*Variables del juego */
var palabraSecreta = "";
var secretWords = ["pajaro", "avion", "manzana", "elefante"];

function yearActual() {
    copyright = new Date();
    yearUpdate = copyright.getFullYear();

    return yearUpdate;
}

function newGame() {
    createSecretWord();
    drawLines(palabraSecreta.length);

    document.onkeydown = (e) => {
        let letra = e.key;
        let code = e.keyCode;
        
        if(keyDown(code) && palabraSecreta.includes(letra)){
            for(let i = 0; i < palabraSecreta.length; i++){
                /*Draw letter on the line*/
                if(palabraSecreta[i] === letra){
                    guiones[i].innerHTML = letra;
                }
            }
        }else{
            
        }
    }

}

function createSecretWord() {
    var numbRandom = Math.round(Math.random() * (secretWords.length - 1));
    console.log(secretWords[numbRandom] + " " + numbRandom);

    /*Palabra elegida aleatoriamente*/
    palabraSecreta = secretWords[numbRandom];

    /*Elementos de la pantalla */
    botonesPrincipal[0].style.display = "none";
    contenedorGame[0].style.display = "flex";
}

function drawLines(number) {
    scriptContent.innerHTML = "";

    for (var i = 0; i < number; i++) {
        var divs = document.createElement("div");
        divs.id = i;
        divs.className = "line"
        scriptContent.appendChild(divs);
    }
}

function keyDown(code) {
    if ((code >= 65 && code <= 90) || code == 192) {
        return true;
    } else {
        return false;
    }
}

function drawWords(letras) {



}

startGame.addEventListener("click", newGame);
year.innerText = yearActual();
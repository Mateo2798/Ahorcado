var startGame = document.getElementById("startGame");
var addWord = document.getElementById("addWord");
var saveStart = document.getElementById("saveStart");
var cancel = document.getElementById("cancel");

/*Contenedores */
var botonesPrincipal =  document.getElementsByClassName("contenedor-botonesPrincipal");
var contenedorGame = document.getElementsByClassName("contenedor-Game");
var scriptContent = document.getElementById("contenedor-guiones");

var year = document.getElementById("year");
var secretWords = ["pajaro","avion","manzana","elefante"];

function yearActual(){
    copyright = new Date();
    yearUpdate = copyright.getFullYear();
    
    return yearUpdate;
}

function createSecretWord(){
    var numbRandom = Math.round(Math.random() * (secretWords.length -1));
    console.log(secretWords[numbRandom] + " " + numbRandom)
    
   drawLines(secretWords[numbRandom].length);

   window.onkeydown = keyDown;
   botonesPrincipal[0].style.display = "none";
   contenedorGame[0].style.display = "flex";
}

function drawLines(number){
    scriptContent.innerHTML = "";

    for(var i = 0; i < number; i++){
        var divs = document.createElement("div");
        divs.id = i;
        divs.className = "line"
        scriptContent.appendChild(divs);
    }
}

function keyDown(e){
    var code = e.keyCode;
    var letra = e.key;
    if((code >= 65 && code <= 90) | code == 192){
        return letra;
    }
    return 0;
}


startGame.addEventListener("click",createSecretWord);
year.innerText = yearActual();
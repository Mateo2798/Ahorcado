var startGame = document.getElementById("startGame");
var addWord = document.getElementById("addWord");
var saveStart = document.getElementById("saveStart");
var cancel = document.getElementById("cancel")
var year = document.getElementById("year");
var secretWords = ["pajaro","avion","manzana","elefante"];

function yearActual(){
    copyright = new Date();
    yearUpdate = copyright.getFullYear();
    
    return yearUpdate;
}

function createSecretWord(){
    var numbRandom = Math.round(Math.random() * (secretWords.length -1));
    
    return secretWords[numbRandom];
}

startGame.addEventListener("click",createSecretWord);
year.innerText = yearActual();
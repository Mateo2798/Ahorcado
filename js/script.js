var startGame = document.getElementById("startGame");
var addWord = document.getElementById("addWord");
var year = document.getElementById("year");

function yearActual(){
    copyright = new Date();
    yearUpdate = copyright.getFullYear();
    
    return yearUpdate;
}
year.innerText = yearActual();
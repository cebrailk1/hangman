// import { generate, count } from "random-words";
// let restartButton = document.getElementById("button");
// restartButton.onclick = console.log("Button pressed");
function hangoman() {}
// let randomWords = (generate())
let healthSymbol = document.querySelector("#health");
let winner = "zauberstab";
let winnerChars = winner.split("");
let array = [];
for (let i = 0; i < winnerChars.length; i++) {
  array.push("_");
}
let health2 = document.querySelector("#health2");
let restartButton2 = document.querySelector("#restartButton");
let keyPress = "H";
let result = winnerChars.filter((key) => key == keyPress);
let health = 8;
let gameWord = document.querySelector("#gameWord");
let win = document.querySelector("#win");
console.log(winnerChars);
console.log(keyPress);
console.log(result);

gameWord.textContent = array.join(" ");

const body = document.querySelector("body");

body.addEventListener("keypress", logKey);

function logKey(event) {
  for (let i = 0; i < winnerChars.length; i++) {
    if (event.key === winnerChars[i]) {
      array[i] = winnerChars[i];
      gameWord.textContent = array.join(" ");
    }
  }
  if (health == 0) {
    return "GAMEOVER";
  }

  if (!winnerChars.includes(event.key)) {
    console.log((health -= 1));
  
  }   

  if (health == 7) {
    healthSymbol.innerHTML =
      "&hearts;&hearts;&hearts;&hearts;&hearts;&hearts;&hearts;";
  }
  if (health == 6) {
    healthSymbol.innerHTML = "&hearts;&hearts;&hearts;&hearts;&hearts;&hearts;";
  }
  if (health == 5) {
    healthSymbol.innerHTML = "&hearts;&hearts;&hearts;&hearts;&hearts;";
  }
  if (health == 4) {
    healthSymbol.innerHTML = "&hearts;&hearts;&hearts;&hearts;";
  }
  if (health == 3) {
    healthSymbol.innerHTML = "&hearts;&hearts;&hearts;";
  }
  if (health == 2) {
    healthSymbol.innerHTML = "&hearts;&hearts;";
  }
  if (health == 1) {
    healthSymbol.innerHTML = "&hearts;";
  }
  if (health == 0) {
    healthSymbol.innerHTML = "&#9760;";
    healthSymbol.style.fontSize = "100px";
  }

  if (health >= 1) {
    win.textContent = "noch " + health + " Leben";
  }
  if (health < 1) {
    win.textContent = "verloren!";
  }
}
if (array.join("") == winnerChars.join("")) {
  win.textContent = "Gewonnen!";
}

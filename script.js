// import { generate, count } from "random-words";

function hangoman() {}
// let randomWords = (generate())
let winner = "telekommunikationsüberwachungsverordnung";
let winnerChars = winner.split("");
let array = [];
for (let i = 0; i < winnerChars.length; i++) {
  array.push("_");
}
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
    return "GAMEOVER"
  }

  if (!winnerChars.includes(event.key)) {
    console.log((health -= 1));
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



// leben + falsch eingetippt buchstaben anzeigen auf seite

/* 
if (keyPress == newArr[i]) {
      console.log ("0 health damage")
      return "0 health damage"
   }
   else
   console.log ("-1 health")
   return newArr[i]
   */

/*
     halloScript = document.getElementById("halloScript");
   halloScript.onclick = function () {
      console.log ("Hallo Script")
   }

   */

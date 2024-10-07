const body = document.querySelector("body");
const button = document.querySelector(".startButton");
let winnerChars = [];
let underscoreArray = [];
let result;
let keyboardArray = [];
let keyPress; //!!!!
const gameWord = document.querySelector("#gameWord");
const win = document.querySelector("#win");
const keyboard = document.querySelector("#keyboard");
const healthSymbol = document.querySelector("#health");
const winLogged = document.querySelector("#winLogged");
let underscoredArray = [];
let health = 8;
let healthCount = "&hearts;";
let skull = "&#9760;";
let totalWins = Number(loadTotalWins());
let gameOver = false;

if (saveWins !== 0) {
  saveWins(totalWins);
}

button.addEventListener("click", async function () {
  health = 8;
  let url = "https://random-word-api.herokuapp.com/word?lang=de";
  let randomWord = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      return data[0];
    });
  keyboardArray = [];
  button.textContent = "Restart";
  winnerChars = randomWord.split("");
  underscoredArray = [];
  for (let i = 0; i < winnerChars.length; i++) {
    underscoredArray.push("_");
  }
  result = winnerChars.filter((key) => key == keyPress);

  gameWord.textContent = underscoredArray.join(" ");
});

body.addEventListener("keypress", logKey);

function logKey(event) {
  if (gameOver) {
    return;
  }
  for (let i = 0; i < winnerChars.length; i++) {
    if (event.key === winnerChars[i]) {
      underscoredArray[i] = winnerChars[i];
      gameWord.textContent = underscoredArray.join(" ");
    }
  }
  if (event.key.match(/^[a-z]$/i)) {
    if (!keyboardArray.includes(event.key)) {
      keyboardArray.push(event.key);
    }

    keyboard.textContent =
      "bereits geraten: [ " + keyboardArray.sort().join(" ") + " ]";
  }
  damage(event);
  checkWin(event);
}
button.addEventListener("click", function reset() {
  health = 8;
  gameOver = false;
  healthSymbol.style.fontSize = "25px";
  healthSymbol.innerHTML = healthCount.repeat(health);
  win.textContent = "noch 8 Leben";
});

function checkWin(event) {
  if (underscoredArray.join("") === winnerChars.join("")) {
    win.textContent = "Gewonnen!";
    totalWins += 1;
    gameOver = true;
    console.log(totalWins);
    saveWins(totalWins);
    winLogged.textContent = "Your total wins: " + totalWins;
  }
  event.preventDefault();
}
function damage(event) {
  if (!winnerChars.includes(event.key)) {
    console.log((health -= 1));
  }
  if (health == 8) {
    healthSymbol.style.fontSize = "25px";
    healthSymbol.innerHTML = healthCount.repeat(health);
  }
  if (health >= 1) {
    healthSymbol.innerHTML = healthCount.repeat(health);
    win.textContent = "noch " + health + " Leben";
  } else {
    healthSymbol.innerHTML = skull.repeat(1);
    healthSymbol.style.fontSize = "100px";
    healthSymbol.style.marginTop = "65px";
    return (win.textContent = "verloren!");
  }
}

function saveWins() {
  localStorage.setItem("storagewin", totalWins);
}
function loadTotalWins() {
  return localStorage.getItem("storagewin");
}

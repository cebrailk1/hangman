const body = document.querySelector("body");
const startButton = document.querySelector(".start-button");
const gameWordDiv = document.querySelector("#game-word");
const winDiv = document.querySelector("#win");
const wrongGuessesDiv = document.querySelector("#wrong-guesses");
const healthSymbolDiv = document.querySelector("#health");
const scoreDiv = document.querySelector("#score");
let secretWord = [];
let wrongGuesses;
let gameWord;
let health = 8;
let hearts = "&hearts;";
let skull = "&#9760;";
let gameOver = false;
let totalWins = Number(loadTotalWins());
scoreDiv.textContent = "Your total wins: " + totalWins;

startButton.addEventListener("click", async function resetRound() {
  gameOver = false;
  health = 8;
  secretWord = await fetchNewWord();
  wrongGuesses = [];
  gameWord = [];
  for (let i = 0; i < secretWord.length; i++) {
    gameWord.push("_");
  }

  startButton.textContent = "Restart";
  gameWordDiv.textContent = gameWord.join(" ");
  healthSymbolDiv.style.fontSize = "25px";
  healthSymbolDiv.innerHTML = hearts.repeat(health);
  winDiv.textContent = "noch 8 Leben";
});

async function fetchNewWord() {
  return ["a", "b", "b", "a"];
  let url = "https://random-word-api.herokuapp.com/word?lang=de";
  let randomWord = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      return data[0];
    });
  return randomWord.toLowerCase().split("");
}

body.addEventListener("keypress", guessChar);

function guessChar(event) {
  let key = event.key.toLowerCase();
  if (gameOver || !key.match(/^[a-z]$/i)) {
    return;
  }
  for (let i = 0; i < secretWord.length; i++) {
    if (key === secretWord[i]) {
      gameWord[i] = secretWord[i];
    }
  }
  gameWordDiv.textContent = gameWord.join(" ");
  if (!secretWord.includes(key) && !wrongGuesses.includes(key)) {
    wrongGuesses.push(key);
    wrongGuessesDiv.textContent =
      "bereits geraten: [ " + wrongGuesses.sort().join(" ") + " ]";
  }

  damage(key);
  checkWin(event);
}

function checkWin(event) {
  if (gameWord.join("") === secretWord.join("")) {
    winDiv.textContent = "Gewonnen!";
    totalWins += 1;
    gameOver = true;
    console.log(totalWins);
    saveWins(totalWins);
    scoreDiv.textContent = "Your total wins: " + totalWins;
  }
}
function damage(key) {
  if (!secretWord.includes(key)) {
    health -= 1;
  }
  if (health == 8) {
    healthSymbolDiv.style.fontSize = "25px";
    healthSymbolDiv.innerHTML = hearts.repeat(health);
  }
  if (health >= 1) {
    healthSymbolDiv.innerHTML = hearts.repeat(health);
    winDiv.textContent = "noch " + health + " Leben";
  } else {
    healthSymbolDiv.innerHTML = skull.repeat(1);
    healthSymbolDiv.style.fontSize = "100px";
    healthSymbolDiv.style.marginTop = "65px";
    return (winDiv.textContent = "verloren!");
  }
}

function saveWins() {
  localStorage.setItem("storagewin", totalWins);
}
function loadTotalWins() {
  return localStorage.getItem("storagewin");
}

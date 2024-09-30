let button = document.querySelector(".startButton");

button.addEventListener("click", function () {
  let restartButton = document.querySelector(".startButton");
  restartButton.textContent = "Restart";
  let healthSymbol = document.querySelector("#health");
  let winner = "zauberstab";
  let winnerChars = winner.split("");
  let array = [];
  let keyboardArray = [];
  for (let i = 0; i < winnerChars.length; i++) {
    array.push("_");
  }
  let health2 = document.querySelector("#health2");
  let restartButton2 = document.querySelector("#restartButton");
  let keyPress = "H";
  let result = winnerChars.filter((key) => key == keyPress);
  let gameWord = document.querySelector("#gameWord");
  let win = document.querySelector("#win");
  let keyboard = document.querySelector("#keyboard");
  console.log(winnerChars);
  console.log(keyPress);
  console.log(result);

  gameWord.textContent = array.join(" ");

  const body = document.querySelector("body");

  let healthCount = "&hearts;";
  let skull = "&#9760;";
  let health = 8;
  if ((health = 8)) {
    healthSymbol.style.fontSize = "25px";
  }
  if (health == 8) {
    healthSymbol.innerHTML = healthCount.repeat(health);
  }
  body.addEventListener("keypress", logKey);

  function logKey(event) {
    for (let i = 0; i < winnerChars.length; i++) {
      if (event.key === winnerChars[i]) {
        array[i] = winnerChars[i];
        gameWord.textContent = array.join(" ");
      }
    }

    if (!event.key.match(/^[a-z]$/i)) {
      keyboardArray.push(event.key);
      keyboard.textContent = 
      "falsche: [ " +
      keyboardArray
        .sort()
        .join(" ") +
      " ]";
    }

  

    if (health == 0) {
      return "GAMEOVER";
    }

    if (!winnerChars.includes(event.key)) {
      console.log((health -= 1));
    }
    if (health == 7) {
      healthSymbol.innerHTML = healthCount.repeat(health);
    }
    if (health == 6) {
      healthSymbol.innerHTML = healthCount.repeat(health);
    }
    if (health == 5) {
      healthSymbol.innerHTML = healthCount.repeat(health);
    }
    if (health == 4) {
      healthSymbol.innerHTML = healthCount.repeat(health);
    }
    if (health == 3) {
      healthSymbol.innerHTML = healthCount.repeat(health);
    }
    if (health == 2) {
      healthSymbol.innerHTML = healthCount.repeat(health);
    }
    if (health == 1) {
      healthSymbol.innerHTML = healthCount.repeat(health);
    }
    if (health == 0) {
      healthSymbol.innerHTML = skull.repeat(1);
      healthSymbol.style.fontSize = "100px";
      healthSymbol.style.marginTop = "65px";
    }

    if (array.join("") == winnerChars.join("")) {
      healthSymbol.textContent = "Gewonnen!";
    }
    if (health >= 1) {
      win.textContent = "noch " + health + " Leben";
    }
    if (health < 1) {
      win.textContent = "verloren!";
    }
  }
});

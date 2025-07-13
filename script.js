const parentContainer = document.querySelector(".parent-container");
const easyTilesHTML = `<div class="tile" data-id="1"></div>
      <div class="tile" data-id="2"></div>
      <div class="tile" data-id="3"></div>
      <div class="tile" data-id="4"></div>
      <div class="tile" data-id="5"></div>
      <div class="tile" data-id="6"></div>
      <div class="tile" data-id="7"></div>
      <div class="tile" data-id="8"></div>
      <div class="tile" data-id="9"></div>
      <div class="tile" data-id="10"></div>
      <div class="tile" data-id="11"></div>
      <div class="tile" data-id="12"></div>
      <div class="tile" data-id="13"></div>
      <div class="tile" data-id="14"></div>
      <div class="tile" data-id="15"></div>
      <div class="tile" data-id="16"></div>
      <div class="tile" data-id="17"></div>
      <div class="tile" data-id="18"></div>
      <div class="tile" data-id="19"></div>
      <div class="tile" data-id="20"></div>
      <div class="tile" data-id="21"></div>
      <div class="tile" data-id="22"></div>
      <div class="tile" data-id="23"></div>
      <div class="tile" data-id="24"></div>`;
const mediumTilesHTML = `
      <div class="tile" data-id="1"></div>
      <div class="tile" data-id="2"></div>
      <div class="tile" data-id="3"></div>
      <div class="tile" data-id="4"></div>
      <div class="tile" data-id="5"></div>
      <div class="tile" data-id="6"></div>
      <div class="tile" data-id="7"></div>
      <div class="tile" data-id="8"></div>
      <div class="tile" data-id="9"></div>
      <div class="tile" data-id="10"></div>
      <div class="tile" data-id="11"></div>
      <div class="tile" data-id="12"></div>
      <div class="tile" data-id="13"></div>
      <div class="tile" data-id="14"></div>
      <div class="tile" data-id="15"></div>
      <div class="tile" data-id="16"></div>
      <div class="tile" data-id="17"></div>
      <div class="tile" data-id="18"></div>
      <div class="tile" data-id="19"></div>
      <div class="tile" data-id="20"></div>
      <div class="tile" data-id="21"></div>
      <div class="tile" data-id="22"></div>
      <div class="tile" data-id="23"></div>
      <div class="tile" data-id="24"></div>
      <div class="tile" data-id="25"></div>
      <div class="tile" data-id="26"></div>
      <div class="tile" data-id="27"></div>
      <div class="tile" data-id="28"></div>
      <div class="tile" data-id="29"></div>
      <div class="tile" data-id="30"></div>
      <div class="tile" data-id="31"></div>
      <div class="tile" data-id="32"></div>
      <div class="tile" data-id="33"></div>
      <div class="tile" data-id="34"></div>
      <div class="tile" data-id="35"></div>
      <div class="tile" data-id="36"></div>
      <div class="tile" data-id="37"></div>
      <div class="tile" data-id="38"></div>
      <div class="tile" data-id="39"></div>
      <div class="tile" data-id="40"></div>
      `;
const hardTilesHTML = `<div class="tile" data-id="1"></div>
      <div class="tile" data-id="2"></div>
      <div class="tile" data-id="3"></div>
      <div class="tile" data-id="4"></div>
      <div class="tile" data-id="5"></div>
      <div class="tile" data-id="6"></div>
      <div class="tile" data-id="7"></div>
      <div class="tile" data-id="8"></div>
      <div class="tile" data-id="9"></div>
      <div class="tile" data-id="10"></div>
      <div class="tile" data-id="11"></div>
      <div class="tile" data-id="12"></div>
      <div class="tile" data-id="13"></div>
      <div class="tile" data-id="14"></div>
      <div class="tile" data-id="15"></div>
      <div class="tile" data-id="16"></div>
      <div class="tile" data-id="17"></div>
      <div class="tile" data-id="18"></div>
      <div class="tile" data-id="19"></div>
      <div class="tile" data-id="20"></div>
      <div class="tile" data-id="21"></div>
      <div class="tile" data-id="22"></div>
      <div class="tile" data-id="23"></div>
      <div class="tile" data-id="24"></div>
      <div class="tile" data-id="25"></div>
      <div class="tile" data-id="26"></div>
      <div class="tile" data-id="27"></div>
      <div class="tile" data-id="28"></div>
      <div class="tile" data-id="29"></div>
      <div class="tile" data-id="30"></div>
      <div class="tile" data-id="31"></div>
      <div class="tile" data-id="32"></div>
      <div class="tile" data-id="33"></div>
      <div class="tile" data-id="34"></div>
      <div class="tile" data-id="35"></div>
      <div class="tile" data-id="36"></div>
      <div class="tile" data-id="37"></div>
      <div class="tile" data-id="38"></div>
      <div class="tile" data-id="39"></div>
      <div class="tile" data-id="40"></div>
      <div class="tile" data-id="41"></div>
      <div class="tile" data-id="42"></div>
      <div class="tile" data-id="43"></div>
      <div class="tile" data-id="44"></div>
      <div class="tile" data-id="45"></div>
      <div class="tile" data-id="46"></div>
      <div class="tile" data-id="47"></div>
      <div class="tile" data-id="48"></div>
      <div class="tile" data-id="49"></div>
      <div class="tile" data-id="50"></div>
      <div class="tile" data-id="51"></div>
      <div class="tile" data-id="52"></div>
      <div class="tile" data-id="53"></div>
      <div class="tile" data-id="54"></div>
      <div class="tile" data-id="55"></div>
      <div class="tile" data-id="56"></div>
      <div class="tile" data-id="57"></div>
      <div class="tile" data-id="58"></div>
      <div class="tile" data-id="59"></div>
      <div class="tile" data-id="60"></div>
      `;

const resetBtn = document.querySelector(".reset");
const triesCount = document.querySelector(".tries-count");
const gameResultDiv = document.querySelector(".game-result");
let closeWindowMark = document.querySelector(".cross-mark");
const gameLevelButtonsDiv = document.querySelector(".game-hard-level");
const easyBtn = document.querySelector(".easy");
const mediumBtn = document.querySelector(".medium");
const hardBtn = document.querySelector(".hard");
const allAnimals = [
  "🦁",
  "🐅",
  "🐆",
  "🐻",
  "🐼",
  "🐈",
  "🐖",
  "🐕",
  "🐎",
  "🐂",
  "🐃",
  "🐐",
  "🐏",
  "🐪",
  "🦙",
  "🦒",
  "🦌",
  "🐘",
  "🦏",
  "🦛",
  "🐀",
  "🐿️",
  "🐇",
  "🦔",
  "🦇",
  "🦫",
  "🦘",
  "🦃",
  "🐓",
  "🐥",
  "🦆",
  "🦢",
  "🦩",
  "🦅",
  "🦉",
  "🦕",
  "🐦‍⬛",
  "🦚",
  "🐋",
  "🐬",
  "🦭",
  "🐟",
  "🐠",
  "🐡",
  "🐙",
  "🦀",
  "🐌",
  "🐝",
  "🐛",
  "🐜",
  "🦋",
  "🐞",
  "🦗",
  "🕷️",
  "🦂",
  "🦦",
  "🦨",
  "🦥",
];
const footer = document.querySelector("footer");
let previousTile = [];
let clicks = 0;
let clicked = false;
let timeout;
let numberOfTries = 0;

let allTiles = document.querySelectorAll(".tile");
easyBtnClicked();
parentContainer.addEventListener("click", function (e) {
  const tile = e.target;
  console.log(tile);

  if (tile.classList.contains("tile")) {
    clicks++;
    console.log(tile.textContent);
    console.log(tile.dataset.animal);
    clicked = true;
    previousTile.push(tile);
    console.log(previousTile);
    if (clicks > 1) {
      if (previousTile.at(-1).dataset.id === previousTile.at(-2).dataset.id) {
        return;
      }
      numberOfTries++;
      triesCount.textContent = numberOfTries;
      flipTheTile(tile, previousTile);
    } else {
      displayAnimalAndTimeout(tile);
      numberOfTries++;
      triesCount.textContent = numberOfTries;
    }
  }
});

function flipTheTile(tile, previousTile) {
  tile.textContent = tile.dataset.animal; // show animal
  const guessed = checkGuessedCorrectly(tile, previousTile);
  console.log(guessed);

  if (!tile.classList.contains("flipped") && !guessed) {
    const comingFrom = `From Flip the tile`;
    displayAnimalAndTimeout(tile, comingFrom);
    console.log(tile.classList);
    console.log(guessed);
    console.log(timeout);
  } else if (guessed) {
    previousTile.at(-1).textContent = previousTile.at(-1).dataset.animal;
    previousTile.at(-2).textContent = previousTile.at(-2).dataset.animal;
    previousTile.at(-1).classList.add("flipped"); // add flipped class
    previousTile.at(-2).classList.add("flipped"); // add flipped class
    console.log(timeout);
    clearTimeout(timeout);
    if (checkIfWinner()) {
      const gameResultHTML = `<p class="cross-mark">✖</p>
    <p class="emojis">🥳 🎉 🎊 🍾</p>
      <p>Congratulations!!</p>
      <p class="game-over">GAME OVER</p>
      <p>Number of tries: <span class="tries-count">${numberOfTries}</span></p>`;
      gameResultDiv.innerHTML = gameResultHTML;
      gameResultDiv.classList.remove("hidden");
      closeWindowMark = document.querySelector(".cross-mark");
      closeWindowMark.addEventListener("click", function () {
        gameResultDiv.classList.add("hidden");
      });

      allTiles.forEach((tile) => {
        gsap.fromTo(
          tile,
          { scale: 1 },
          {
            scale: 1.8,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          }
        );
      });
    }
  }
  console.log(guessed);
  console.log(numberOfTries);
}

function checkGuessedCorrectly(tile, previousTile) {
  console.log(`THIS EXECUTED!`);
  console.log(previousTile.at(-1).textContent);
  console.log(previousTile.at(-2).dataset.animal);
  console.log(tile.textContent);
  console.log(tile.dataset.animal);

  if (
    previousTile.at(-1).dataset.animal === previousTile.at(-2).dataset.animal
  ) {
    console.log("Guessed correctly");
    gsap.fromTo(
      [previousTile.at(-1), previousTile.at(-2)],
      { scale: 1 },
      {
        scale: 3,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      }
    );

    return true;
  } else {
    return false;
  }
}

function checkIfWinner() {
  let allTilesArr = [...allTiles];
  const isWinner = allTilesArr.every((tile) => tile.textContent !== "");
  console.log(isWinner);
  return isWinner;
}
function displayAnimalAndTimeout(tile, comingFrom) {
  tile.textContent = tile.dataset.animal; // show animal
  // display animal and immediately hide
  timeout = setTimeout(() => {
    console.log(`ENTERED INTO TIMEOUT`);
    tile.textContent = "";
  }, 1000);
}
let randomNumArr = [];
insertAnimalsIntoRandomTiles();
function insertAnimalsIntoRandomTiles() {
  let randomIndexArr = [];
  const uniqArr = getUniqueRandomNumbers(allTiles.length); // get 30 count of unique num's to pick random tile.
  console.log(allTiles.length);
  const randArrForAnimals = getUniqueRandomNumbers(allAnimals.length); // get animals array length of unique num's to p[ick random animals
  console.log(randArrForAnimals);

  let tileCount = 0; // insert animals in only 15 tiles
  let insertedAnimalsArr = []; // animals that's been inserted in 1st iteration for 15 tiles
  let insertedTiles = []; // animals inserted in 1st iteration for 15 tiles
  // pick random 15 tiles
  uniqArr.forEach((num, i) => {
    // insert animals in only 15 tiles
    if (tileCount < allTiles.length / 2) {
      allTiles[num].dataset.animal = allAnimals[randArrForAnimals[i]];
      insertedTiles.push(Number(allTiles[num].dataset.id) - 1);
      insertedAnimalsArr.push(allAnimals[randArrForAnimals[i]]);
      console.log(allTiles[num]);
      tileCount++;
    }
  });
  console.log(insertedTiles);
  console.log(insertedAnimalsArr);

  // tiles remaining after inserting into 15 tiles - 1st iteration
  const insertedTilesSet = new Set(insertedTiles);
  console.log(insertedTilesSet);
  let tilesIndexSet = new Set([...Array(allTiles.length).keys()]);
  console.log(tilesIndexSet);
  console.log(tilesIndexSet.symmetricDifference(insertedTilesSet));
  // tiles remaining after 1st iteration
  const tilesRemainingArr = [
    ...tilesIndexSet.symmetricDifference(insertedTilesSet),
  ];
  console.log(tilesRemainingArr);

  // insert exactly the same 15 animals into different tiles.
  tilesRemainingArr.forEach((num, i) => {
    allTiles[num].dataset.animal = insertedAnimalsArr[i];
  });
}

// Returns an array of UNIQUE random numbers with a specified length.
function getUniqueRandomNumbers(numbersRequired = allTiles.length / 2) {
  let randomNumArr = [];
  for (let i = 0; i < numbersRequired; i++) {
    const randomNum = Math.floor(Math.random() * numbersRequired);
    randomNumArr.push(randomNum);
  }
  let uniqArr = [...new Set(randomNumArr)];
  while (uniqArr.length !== Number(numbersRequired)) {
    const randomNum = Math.floor(Math.random() * numbersRequired);
    randomNumArr.push(randomNum);
    uniqArr = [...new Set(randomNumArr)];
  }
  console.log(uniqArr);
  return uniqArr;
}

resetBtn.addEventListener("click", function () {
  allTiles.forEach((tile) => {
    tile.textContent = "";
    tile.dataset.animal = "";
    tile.classList.remove("flipped");
  });
  clicks = 0;
  numberOfTries = 0;
  previousTile.length = 0;
  triesCount.textContent = 0;
  gameResultDiv.classList.add("hidden");
  easyBtnClicked();
  insertAnimalsIntoRandomTiles();
  window.location.reload();
});

function whenAnyGameLevelButtonIsClicked() {
  allTiles = document.querySelectorAll(".tile");
  allTiles.forEach((tile) => {
    tile.textContent = "";
    tile.dataset.animal = "";
    tile.classList.remove("flipped");
  });
  clicks = 0;
  numberOfTries = 0;
  previousTile.length = 0;
  triesCount.textContent = 0;

  gameResultDiv.classList.add("hidden");

  insertAnimalsIntoRandomTiles();
}

gameLevelButtonsDiv.addEventListener("click", function (e) {
  if (e.target === easyBtn) {
    easyBtnClicked();
    footer.style.marginTop = "2rem";
  }
  if (e.target === mediumBtn) {
    mediumBtnClicked();
  }
  if (e.target === hardBtn) {
    hardBtnClicked();
  }
});
function easyBtnClicked() {
  parentContainer.innerHTML = easyTilesHTML;
  whenAnyGameLevelButtonIsClicked();
}

function mediumBtnClicked() {
  parentContainer.innerHTML = mediumTilesHTML;
  whenAnyGameLevelButtonIsClicked();
}
function hardBtnClicked() {
  parentContainer.innerHTML = hardTilesHTML;
  whenAnyGameLevelButtonIsClicked();
}

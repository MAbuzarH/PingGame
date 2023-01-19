"use strict";
//selecting element
let score1El = document.querySelector(".score_0");
let score2El = document.querySelector(".score_1");
let diceEl = document.querySelector(".dice_image");
let Btnroll = document.querySelector(".roll");
let BtnAgain = document.querySelector(".again");
let BtnHold = document.querySelector(".hold");
let currScoreEl1 = document.querySelector(".curents-0");
let currScoreEl2 = document.querySelector(".curents-1");
let player1 = document.querySelector(".player_0");
let player2 = document.querySelector(".player_1");

let currScore, activeplayer, score, playing;
//win game end
const winEnd = function () {
  document
    .querySelector(`.player_${activeplayer}`)
    .classList.add("player_winner");
  document.querySelector(`.player_${activeplayer}`).classList.remove("active");
  playing = false;
  diceEl.classList.add("hidden");
};
//new init function that will start the game
const init = function () {
  // variables
  currScore = 0;
  activeplayer = 0;
  score = [0, 0];

  //state variable
  playing = true;

  //starting condition
  diceEl.classList.add("hidden");
  score1El.textContent = "0";
  score2El.textContent = "0";
  currScoreEl1.textContent = "0";
  currScoreEl2.textContent = "0";
  player1.classList.remove("player_winner");
  player2.classList.remove("player_winner");
  player1.classList.add("active");
  player2.classList.remove("active");
};
init();
//switch to active player
const switchPlayer = function () {
  //switch dice to next person
  document.querySelector(`.curents-${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currScore = 0;

  //toggle check and add or remove a class
  player1.classList.toggle("active");
  player2.classList.toggle("active");
};
//player 0 is 1 and player 1 is 2

//funnctionality of rolling dice
Btnroll.addEventListener("click", function () {
  // WIN GAME OVER
  console.log(currScore);
  if (currScore >= 10 || score[activeplayer] >= 100) {
    if (score[activeplayer] >= 100 || score[activeplayer] >= 100) {
      score[activeplayer] += currScore;
      document.querySelector(`.score_${activeplayer}`).textContent =
      score[activeplayer];
    }
    else{
      score[activeplayer] += currScore;
      document.querySelector(`.score_${activeplayer}`).textContent =
      score[activeplayer];
    }
    console.log(score[activeplayer]);
    winEnd();
  } else {
    playing = true;
  }
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    //disply dice image

    diceEl.src = `./images/${dice}.png`;
    diceEl.classList.remove("hidden");

    //my logic
    // diceEl.classList.remove("hidden").style.img="./images/dice-1.png";
    //if dice is not 1
    if (dice !== 1) {
      currScore += dice;
      // currScoreEl1.textContent = currScore;//change later
      document.querySelector(`.curents-${activeplayer}`).textContent =
        currScore;
    } else {
      switchPlayer();
    }
  }
});
//

BtnHold.addEventListener("click", function () {
  // WIN GAME OVER
  if (currScore >= 100 || score[activeplayer] >= 100) {
    if (score[activeplayer] >= 100 || score[activeplayer] >= 100) {
      score[activeplayer] += currScore;
      document.querySelector(`.score_${activeplayer}`).textContent =
      score[activeplayer];
    }
    else{
      score[activeplayer] += currScore;
      document.querySelector(`.score_${activeplayer}`).textContent =
      score[activeplayer];
    }
    console.log(score[activeplayer]);
    winEnd();
  } else {
    playing = true;
  }
  // add current score to active plyar score
  if (playing) {
    score[activeplayer] += currScore;
    document.querySelector(`.score_${activeplayer}`).textContent =
      score[activeplayer];
    // check if score >= 100 finish the game
    if (score[activeplayer] >= 100) {
      winEnd();
    } else {
      //else switch to next plyar
      switchPlayer();
    }
  }
});
// new game button
BtnAgain.addEventListener("click", init);

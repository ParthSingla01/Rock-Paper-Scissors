let user = 0;
let comp = 0;
let userScore = document.getElementById("user");
let compScore = document.getElementById("comp");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#win-msg");
let reset = document.querySelector(".reset");
let userWin = false;

reset.addEventListener("click", () => {
  user = 0;
  comp = 0;
  userScore.innerHTML = user;
  compScore.innerHTML = comp;
  msg.innerHTML = "Play your move";
});

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const generateComp = () => {
  const options = ["rock", "paper", "scissors"];
  const x = Math.floor(Math.random() * 3);
  return options[x];
};

const playGame = (userChoice) => {
  const compChoice = generateComp();
  if (compChoice == userChoice) {
    gameDraw();
  } else {
    if (userChoice == "rock") {
      if (compChoice == "paper") {
        userWin = false;
        comp++;
      } else {
        userWin = true;
        user++;
      }
    } else if ((userChoice = "paper")) {
      if (compChoice == "rock") {
        userWin = true;
        user++;
      } else {
        userWin = false;
        comp++;
      }
    } else {
      if (compChoice == "rock") {
        userWin = false;
        comp++;
      } else {
        userWin = true;
        user++;
      }
    }

    printWinner(userWin, user, comp, userChoice, compChoice);
  }
};

const printWinner = (userWin, user, comp, userChoice, compChoice) => {
  userScore.innerHTML = user;
  compScore.innerHTML = comp;
  if (userWin) {
    msg.innerHTML = `Win ! ${userChoice} defeates ${compChoice}`;
  } else {
    msg.innerHTML = `Defeat ! ${userChoice} loses to ${compChoice}`;
  }
};

const gameDraw = () => {
  msg.innerHTML = "DRAW !";
};

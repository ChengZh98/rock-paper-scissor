const answers = ["ROCK", "PAPER", "SCISSOR"];
let points = 0;
function getAnswerIndexFromBtnId(btnId) {
  const lc_btnid = btnId.toLowerCase();
  switch (lc_btnid) {
    case "rock":
      return 0;
    case "paper":
      return 1;
    case "scissor":
      return 2;
    default:
      return 0;
  }
}

function getComputerChoice() {
  const randomNumber1to3 = Math.floor(Math.random() * 3);
  return answers[randomNumber1to3];
}
/**
 *
 * @param {string} playerSelection
 * @param {string} computerSelection
 * @returns number
 */
function playRound(playerSelection, computerSelection) {
  const lowerCasedSel1 = playerSelection.toLowerCase();
  const lowerCasedSel2 = computerSelection.toLowerCase();

  if (lowerCasedSel1 === lowerCasedSel2) {
    return 0;
  }

  if (lowerCasedSel1 === "paper") {
    return lowerCasedSel2 === "rock" ? 1 : 0;
  }

  if (lowerCasedSel1 === "rock") {
    return lowerCasedSel2 === "scissor" ? 1 : 0;
  }

  return lowerCasedSel2 === "paper" ? 1 : 0;
}

//DOM MANIPULATION
const userScorePoint = document.querySelector(".player-result");
const computerScorePoint = document.querySelector(".computer-result");

const allBTNS = document.querySelectorAll("button");

allBTNS.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.id;
    const answerIndex = getAnswerIndexFromBtnId(id);

    const userChoice = answers[answerIndex];

    const computerChoice = getComputerChoice();

    const result = playRound(userChoice, computerChoice);

    const userScorePointsInteger = parseInt(userScorePoint.textContent);
    const computerScorePointsInteger = parseInt(computerScorePoint.textContent);

    //if result is 1 it means that the user won else bot won

    if (result === 1) {
      userScorePoint.textContent = userScorePointsInteger + 1;
      if (userScorePointsInteger + 1 === 5) {
        alert("Winner is user");
      }
    } else {
      computerScorePoint.textContent = computerScorePointsInteger + 1;
      if (computerScorePointsInteger + 1 === 5) {
        alert("Winner is boT");
      }
    }
  });
});

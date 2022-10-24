const PLAYER_SCORE = document.getElementById("playerScore");
const COMPUTER_SCORE = document.getElementById("computerScore");

const PLAYER_CHOSEN_ITEM = document.getElementById("playerChosenItem");
const COMPUTER_CHOSEN_ITEM = document.getElementById("computerChosenItem");

const BUTTON_ROCK = document.getElementById("buttonRock");
const BUTTON_SCISSOR = document.getElementById("buttonScissor");
const BUTTON_PAPER = document.getElementById("buttonPaper");

const ROUND_END_OUTPUT = document.getElementById("roundEndOutput");

const CHOICES = ["rock", "scissor", "paper"];
const MAX_SCORE_IN_A_GAME = 5

let gameStatistics = {
  round: 1,
  playerScore: 0,
  computerScore: 0
};

function computerPlay() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function outputPlayerAndComputerChoices(playerSelection, computerSelection) {
  PLAYER_CHOSEN_ITEM.innerHTML = `${playerSelection.toUpperCase()}`;
  COMPUTER_CHOSEN_ITEM.innerHTML = `${computerSelection.toUpperCase()}`;
}

function playRound(playerSelection, computerSelection) {
  gameStatistics.round++;

  if (playerSelection === computerSelection) {
    return "draw";
  } else if (
    ((playerSelection === CHOICES[0]) && (computerSelection === CHOICES[1])) ||
    ((playerSelection === CHOICES[1]) && (computerSelection === CHOICES[2])) ||
    ((playerSelection === CHOICES[2]) && (computerSelection === CHOICES[0]))
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function outputWinnerOrSetGameEnd(winner) {
  PLAYER_SCORE.innerHTML = `Player score: ${gameStatistics.playerScore}`;
  COMPUTER_SCORE.innerHTML = `Computer score: ${gameStatistics.computerScore}`;

  if ((gameStatistics.playerScore === MAX_SCORE_IN_A_GAME) ||
    (gameStatistics.computerScore === MAX_SCORE_IN_A_GAME)
  ) {
    gameStatistics.round = 1;
    gameStatistics.playerScore = 0;
    gameStatistics.computerScore = 0;
    ROUND_END_OUTPUT.innerHTML = `Current game ends and ${winner} wins!`;
  } else {
    ROUND_END_OUTPUT.innerHTML = `${winner[0].toUpperCase() + winner.substring(1)} wins!`;
  }
}

function calculateAndOutputRoundResult(roundOutput) {
  switch (roundOutput) {
    case "draw":
      ROUND_END_OUTPUT.innerHTML = "It's a draw!"
      break;
    case "player":
      gameStatistics.playerScore++;
      outputWinnerOrSetGameEnd(roundOutput);
      break;
    default:
      outputWinnerOrSetGameEnd(roundOutput);
      gameStatistics.computerScore++;
  }
}

function game(playerSelection) {
  let computerSelection = computerPlay();
  outputPlayerAndComputerChoices(playerSelection, computerSelection);
  let roundOutput = playRound(playerSelection, computerSelection);
  calculateAndOutputRoundResult(roundOutput);
}

BUTTON_ROCK.addEventListener("click", event => {
  game(CHOICES[0]);
});

BUTTON_SCISSOR.addEventListener("click", event => {
  game(CHOICES[1]);
});
BUTTON_PAPER.addEventListener("click", event => {
  game(CHOICES[2]);
});

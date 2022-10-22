const CHOICES = ["rock", "paper", "scissor"];
const TOTAL_GAME_ROUNDS = 5;

function getPlayerInput() {
  let playerSelection = prompt(`Input choice from [${CHOICES}] to play:`).toLowerCase();

  while (!CHOICES.includes(playerSelection)) {
    playerSelection = prompt(`Wrong input.\nInput choice again from [${CHOICES}] to play:`).toLowerCase();
  }

  return playerSelection;
}

function computerPlay() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (
    ((playerSelection === CHOICES[0]) && (computerSelection === CHOICES[2])) ||
    ((playerSelection === CHOICES[1]) && (computerSelection === CHOICES[0])) ||
    ((playerSelection === CHOICES[2]) && (computerSelection === CHOICES[1]))
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function outputAndCalculateRoundResult(roundOutput, currentRound, score) {
  switch (roundOutput) {
    case "draw":
      console.log(`Round ${currentRound}: Draw!`);
      break;
    case "player":
      score.player++;
      console.log(`Round ${currentRound}: The player wins this round!`);
      break;
    default:
      score.computer++;
      console.log(`Round ${currentRound}: The computer wins this round!`)
  }
}

function outputFinalResult(score) {
  console.log(`Player final score: ${score.player}`);
  console.log(`Computer final score: ${score.computer}`);

  if (score.player === score.computer) {
    console.log("It is a tie.");
  } else if (score.player > score.computer) {
    console.log("The player wins!");
  } else {
    console.log("The computer wins!");
  }
}

function game() {
  let score = {
    player: 0,
    computer: 0
  };

  for (let i = 0; i < TOTAL_GAME_ROUNDS; i++) {
    let playerSelection = getPlayerInput();
    let computerSelection = computerPlay();
    console.log();
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`)
    console.log();
    let roundOutput = playRound(playerSelection, computerSelection);
    outputAndCalculateRoundResult(roundOutput, i + 1, score);
    console.log();
    console.log("----------");
    console.log();
  }

  outputFinalResult(score);
}

game();

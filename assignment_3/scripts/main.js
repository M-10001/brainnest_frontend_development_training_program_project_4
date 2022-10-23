const EQUATION_BAR = document.getElementById("equationBar");
const ANSWER_BAR = document.getElementById("answerBar");

const BUTTON_CLEAR = document.getElementById("buttonClear");
const BUTTON_BACK_SPACE = document.getElementById("buttonBackSpace");

const KEY_TO_ELEMENT = {
  "=": document.getElementById("buttonEqual"),
  "/": document.getElementById("buttonDivide"),
  "*": document.getElementById("buttonMultiply"),
  "-": document.getElementById("buttonSubtract"),
  "+": document.getElementById("buttonAdd"),
  ".": document.getElementById("buttonDecimal"),
  "0": document.getElementById("button0"),
  "1": document.getElementById("button1"),
  "2": document.getElementById("button2"),
  "3": document.getElementById("button3"),
  "4": document.getElementById("button4"),
  "5": document.getElementById("button5"),
  "6": document.getElementById("button6"),
  "7": document.getElementById("button7"),
  "8": document.getElementById("button8"),
  "9": document.getElementById("button9")
}

const OPERATORS = ["/", "*", "-", "+", "."];
const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const MAX_EQUATION_LENGTH = 20;

let equation = "";
let answer = NaN;
let lastAnswerAvailable = false;
let error = false;

function updateDisplay() {
  EQUATION_BAR.innerHTML = equation;

  if (error === true) {
    ANSWER_BAR.innerHTML = "Error";
  } else if (isNaN(answer) === true) {
    ANSWER_BAR.innerHTML = "";
  } else {
    ANSWER_BAR.innerHTML = answer;
  }
}

function computeAnswer() {
  answer = NaN;
  let temp = NaN;

  try {
    temp = eval(equation);
  } catch (e) {
    return;
  }

  if ((isFinite(temp) === true) && (isNaN(temp) === false)) {
    answer = temp;
  }
}

function computeForInputEqual() {
  computeAnswer();

  if (isNaN(answer) === true) {
    error = true;
  } else {
    lastAnswerAvailable = true;
  }
}

function computeForInputOperator(input) {
  if (lastAnswerAvailable === true) {
    equation = "" + answer;
    lastAnswerAvailable = false;
  }

  equation = equation + input;
  answer = NaN;
}

function computeForInputNumber(input) {
  if (lastAnswerAvailable === true) {
    equation = "";
    lastAnswerAvailable = false;
  }

  equation = equation + input;
  computeAnswer();
}

function parseInputAndEvaluate(input) {
  if (error === false) {
    if (input === "=") {
      computeForInputEqual();
    } else if (OPERATORS.includes(input)) {
      computeForInputOperator(input);
    } else if (NUMBERS.includes(input)) {
      computeForInputNumber(input);
    } else {
      error = true;
    }
  }

  updateDisplay();
}

function decrementAndEvaluateEquation() {
   if ((error === false) && (equation !== "")) {
     equation = equation.substring(0, equation.length - 1);
     computeAnswer();
     lastAnswerAvailable = false;
     updateDisplay();
   }
}

function resetAll() {
  equation = "";
  answer = NaN;
  lastAnswerAvailable = false;
  error = false;
  updateDisplay();
}

function parseEventToValueForEvaluation(event) {
  if (event.target === BUTTON_CLEAR) {
    resetAll();
  } else if ((event.target === BUTTON_BACK_SPACE) || (event.key === "Backspace")) {
    decrementAndEvaluateEquation();
  } else {
    for (let [value, element] of Object.entries(KEY_TO_ELEMENT)) {
      if ((event.target === element) || (event.key === value)) {
        parseInputAndEvaluate(value);
        break;
      }
    }
  }
}

BUTTON_CLEAR.addEventListener("click", parseEventToValueForEvaluation);
BUTTON_BACK_SPACE.addEventListener("click", parseEventToValueForEvaluation);

for (let [value, element] of Object.entries(KEY_TO_ELEMENT)) {
  element.addEventListener("click", parseEventToValueForEvaluation);
}

document.addEventListener("keydown", parseEventToValueForEvaluation);

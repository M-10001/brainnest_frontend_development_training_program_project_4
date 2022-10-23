const EQUATION_BAR = document.getElementById("equationBar");
const ANSWER_BAR = document.getElementById("answerBar");

const BUTTON_CLEAR = document.getElementById("buttonClear");
const BUTTON_EQUAL = document.getElementById("buttonEqual");

const BUTTON_DIVIDE = document.getElementById("buttonDivide");
const BUTTON_MULTIPLY = document.getElementById("buttonMultiply");
const BUTTON_SUBTRACT = document.getElementById("buttonSubtract");
const BUTTON_ADD = document.getElementById("buttonAdd");

const BUTTON_DECIMAL = document.getElementById("buttonDecimal");

const BUTTON_1 = document.getElementById("button1");
const BUTTON_2 = document.getElementById("button2");
const BUTTON_3 = document.getElementById("button3");
const BUTTON_4 = document.getElementById("button4");
const BUTTON_5 = document.getElementById("button5");
const BUTTON_6 = document.getElementById("button6");
const BUTTON_7 = document.getElementById("button7");
const BUTTON_8 = document.getElementById("button8");
const BUTTON_9 = document.getElementById("button9");
const BUTTON_0 = document.getElementById("button0");

const OPERATORS = ["/", "*", "-", "+"];
const NUMPAD_VALUES = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const MAX_EQUATION_LENGTH = 20;

let equation = null;
let answer = NaN;
let lastAnswerAvailable = false;
let error = false;

function updateDisplayEquation() {
  if (equation === null) {
    EQUATION_BAR.innerHTML = "";
  } else {
    EQUATION_BAR.innerHTML = equation;
  }
}

function updateDisplayAnswer() {
  if (error === true) {
    ANSWER_BAR.innerHTML = "Error";
  } else if (isNaN(answer)) {
    ANSWER_BAR.innerHTML = "";
  } else {
    ANSWER_BAR.innerHTML = answer;
  }
}

function setEquation(parameter) {

}

function setAnswer() {

}

function parseAndEvaluateInput(input) {

}

function resetALL() {

}

BUTTON_CLEAR.addEventListener("click", event => {
  resetAll();
});

BUTTON_EQUAL.addEventListener("click", event => {
  parseAndEvaluateInput("=");
});

BUTTON_DIVIDE.addEventListener("click", event => {
  parseAndEvaluateInput("/");
});

BUTTON_MULTIPLY.addEventListener("click", event => {
  parseAndEvaluateInput("*");
});

BUTTON_SUBTRACT.addEventListener("click", event => {
  parseAndEvaluateInput("-");
});

BUTTON_ADD.addEventListener("click", event => {
  parseAndEvaluateInput("+");
});

BUTTON_0.addEventListener("click", event => {
  parseAndEvaluateInput("0");
});

BUTTON_1.addEventListener("click", event => {
  parseAndEvaluateInput("1");
});

BUTTON_2.addEventListener("click", event => {
  parseAndEvaluateInput("2");
});

BUTTON_3.addEventListener("click", event => {
  parseAndEvaluateInput("3");
});

BUTTON_4.addEventListener("click", event => {
  parseAndEvaluateInput("4");
});

BUTTON_5.addEventListener("click", event => {
  parseAndEvaluateInput("5");
});

BUTTON_6.addEventListener("click", event => {
  parseAndEvaluateInput("6");
});

BUTTON_7.addEventListener("click", event => {
  parseAndEvaluateInput("7");
});

BUTTON_8.addEventListener("click", event => {
  parseAndEvaluateInput("8");
});

BUTTON_9.addEventListener("click", event => {
  parseAndEvaluateInput("9");
});

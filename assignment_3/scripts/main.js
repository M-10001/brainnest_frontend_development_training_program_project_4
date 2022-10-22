const EQUATION_BAR = document.getElementById("equationBar");
const ANSWER_BAR = document.getElementById("answerBar");

const BUTTON_CLEAR = document.getElementById("buttonClear");
const BUTTON_PLUS = document.getElementById("buttonPlus");
const BUTTON_MINUS = document.getElementById("buttonMinus");
const BUTTON_MULTIPLY = document.getElementById("buttonMultiply");
const BUTTON_DIVIDE = document.getElementById("buttonDivide");
const BUTTON_EQUAL = document.getElementById("buttonEqual");
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

const OPERATORS = ["/", "*", "-", "+", "."];
const MAX_EQUATION_LENGTH = 20;

let equation = null;
let answer = NaN;
let operatorUsed = false;
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

function setAnswer() {
  let regularExp = /\/0{1,}?.0{0,}![1-9]/i;

  if (equation === null) {
    answer = NaN;
  } else if ((error === true) || regularExp.test(equation) || OPERATORS.includes(equation[equation.length - 1])) {
    error = true;
    answer = NaN;
  } else if (operatorUsed === true) {
    answer = (Math.round(eval(equation) * 10000) / 10000);
  }
}

function setEquationForOperators(operator) {
  if (
    (error !== true) &&
    (equation !== null) &&
    (equation.length > 0) &&
    !(OPERATORS.includes(equation[equation.length - 1])) &&
    !(equation.length > MAX_EQUATION_LENGTH)
  ) {
    equation = equation + operator;
    operatorUsed = true;
    lastAnswerAvailable = false;
  }
}

function setEquationForNumbers(stringNumber) {
  if ((equation === null) || (lastAnswerAvailable === true)) {
    lastAnswerAvailable = false;
    equation = stringNumber;
  } else if (equation.length <= MAX_EQUATION_LENGTH && error === false) {
    equation = equation + stringNumber;
  }
}

function buttonDividePressed(event) {
  setAnswer();
  updateDisplayAnswer();
  setEquationForOperators("/");
  updateDisplayEquation();
}

function buttonMultiplyPressed(event) {
  setAnswer();
  updateDisplayAnswer();
  setEquationForOperators("*");
  updateDisplayEquation();
}

function buttonMinusPressed(event) {
  setAnswer();
  updateDisplayAnswer();
  setEquationForOperators("-");
  updateDisplayEquation();
}

function buttonPlusPressed(event) {
  setAnswer();
  updateDisplayAnswer();
  setEquationForOperators("+");
  updateDisplayEquation();
}

function buttonDecimalPressed(event) {
  setEquationForOperators(".");
  updateDisplayEquation();
}

function buttonEqualPressed(event) {
  setAnswer();
  updateDisplayAnswer();

  if ((error === false) && !(isNaN(answer))) {
    equation = "" + answer;
    answer = NaN;
    operatorUsed = false;
    lastAnswerAvailable = true;
  }
}

function buttonClearPressed(event) {
  answer = NaN;
  equation = null;
  operatorUsed = false;
  lastAnswerAvailable = false;
  error = false;
  updateDisplayAnswer();
  updateDisplayEquation();
}

BUTTON_DIVIDE.addEventListener("click", buttonDividePressed);
BUTTON_MULTIPLY.addEventListener("click", buttonMultiplyPressed);
BUTTON_MINUS.addEventListener("click", buttonMinusPressed);
BUTTON_PLUS.addEventListener("click", buttonPlusPressed);
BUTTON_DECIMAL.addEventListener("click", buttonDecimalPressed);
BUTTON_EQUAL.addEventListener("click", buttonEqualPressed);
BUTTON_CLEAR.addEventListener("click", buttonClearPressed);

BUTTON_0.addEventListener("click", event => {
  setEquationForNumbers("0");
  updateDisplayEquation();
});

BUTTON_1.addEventListener("click", event => {
  setEquationForNumbers("1");
  updateDisplayEquation();
});

BUTTON_2.addEventListener("click", event => {
  setEquationForNumbers("2");
  updateDisplayEquation();
});

BUTTON_3.addEventListener("click", event => {
  setEquationForNumbers("3");
  updateDisplayEquation();
});

BUTTON_4.addEventListener("click", event => {
  setEquationForNumbers("4");
  updateDisplayEquation();
});

BUTTON_5.addEventListener("click", event => {
  setEquationForNumbers("5");
  updateDisplayEquation();
});

BUTTON_6.addEventListener("click", event => {
  setEquationForNumbers("6");
  updateDisplayEquation();
});

BUTTON_7.addEventListener("click", event => {
  setEquationForNumbers("7");
  updateDisplayEquation();
});

BUTTON_8.addEventListener("click", event => {
  setEquationForNumbers("8");
  updateDisplayEquation();
});

BUTTON_9.addEventListener("click", event => {
  setEquationForNumbers("9");
  updateDisplayEquation();
});

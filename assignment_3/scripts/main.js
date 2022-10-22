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

let equation = null;
let answer = null;
let lastAnswerAvailable = false;

function updateDisplayEquation() {
  if (equation == null) {
    EQUATION_BAR.innerHTML = "";
  } else {
    EQUATION_BAR.innerHTML = equation;
  }
}

function updateDisplayAnswer() {
  if (answer == null) {
    ANSWER_BAR.innerHTML = "";
  } else {
    ANSWER_BAR.innerHTML = answer;
  }
}

function computeEquationForOperators(operator) {
  lastAnswerAvailable = false;

  if ((answer !== null || equation !== null) && (OPERATORS.includes(equation[equation.length - 1]))) {
    return equation;
  } else if (equation.length <= 10) {
    return equation + number;
  } else {
    return equation
  }
}

function computeEquationForNumbers(number) {
  if ((equation === null) || (lastAnswerAvailable === true)) {
    lastAnswerAvailable = false;
    return number;
  } else if (equation.length <= 10) {
    return equation + number;
  } else {
    return equation
  }
}

function computeAnswer() {
  let regularExp = /\/0{1,}?.0{0,}![1-9]/i;
  if (regularExp.test(equation) === true) {
    return "w";
  } else {
    return (Math.round(eval(equation) * 10000) / 10000);
  }
}

function buttonDividePressed(event) {
  answer = computeAnswer();
  updateDisplayAnswer();
  equation = computeEquationForOperators("/");
  updateDisplayEquation();
}

function buttonMultiplyPressed(event) {
  answer = computeAnswer();
  updateDisplayAnswer();
  equation = computeEquationForOperators("*");
  updateDisplayEquation();
}

function buttonMinusPressed(event) {
  answer = computeAnswer();
  updateDisplayAnswer();
  equation = computeEquationForOperators("-");
  updateDisplayEquation();
}

function buttonPlusPressed(event) {
  answer = computeAnswer();
  updateDisplayAnswer();
  equation = computeEquationForOperators("+");
  updateDisplayEquation();
}

function buttonDecimalPressed(event) {
  equation = computeEquationForOperators(".");
  updateDisplayEquation();
}

function buttonEqualPressed(event) {
  answer = computeAnswer();
  equation = answer;
  updateDisplayAnswer();
  lastAnswerAvailable = true;
}

function buttonClearPressed(event) {
  equation = null;
  answer = null;
  lastAnswerAvailable = false;
  updateDisplayEquation();
  updateDisplayAnswer();
}

BUTTON_DIVIDE.addEventListener("click", buttonDividePressed);
BUTTON_MULTIPLY.addEventListener("click", buttonMultiplyPressed);
BUTTON_MINUS.addEventListener("click", buttonMinusPressed);
BUTTON_PLUS.addEventListener("click", buttonPlusPressed);
BUTTON_DECIMAL.addEventListener("click", buttonDecimalPressed);
BUTTON_EQUAL.addEventListener("click", buttonEqualPressed);
BUTTON_CLEAR.addEventListener("click", buttonClearPressed);

BUTTON_0.addEventListener("click", (event) => {
  equation = computeEquationForNumbers("0");
  updateDisplayEquation();
});

BUTTON_1.addEventListener("click", (event) => {
  equation = computeEquationForNumbers("1");
  updateDisplayEquation();
});

BUTTON_2.addEventListener("click", (event) => {
  equation = computeEquationForNumbers("2");
  updateDisplayEquation();
});

BUTTON_3.addEventListener("click", (event) => {
  equation = computeEquationForNumbers("3");
  updateDisplayEquation();
});

BUTTON_4.addEventListener("click", (event) => {
  equation = computeEquationForNumbers("4");
  updateDisplayEquation();
});

BUTTON_5.addEventListener("click", (event) => {
  equation = computeEquationForNumbers("5");
  updateDisplayEquation();
});

BUTTON_6.addEventListener("click", (event) => {
  equation = computeEquationForNumbers("6");
  updateDisplayEquation();
});

BUTTON_7.addEventListener("click", (event) => {
  equation = computeEquationForNumbers("7");
  updateDisplayEquation();
});

BUTTON_8.addEventListener("click", (event) => {
  equation = computeEquationForNumbers("8");
  updateDisplayEquation();
});

BUTTON_9.addEventListener("click", (event) => {
  equation = computeEquationForNumbers("9");
  updateDisplayEquation();
});

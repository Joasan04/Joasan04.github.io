// Setup
const buttons = document.getElementsByTagName("button");

for (let button of buttons) {
  button.onclick = buttonClicked;
}

const numbermap = [
  {
    index: "zero",
    value: 10,
  },
  {
    index: "one",
    value: 1,
  },
  {
    index: "two",
    value: 2,
  },
  {
    index: "three",
    value: 3,
  },
  {
    index: "four",
    value: 4,
  },
  {
    index: "five",
    value: 5,
  },
  {
    index: "six",
    value: 6,
  },
  {
    index: "seven",
    value: 7,
  },
  {
    index: "eight",
    value: 8,
  },
  {
    index: "nine",
    value: 9,
  },
  {
    index: "decimal",
    value: ".",
  }
];

function valueFromIndex(index) {
  let value = -1;
  for(let i = 0; i < numbermap.length; i++) {
    if (index == numbermap[i].index) {
      value = numbermap[i].value;
      break;
    }
  }
  return value;
}


// Handle buttons pressed
function buttonClicked(event) {
  const id = event.target.id;
  let buttonValue = 0;
  let isOperator = false;
  let isEqual = false;

  buttonValue = valueFromIndex(id);

  if (buttonValue == -1) {
    if (id == "times") {
      buttonValue = "* ";
      isOperator = true;
    }
    else if (id == "divided") {
      buttonValue = "÷ ";
      isOperator = true;
    }
    else if (id == "add") {
      buttonValue = "+ ";
      isOperator = true;
    }
    else if (id == "subtract") {
      buttonValue = "- ";
      isOperator = true;
    }
    else if (id == "sum") {
      buttonValue = "=";
      isEqual = true;
    }
  }
  

  
  output(buttonValue,isOperator,isEqual);

}


  let tall1 = "";
  let tall2 = "";
  let svar = "";
  let operator = "";
  let equal = "";
// Send a value to the output
function output(value, isOperator, isEqual) {
  if (isEqual == false && isOperator == false && operator.length < 1) {
    tall1 += value;
  }
  else if (isEqual == false && equal.length < 1 && isOperator == false && operator.length == 2) {
    tall2 += value;
  }
  else if (isEqual == true && equal.length == 0) {
    equal += value;
    tall1 = parseFloat(tall1);
    tall2 = parseFloat(tall2);
    svar = cal(tall1,tall2,operator);

  }
  else if (isOperator == true) {
    operator = value;
  }
  let curent = document.getElementById("output").innerHTML;
  if (isOperator) {
    document.getElementById("output").innerHTML = operator;
  }
  else if (isEqual) {
    document.getElementById("output").innerHTML = svar;
  }
  else {
    document.getElementById("output").innerHTML = curent + value;
  }
  console.log (tall1);
  console.log (tall2);
  console.log (operator);
  console.log (svar);

}

function cal(tall1,tall2,operator) {
  if (operator === "+ ") {
    return tall1 + tall2;
  }
  else if (operator === "- ") {
    return tall1 - tall2;
  }
  else if (operator === "* ") {
    return tall1 * tall2;
  }
  else {
    return tall1 / tall2;
  }
}
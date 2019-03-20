// Setup
const buttons = document.getElementsByTagName("button");

for (let button of buttons) {
  button.onclick = buttonClicked;
}

const numbermap = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  decimal: ".",
};


function valueFromIndex(index) {
  if (!numbermap.hasOwnProperty(index)) {
    return -1;
  }
  return numbermap[index];
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
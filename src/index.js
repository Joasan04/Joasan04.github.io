// Setup
const buttons = document.getElementsByTagName("button");
const caButton = document.getElementById("ca");

for (let button of buttons) {
  button.onclick = buttonClicked;
}
caButton.onclick = wipe;

document.onkeyup = function(event){
  let keyDigits = [
    "0","1","2","3","4","5","6","7","8","9"
  ];
  let keyOperators = [
    "+","*","/","-"
  ];
  let keyDecimal = [
    ","
  ];
  let keyEnter = [
    "Enter"
  ];
  let backSpace = [
    "Backspace"
  ];
  if (keyDigits.indexOf(event.key) != -1) {
    output(event.key,false,false,false);
  }
  else if (keyOperators.indexOf(event.key) != -1) {
    output(event.key + " ",true,false,false);
  }
  else if (keyDecimal.indexOf(event.key) != -1) {
    output(".",false,false,true);
  }
  else if (keyEnter.indexOf(event.key) != -1) {
    output("= ",false,true,false);
  }
  //FIXA!!!!
  else if (backSpace.indexOf(event.key) != -1) {
    if (operator != null) {
      tall2 = tall2.slice(0, tall2.length-1);
    }
    tall1 = tall1.slice(0, tall1.length-1);
  }
};

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
  event.target.blur();
  let buttonValue = 0;
  let isOperator = false;
  let isEqual = false;
  let isDecimal = false;

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
    else if (id == "decimal") {
      buttonValue = ".";
      isDecimal = true;
    }
  }
  output(buttonValue,isOperator,isEqual,isDecimal);
}


let tall1 = "";
let tall2 = "";
let operator = null;
let decimal = "";
let equal = null;
// Send a value to the output
function output(value, isOperator, isEqual, isDecimal) {
  let svar = 0;
  //check if number
  if (isEqual == false && isOperator == false) {
    if (operator == null) {
      if (isDecimal && tall1.indexOf(".") != -1) {
        return;
      }
      tall1 += value;
    }
    else {
      if (isDecimal && tall2.indexOf(".") != -1) {
        return;
      }
      tall2 += value;
    }
  }
  else if (isOperator == true) {
    operator = value;
  }
   else if (isEqual == true && equal == null) {
    equal += value;
    tall1 = parseFloat(tall1);
    tall2 = parseFloat(tall2);
    svar = cal(tall1,tall2,operator);
    svar = svar.toFixed(2);
    tall1 = svar;
  }

  let curent = document.getElementById("output").innerHTML;
  if (isOperator) {
    document.getElementById("output").innerHTML = operator;
  }
  else if (isEqual) {
    document.getElementById("output").innerHTML = tall1;
    tall2 = "";
    operator = null;
    equal = null;
    decimal = "";
  }
  else {
    document.getElementById("output").innerHTML = curent + value;
  }
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

function wipe(event) {
  tall1 = "";
  tall2 = "";
  svar = null;
  equal = null;
  operator = null;
  decimal = "";
  document.getElementById("output").innerHTML = "";
}
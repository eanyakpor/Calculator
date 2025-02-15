
const display = document.querySelector('.grid-input');

// good pratice for larger codebases 
let numberStored = "";
let operatorStored = "";
let previousNumber = "";

function add(num1,num2) {
	return (num1 + num2);
}
function subtract(num1,num2) {
	return (num1 - num2);
}
function multiply(num1,num2) {
	return (num1 * num2);
}
function divide(num1,num2) {
	try { 
		return (num1 / num2);
	}
	catch (error) {
		alert('Cannot divide a number by 0.');
	}
}

function dotOperator(dOperator) {
	// Prevent multiple dots in the current number
    if (numberStored.includes(".")) return;

    // If numberStored is empty, start with "0."
    if (numberStored === "") {
        numberStored = "0.";
    } else {
        numberStored += ".";
    }

    // Update the display
    display.textContent = numberStored;
}
/*
	1.	Handles leading zeros properly (so 05 doesn’t happen).
	2.	Updates the display text (so numbers appear on screen).
	3.	Stores the current number separately for later calculations.
*/
function updateDisplay(num) {
	if (display.textContent === "0") {
		display.textContent = num; 
	}
	else { 
		display.textContent = num; 
	}
	numberStored += num;	
}

function updateOperator(operator) {
	if (numberStored === "") {
		return; 
	}
	previousNumber = numberStored; 
	operatorStored = operator; 
	numberStored = "";
	display.textContent += ` ${operator} `;
}

function calculateResult() {
	// since this is being updated dunamically by the user 
	// these variables may not always be empty 
	if (previousNumber === "" || numberStored === "") {
		return; 
	}
	let num1 = parseFloat(previousNumber);
	let num2 = parseFloat(numberStored);
	let result = 0 
	switch(operatorStored) {
		case "+":
			result = add(num1,num2);
			break;
			case "-":
				result = subtract(num1,num2);
				break;
			case "*":
				result = multiply(num1,num2);
				break;
			case "/":
				result = divide(num1,num2);
				break;
					
	}
			display.textContent = result; 
			numberStored = result.toString();
			previousNumber = "";
			operatorStored = "";
				
	

}		

function clearDisplay() {
	// reset display to 0 here 
	display.textContent = "0";
	numberStored = "";
	operatorStored = "";
	previousNumber = "";
}
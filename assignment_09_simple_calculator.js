// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require("readline-sync");

/**
 * Adds two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The result of a minus b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 *
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number|null} The quotient, or null if b is zero.
 */
function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

/**
 * Computes the remainder of a divided by b.
 *
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number|null} The remainder, or null if b is zero.
 */
function modulus(a, b) {
  if (b === 0) {
    return null;
  }
  return a % b;
}

/**
 * Raises a to the power of b.
 *
 * @param {number} a - The base.
 * @param {number} b - The exponent.
 * @returns {number} a raised to the power of b.
 */
function exponentiate(a, b) {
  return a ** b;
}

/**
 * Displays the calculator's main menu.
 */
function printMenu() {
  console.log("\n============================");
  console.log("     SIMPLE CALCULATOR");
  console.log("============================");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Modulus");
  console.log("6. Exponentiation");
  console.log("7. Quit");
}

/**
 * Prompts the user for two numbers, applies the given operation, and
 * prints the result. Handles the division-by-zero case for operations
 * that return null.
 *
 * @param {string} symbol - The operator symbol to display (e.g. "+").
 * @param {(a: number, b: number) => number|null} operation - The
 *   operation function to apply to the two numbers.
 */
function performOperation(symbol, operation) {
  const a = readlineSync.questionFloat("Enter first number : ");
  const b = readlineSync.questionFloat("Enter second number: ");

  const result = operation(a, b);

  if (result === null) {
    console.log("Error: Cannot divide by zero.");
    return;
  }

  console.log(`Result: ${a} ${symbol} ${b} = ${result.toFixed(2)}`);
}

/**
 * Runs the main menu loop, reading the user's choice and dispatching
 * to the matching operation until the user chooses to quit.
 */
function main() {
  let running = true;

  while (running) {
    printMenu();
    const choice = readlineSync.questionInt("Select an operation (1-7): ");

    switch (choice) {
      case 1:
        performOperation("+", add);
        break;
      case 2:
        performOperation("-", subtract);
        break;
      case 3:
        performOperation("*", multiply);
        break;
      case 4:
        performOperation("/", divide);
        break;
      case 5:
        performOperation("%", modulus);
        break;
      case 6:
        performOperation("**", exponentiate);
        break;
      case 7:
        console.log("Goodbye!");
        running = false;
        break;
      default:
        console.log("Error: Please enter a number between 1 and 7.");
    }
  }
}

main();



// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 1
// =============================================================================
//
// TASK: Prime Number Checker
//
// Write a JavaScript program that checks whether a given number is prime.
//
// A prime number is a whole number greater than 1 that has no divisors
// other than 1 and itself (e.g., 2, 3, 5, 7, 11, 13 ...).
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_01_prime_checker.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLES
// -----------------------------------------------------------------------------
//
//   Enter a number: 7
//   7 is a prime number.
//
//   Enter a number: 10
//   10 is NOT a prime number.
//
//   Enter a number: 1
//   1 is NOT a prime number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement the logic inside a function (see scaffold below).
// - Numbers less than 2 are NOT prime — handle this inside the function.
// - The main() function must call isPrime() and print the result.
// - Use readlineSync.questionInt() to read integer input from the user.
//

const readlineSync = require("readline-sync");

/**
 * Checks whether a given whole number is prime.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} true if num is prime, false otherwise.
 */
function isPrime(num) {
  // Numbers less than 2 are never prime.
  if (num < 2) {
    return false;
  }

  // 2 is the only even prime number.
  if (num === 2) {
    return true;
  }

  // Eliminate other even numbers quickly.
  if (num % 2 === 0) {
    return false;
  }

  // Only need to check odd divisors up to the square root of num.
  // If num had a divisor larger than its square root, it would also
  // have a corresponding divisor smaller than the square root.
  for (let divisor = 3; divisor <= Math.sqrt(num); divisor += 2) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
}

/**
 * Reads a number from the user, checks whether it is prime,
 * and prints the result.
 */
function main() {
  const number = readlineSync.questionInt("Enter a number: ");

  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is NOT a prime number.`);
  }
}

main();



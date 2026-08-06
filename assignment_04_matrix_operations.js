// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * Prompts the user for a matrix's dimensions and row values.
 *
 * @param {string} label - A name for the matrix, used in prompts (e.g. "A").
 * @returns {number[][]} The matrix entered by the user.
 */
function readMatrix(label) {
  const rows = readlineSync.questionInt(`Enter number of rows for Matrix ${label}: `);
  const cols = readlineSync.questionInt(`Enter number of columns for Matrix ${label}: `);

  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const line = readlineSync.question(`Enter row ${i + 1}: `);
    const rowValues = line.trim().split(/\s+/).map(Number);
    matrix.push(rowValues);
  }

  return matrix;
}

/**
 * Prints a matrix in a neat, aligned grid format.
 *
 * @param {number[][]} matrix - The matrix to display.
 */
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let rowText = "";
    for (let j = 0; j < matrix[i].length; j++) {
      // Pad each value to a fixed width so columns line up.
      rowText += String(matrix[i][j]).padStart(5);
    }
    console.log(rowText);
  }
}

/**
 * Computes the transpose of a matrix (rows become columns).
 *
 * @param {number[][]} matrix - The M x N matrix to transpose.
 * @returns {number[][]} The transposed N x M matrix.
 */
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

/**
 * Adds two matrices of the same size element-wise.
 *
 * @param {number[][]} a - The first matrix (M x N).
 * @param {number[][]} b - The second matrix (M x N).
 * @returns {number[][]|null} The resulting M x N sum matrix, or null if the
 *                             matrices don't have matching dimensions.
 */
function addMatrices(a, b) {
  if (a.length !== b.length || a[0].length !== b[0].length) {
    return null;
  }

  const result = [];
  for (let i = 0; i < a.length; i++) {
    const newRow = [];
    for (let j = 0; j < a[0].length; j++) {
      newRow.push(a[i][j] + b[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

/**
 * Multiplies two matrices: A (M x N) times B (N x P).
 *
 * @param {number[][]} a - The first matrix (M x N).
 * @param {number[][]} b - The second matrix (N x P).
 * @returns {number[][]|null} The resulting M x P product matrix, or null if
 *                             A's column count doesn't match B's row count.
 */
function multiplyMatrices(a, b) {
  const aRows = a.length;
  const aCols = a[0].length;
  const bRows = b.length;
  const bCols = b[0].length;

  if (aCols !== bRows) {
    return null;
  }

  const result = [];
  for (let i = 0; i < aRows; i++) {
    const newRow = [];
    for (let j = 0; j < bCols; j++) {
      let sum = 0;
      for (let k = 0; k < aCols; k++) {
        sum += a[i][k] * b[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }

  return result;
}

/**
 * Runs Part A: reads a matrix, transposes it, and displays both.
 */
function runPartA() {
  console.log("\n--- Part A: Transpose a Matrix ---");
  const matrix = readMatrix("");

  console.log("\nOriginal Matrix:");
  printMatrix(matrix);

  console.log("\nTransposed Matrix:");
  printMatrix(transposeMatrix(matrix));
}

/**
 * Runs Part B: reads two matrices, adds them, and displays the result.
 */
function runPartB() {
  console.log("\n--- Part B: Add Two Matrices ---");
  const a = readMatrix("A");
  const b = readMatrix("B");

  const sum = addMatrices(a, b);

  if (sum === null) {
    console.log("Error: Matrices must have the same dimensions to add.");
    return;
  }

  console.log("\nMatrix A:");
  printMatrix(a);
  console.log("\nMatrix B:");
  printMatrix(b);
  console.log("\nA + B:");
  printMatrix(sum);
}

/**
 * Runs Part C: reads two matrices, multiplies them, and displays the result.
 */
function runPartC() {
  console.log("\n--- Part C: Multiply Two Matrices ---");
  const a = readMatrix("A");
  const b = readMatrix("B");

  const product = multiplyMatrices(a, b);

  if (product === null) {
    console.log("Error: Number of columns in A must equal number of rows in B.");
    return;
  }

  console.log("\nMatrix A:");
  printMatrix(a);
  console.log("\nMatrix B:");
  printMatrix(b);
  console.log("\nA x B:");
  printMatrix(product);
}

/**
 * Runs all three matrix operation demos in sequence.
 */
function main() {
  runPartA();
  runPartB();
  runPartC();
}

main();


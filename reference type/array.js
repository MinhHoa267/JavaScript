/**
 * ==============================
 * LESSON: Array
 * ==============================
 * 1. Lưu data khác type
 * 2. Bắt buộc phải liên tục
 * ==============================
 */

// syntax:
const arr = [];
// data type: object ???
// arr = [1,2,3] // Uncaught TypeError: Assignment to constant variable.

let arr2 = [1, 2, "three", true, null, undefined];

// build-in method: length
arr2.length;

// EXAMPLE:
let selectedColor = ["RED", "BLUE", "GREEN"];
console.log(selectedColor);
console.log(selectedColor[1]);

selectedColor[2] = "YELLOW";

let colorObject = {
  0: "RED",
  1: "BLUE",
  2: "GREEN",
  length: 3,
};

console.log(colorObject);

/**
 * ==============================
 * LESSON: FUNCTIONS
 * ==============================
 * 1. Có Return
 * 2. Không Return
 * ==============================
 */

// NOTE: 1. Return
// syntax: CamelCase
function sum(n) {
  return n * n;
}

// NOTE: 1. Không Return
function f() {
  console.log("Function without return");
}
f();

function person(firstName = "Donald", lastName = "Trump") {
  console.log(firstName + " " + lastName);
  console.log(firstName, lastName);
}

person("Joe", "Biden");

// WARNING:
function func(a, b, c) {
  let y = 1;
  const sum = a + b + c + y;
  return sum;
}

console.log(func(1,2,3))
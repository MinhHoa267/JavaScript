/**
 * ==============================
 * LESSON: OPERATORS
 * ==============================
 */

let x = 10;
const y = 5;

// toán tử số học:
let result = x > y; // true
result = x < y; // false

result = x * y; // + - /
result = x % y;

// toán tử gán:
result += 1; // *= /= -=

// logical operator
// && || !

// EXAMPLE:
true && true; // true
true && false; // false
false && false; // false

true || true; // true
true || false; // true
false || false; // false

// EXAMPLE:

!((true && false) || (!true && !false)); // ???
!false;
// khong Khuyến khích.

// ternary
// syntax
// if (condition) { true || false}
// condition ? true : false

let points = 100;
let type = (points > 80) ? "Gold" : "Silver";
points = 50;
type = (points > 80) ? "Gold" : "Silver";
console.log(type)

// combine logical & boolean:
console.log(undefined || 1)

console.log(undefined || 1 || 2)

console.log(undefined || undefined || 2)

let userColor = "White"
let defaultColor = "Black";

userColor = undefined;
currentColor = userColor || defaultColor
console.log(currentColor)

// falsy:
// undefined, null, false, "", 0, NaN
// truthy:
// tất cả giá trị còn lại mà không phải falsy

// Bit-Wise Operator:
// EXAMPLE:
console.log(1 | 2) // 3
// 1 = 0000 0001 
// 2 = 0000 0010
// 3 = 0000 0011
// true || false => true
// 1 || 0 => 1

console.log(1 & 2) // 0
// 1 = 0000 0001 
// 2 = 0000 0010
// 3 = 0000 0000
// true && false => false
// 1 && 0 => 0

// EXAMPLE:
let read = 4; // 0000 0100
let write = 3;
let isDelete = 2;

let myPermission = 0;
myPermission = myPermission | read | write
console.log(myPermission)
myPermission = myPermission & read
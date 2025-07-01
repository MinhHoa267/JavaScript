/**
 * ==============================
 * LESSON: Control Flow
 * ==============================
 * 1. if/else/else if
 * ==============================
 */

// EXAMPLE:
// 1. 6am - 12pm : "Good Morning"
// 2. 12pm - 6pm : "Good Afternoon"
// 3. 6pm - 6am : "Good Evening"

let hour = 9999;

if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else if (hour < 24) {
  console.log("Good Evening");
} else {
  console.log("Please input 24 hours only.");
}

// 2. SWITCH...CASE
// EXAMPLE:
// kiểm tra Role:
// "GUEST", "ADMIN", "ANONYMOUS"
// Syntax:
// switch(option){
//  case:....
//  default:...
//}

let role = "GUEST"; // undefined.

switch (role) {
  case "GUEST":
    console.log("You Are GUEST!");
    break;
  case "ADMIN":
    console.log("You Are ADMIN!");
    break;
  default:
    console.log("You Are ANONYMOUS!");
}

/**
 * ==============================
 * LESSON: LOOPS
 * ==============================
 * 1. FOR
 * 2. WHILE
 * 3. DO...WHILE
 * ==============================
 */

// 1. for loops:
let i = 0;
for (i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // 4 || 5 || is not defined

// 2. while:
while (i < 5) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// 3. do...while loops
do {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
} while (i < 5);

// 4. vòng lặp for..in
const Person = {
    myName: "Donal Trump",
    myAce: 78

};


// loops


const myColors = ["red", "green", "blue"];
for (const color of myColors)
{
    console.log(color);
}

// Break & continue

let a = 0;
while (i <= 10)
{
    if (i === 6)
    break;
    console.log(i);
    i++
}


// skip số 5
while (i <= 10)
{
    if (i === 5)
    break;
    console.log(i);
    i++
}


/**
 * ======================
 * LESSON: Objects
 * ======================
 */

// EXAMPLE: 
const person = 
{ myName : "Joe Biden",
 myAge : 85,
 isMarrage : true,
 isPresident : false,
 isChair : undefined,
 isProperties : null,
};
person["myCar"] = "Toyota";

function countMoney()
{
  console.log("$5000");
}
person.countMoney = function () 
{
  console.log("$5000");
}
console.log(person);

// EXAMPLE: khởi tạo obj sử dụng funtion
// Funtion Factory: obj
// camelCase
function personFactory(
  myNames,
  myAges,
  isMarrages,
  isPresidents,
  isChairs,
  isProperty)
{
  return {
  myName :  myNames,
  myAge : myAges,
  isMarrage : isMarrages,
  isPresident : isPresidents,
  isChair : isChairs,
  isProperties :  isProperty,
draw: function()
{
  console.log("Joe Face");
}}
}

const currentPresident = personFactory("Donal Trump", 18, true, true,true,"$5")

// Function Constructor.
// named = pascal (viết hoa chữ cái đầu)
function Circle(r)
{
  this.radius = r;
  this.draw = function () {
    console.log("Vẽ hình tròn");};
}
const myCircle = new  Circle(5);

/**
 * ==================
 * NOTE:
 * ==================
 * 1. CRUD obj
 */
// Add Property:
// syntax:
// objname.propertyNamde = "Property_Value"

// Delete property
// syntax
// delete propertyName;
delete myCircle.radius
/**
 * ==================
 * NOTE:
 * ==================
 * 1. Constructor Properties
 */

function Circle2(r)
{
  return (this.area = r * r * Math.PI);
}
Circle2(5);

const xyz = new Object("String")
let jk = xyz.toLowerCase()

// liệt kê tất cả properties của currentPresident
for(let key of Object.keys(currentPresident))
{
  console.log(key);
}

// Clone obj
// 1. Sử dụng for...in
let cloneCurPre = {}

for (const key in currentPresident) {
 cloneCurPre[key] = currentPresident[key];
}

// 2. sử dụng obj root 
let cloneCurPre2 = Object.assign({},currentPresident);

// 3. sử dụng cú pháp "..." (spread operator)
let cloneCurPre3 = {...currentPresident};

/**
 * ============
 * LESSON: Garbage Collector - Auto
 * ============
 * c language: free()
 * js: automatically.
 */

/**
 * LESSON: Math
 * =======================
 * link: 
 */
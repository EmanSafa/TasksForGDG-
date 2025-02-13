// Replace ? With Arithmetic Operators
console.log(10 - 20 + 15 - 3 - 190 + 10 - 400); // 0
//حاولت كتير ما بتظبطش
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let num = 3;
// Solution One
console.log(num * (true + true)); // 6

// Solution Two
console.log(num + num); // 6

// Soultion Three
console.log(num * num - num); // 6

// Soultion Four
console.log(num + Math.round(Math.PI)); // 6

// Solution Five
console.log(Math.max(num, num * num - num)); // 6

// Solution Six
console.log(Math.pow(num, --num) - ++num); // 6

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let num2 = "10";

// Solution One
console.log(+num2 * (true + true)); // 20

// Solution Two
console.log(parseInt(num2) + parseInt(num2)); // 20

// Solution Three
console.log(+num2 + +num2); // 20

// Solution Four
console.log(Number(num2) + Number(num2)); // 20

// Solution Five
console.log(num2.length * num2);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let points = 10;

points += true + true + true;
console.log(points); // 13

points -= Math.round(Math.PI) + true + true;
console.log(points); // 8;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Videos (23-26)

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100000.0); // 100000
console.log(parseInt("100000")); // 100000
console.log(10e4); // 100000
console.log(Number(100000)); // 100000
console.log(Math.floor(100000.2)); // 100000
console.log(Math.round(100000.2)); // 100000
console.log(Math.max(100000, 7)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(10 ** 6); // 100000
console.log(50 * 2000); // 100000

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let num3 = 10;

console.log(+Number.isInteger(num3) + num3 / num3); // 2

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(Math.random() * 4 + 0); // 0 || 1 || 2 || 3 || 4

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Videos (27-30)

let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.substr(3, 1)); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

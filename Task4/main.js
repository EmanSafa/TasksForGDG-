// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    FROM 31 TO 39   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Task: Currency Formatter

function toCurrency(num) {
  return "$" + parseFloat((num * 0.01973).toFixed(2));
}
let result = toCurrency(400);
console.log(result);

//Task: Check for Prime Number
function isPrime(givenValue) {
  if (givenValue < 2) {
    console.log(`${givenValue} is Not a Prime Number`);
    return;
  }
  for (let i = 2; i <= givenValue - 1; i++) {
    if (givenValue % i === 0) {
      console.log(`${givenValue} Is Not a Prime Number`);
      return;
    }
  }
  console.log(`${givenValue} Is a Prime Number`);
}
isPrime(1);
isPrime(5);
isPrime(4);

//Task: Reverse a Number

function reverseNumber(numbers) {
  return parseInt(numbers.toString().split("").reverse().join(""));
}
console.log(reverseNumber(123456789));

//Task: Generate Random Number within a Range
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNumber(3, 18));

//Task: Capitalize Each Word
function capitalizeFirstLetter(sentence) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(capitalizeFirstLetter("eman safa metwally"));

//Task: Grade Calculator (With if statement)
function gradeCalc(grade) {
  if (grade >= 90 && grade <= 100) {
    return "A";
  } else if (grade >= 80 && grade <= 90) {
    return "B";
  } else if (grade >= 70 && grade <= 79) {
    return "C";
  } else if (grade >= 60 && grade <= 69) {
    return "D";
  } else if (grade >= 0 && grade <= 59) {
    return "F";
  }
}
console.log(gradeCalc(60));
console.log(gradeCalc(90));
console.log(gradeCalc(84));

//Task: Temperature Adviser (with ternary operator)

function tempAdviser(temp) {
  if (temp <= 10) {
    return "recommend wearing a coat";
  } else if (temp > 10 && temp <= 20) {
    return "recommend wearing a sweater";
  } else {
    return "recommend wearing a T-shirt";
  }
}
console.log(tempAdviser(20));
console.log(tempAdviser(2));

//Task: Calculator (with switch)
function calculator(num1, num2, exp) {
  switch (exp) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    default:
      return "Error: Invalid operator";
  }
}
console.log(calculator(3, 6, "+"));
console.log(calculator(9, 3, "/"));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~    FROM 40 TO 46   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//01

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(myFriends.indexOf("Ahmed"), num)); // ["Ahmed", "Elham", "Osama"];

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~02
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.splice(friends.indexOf("Eman"), friends.indexOf("Osama"))); // ["Eman", "Osama"]

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~03
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [
  arrTwo.pop(),
  ...arrOne.reverse(),
  ...arrTwo.slice(-arrTwo.length).reverse(),
];
// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~04
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words[words.length - words.indexOf("Facebook")][0]
    .slice(website.length)
    .toUpperCase()
); // ZERO

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~05
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle, 1)) {
  console.log("Found");
}
if (haystack[1] == needle) {
  console.log("Found");
}
if (haystack.slice(1, 2) == needle) {
  console.log("Found");
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~06

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs.push(
  arr2[arr1.length - arr1.indexOf("C")]
    .concat(arr1.slice(arr1.length - arr1.indexOf("C")))
    .concat(arr2[arr1.length])
);
console.log(allArrs.join().toLowerCase()); // fxy

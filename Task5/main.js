//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~from 48 to 56~~~~~~~~~~~
let container = document.querySelector(".container");
let firstTask = document.querySelector(".firstTask");
let div1 = document.querySelector(".div-01");
let div2 = document.querySelector(".div-02");
let div3 = document.querySelector(".div-03");
let div4 = document.querySelector(".div-04");
let div5 = document.querySelector(".div-05");
let div6 = document.querySelector(".div-06");
let div7 = document.querySelector(".div-07");

//01
let output1 = "";
let start = 10;
let end = 100;
let exclude = 40;
/*
10;
20;
30;
50;
60;
70;
80;
90;
100;
*/
for (let i = start; i <= end; i += 10) {
  if (i === exclude) {
    continue;
  }
  output1 += i + " ";
}
div1.textContent = output1.trim();

//02
let output2 = " ";
let start2 = 10;
let end2 = 0;
let stop2 = 3;

/*output
10
09
08
07
06
05
04
03
*/

for (let j = start2; j >= end2; j--) {
  if (j < 10) {
    output2 += "0" + j + " ";
  } else {
    output2 += j + " ";
  }
  if (j === stop2) {
    break;
  }
}
div2.textContent = output2.trim();

//03
let output3 = " ";
let start3 = 1;
let end3 = 6;
let breaker = 2;

// Output
/*
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/

for (let i = start3; i <= end3; i++) {
  output3 += `${i}\n --2\n --4\n`;
}
div3.textContent = output3.trim();

//04
// Output
/*
10;
8;
6;
4;
*/
let output4 = "";
let index = 10;
let jump = 2;

for (;;) {
  if (index <= jump) break;
  output4 += index + " ";
  index -= jump;
}
div4.textContent = output4.trim();

//05
// Output
/*
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let output5 = "";
let indexCount = letter.length;

for (let i = letter.length; i < friends.length; i++) {
  if (friends[i].charAt(0).toLowerCase() === letter.toLowerCase()) {
    continue;
  }
  output5 += `"${indexCount} => ${friends[i]}"\n`;
  indexCount++;
}
div5.textContent = output5.trim();

//06
// Output :  "ELzERo"

let start6 = 0;
let swappedName = "elZerO";
let output6 = "";

for (let i = start6; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    output6 += swappedName[i].toLowerCase();
  } else {
    output6 += swappedName[i].toUpperCase();
  }
}
div6.textContent = output6.trim();

//07
// Output
/*
2
3
4
*/

let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
let output7 = "";
start7++;
for (let i = start7; i <= mix.length; i++) {
  if (Number(mix[i])) {
    output7 += `${mix[i]}\n`;
  }
}
div7.textContent = output7.trim();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~from 057 to 063~~~~~~~~~~~
let container2 = document.querySelector(".container2");
let div11 = document.querySelector(".div-11");
let div22 = document.querySelector(".div-12");
let div33 = document.querySelector(".div-13");
let div44 = document.querySelector(".div-14");
let div55 = document.querySelector(".div-15");
let div66 = document.querySelector(".div-16");

//01
let result = " ";
function sayHello(theName, theGender) {
  // Your Code Here
  if (theGender === "Male") {
    result += `"Hello Mr ${theName}"\n`;
  } else if (theGender === "Female") {
    result += `"Hello Miss ${theName}"\n`;
  } else {
    result += `"Hello ${theName}"\n`;
  }
  div11.textContent = result;
  return result;
}

sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//02
let result2 = 0;
function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (operation === "add") {
    result2 = firstNum + secondNum;
  } else if (operation === "subtract") {
    result2 = firstNum - secondNum;
  } else if (operation === "multiply") {
    result2 = firstNum * secondNum;
  } else if (secondNum === undefined) {
    div22.textContent = "Second Number Not Found";
    return;
  } else {
    result2 = firstNum + secondNum;
  }
  div22.textContent = result2;
  return result2;
}

// Needed Output
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
calculate(20); // Second Number Not Found

//03
let result3 = " ";
function ageInTime(theAge) {
  // Your Code Here
  if (theAge > 10 && theAge < 100) {
    result3 += `Age in Months  => ${theAge * 12}\n`;
    result3 += `Age in Weeks   => ${Math.floor(theAge * 52.176)}\n`;
    result3 += `Age in Days    => ${Math.floor(theAge * 365.25)}\n`;
    result3 += `Age in Minutes  => ${Math.floor(theAge * 365.25 * 24 * 60)}\n`;
    result3 += `Age in Seconds  => ${Math.floor(
      theAge * 365.25 * 24 * 60 * 60
    )}\n`;
    div33.textContent = result3;
  } else {
    div33.textContent = "Age Out Of Range";
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); //Age in Months  => 456 Months

//04
let result4 = "";
function checkStatus(a, b, c) {
  let name, age, isAvailable;
  // Your Code Here
  if (typeof a === "string") {
    name = a;
  } else if (typeof b === "string") {
    name = b;
  } else {
    name = c;
  }
  if (typeof a === "number") {
    age = a;
  } else if (typeof b === "number") {
    age = b;
  } else {
    age = c;
  }
  if (typeof a === "boolean") {
    isAvailable = a;
  } else if (typeof b === "boolean") {
    isAvailable = b;
  } else {
    isAvailable = c;
  }
  if (isAvailable) {
    result4 += `Hello ${name} , Your Age Is ${age} , You Are Available For Hire\n`;
  } else {
    result4 += `Hello ${name} , Your Age Is ${age} , You Are Not Available For Hire\n`;
  }
  div44.textContent = result4;
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//05
let result5 = " ";
function createSelectBox(startYear, endYear) {
  // Your Code Here
  let select = document.createElement("select");
  for (let i = startYear; i <= endYear; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
  }
  div55.appendChild(select);
}
createSelectBox(2000, 2021);

//06
function multiply(...args) {
  let result6 = 1;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "number") {
      result6 *= parseInt(args[i]);
    }
  }
  div66.textContent = result6;
  return result6;
}
multiply("A", 10, 30); // 300
multiply(10, 20); // 200
multiply(100.5, 10, "B"); // 1000

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~from 64 to 70~~~~~~~~~~~
let container3 = document.querySelector(".container3");
let div111 = document.querySelector(".div-21");
let div222 = document.querySelector(".div-22");
let div333 = document.querySelector(".div-23");
let div444 = document.querySelector(".div-24");

//01
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    let parts = zName.split(" ");
    if (parts.length < 2) return zName;
    return `Hello ${parts[0]} ${parts[1][0].toUpperCase()}. ,`;
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
    let parts = zAge.split(" ");
    return `Your Age Is ${parts[0]} ,`;
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY

    return `You Live In ${zCountry[0].toUpperCase()}${zCountry[1].toUpperCase()}`;
  }
  function fullDetails() {
    // Write Your Code Here
    return `${namePattern(zName)}${ageWithMessage(zAge)}${countryTwoLetters(
      zCountry
    )}`;
  }
  div111.textContent = fullDetails();
}

getDetails("Osama Mohamed", "38 Is My Age", "Egypt");
// Hello Osama M., Your Age Is 38, You Live In EG

getDetails("Ahmed ali", "32 Is The Age", "Syria");
// Hello Ahmed A., Your Age Is 32, You Live In SY

//02
let itsMe = () => {
  return `Iam A Normal Function`;
};

let urlCreate = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};

div222.textContent = `${itsMe()}\n${urlCreate("https", "elzero", "org")}`;

//03

let checker = (zName) => (status) => (salary) => {
  return status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;
};

div333.textContent = `${checker("Osama")("Available")(4000)}\n${checker(
  "Ahmed"
)("Not Available")()}`; // Osama, My Salary Is 4000

//04
function specialMix(...data) {
  let sum = 0;
  let hasNumber = false;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      sum += data[i];
      hasNumber = true;
    } else if (typeof data[i] === "string") {
      let num = parseInt(data[i]);
      if (!isNaN(num)) {
        sum += num;
        hasNumber = true;
      }
    }
  }
  return hasNumber ? sum : "All Is Strings";
}
div444.textContent = `${specialMix(10, 20, 30)}\n ${specialMix(
  "10Test",
  "Testing",
  "20Cool"
)}\n ${specialMix("Testing", "10Testing", "40Cool")}\n ${specialMix(
  "Test",
  "Cool",
  "Test"
)}`;

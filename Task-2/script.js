//   02
document.write(
  '<h1 style ="color:blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial;">Elzero</h1>'
);

// 03
console.log(
  " %cElzero %cWeb %cSchool",
  "color:red;font-size:40px",
  "color:green;font-size:40px;font-weight:bold;",
  "color:white;background-color: blue;font-size:40px;"
);

//04
console.group("Group1");
console.log("Message one");
console.log("Message two");
console.group(" Child Group");
console.log("Message one");
console.log("Message two");
console.group("Grand Child Group");
console.log("Message one");
console.log("Message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group2");
console.log("Message one");
console.log("Message two");

//05
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

//06

//Answer 1 => comment it by
/*
console.log("Iam In Console");
document.write("Iam In Page"); 
*/
//Answer 2 =>
if (false) {
  console.log("Iam In Console");
  document.write("Iam In Page");
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                                10 =>  17
*/

//01

// Add Variables Here
var numberOne = 10;
var numberTwo = 20;

// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberOne + "\n" + numberTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberOne} \n${numberTwo}`);
/*
  Template Literals Way
  20
  10
*/

//02
var elzero = ["GDG"];
elzero.innerHTML = "object";
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//03
let a = "Love";
let b = "With";
let c = "JavaScript";
console.log(
  "`I'm In " +
    "\n \\\\ \n " +
    a +
    "\\\\ " +
    '""" ' +
    "'''" +
    "\n" +
    " ++ " +
    b +
    " ++ \n" +
    ' \\"""\\""" \n' +
    ' ""' +
    c +
    '""`` '
);

//04
let A = 21;
let B = 20;

console.log(`_${A}_${B}${A}_${B}${A}_${B}${A}_${B}_`); // _21_2021_2021_2021_20_

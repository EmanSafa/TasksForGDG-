//~~~~~~~~~~~~~~~~~~~~~~~~~From 71 to 78~~~~~~~~~~~~~~~~~~

//01
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let filterString = mix
  .map((ele) => (isNaN(ele) ? ele : ""))
  .reduce((acc, curr) => acc + curr);
console.log(filterString);
// Elzero

//02

let myString = "EElllzzzzzzzeroo";
let filterRepeated = myString
  .split("")
  .filter((ele, index) => myString.indexOf(ele) === index)
  .join("");
console.log(filterRepeated);

// Elzero

//03

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray.reduce((acc, curr) =>
  typeof curr === "object" ? acc + curr.join("") : acc + curr
);
console.log(newArray);
// Elzero

//04
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let filtered = numsAndStrings.filter((ele) => !isNaN(ele)).map((ele) => -ele);
console.log(filtered);
// [-1, -10, 10, 20, -5, -3]

//05
let nums = [2, 12, 11, 5, 10, 1, 99];

// 500
let filterednums = nums.reduce((acc, curr) =>
  curr % 2 === 0 ? acc * curr : acc + curr
);
console.log(filterednums);

//~~~~~~~~~~~~~~~~~~~~~~~~~From 79 to 85~~~~~~~~~~~~~~~~~~
//01
// Create Your Object Here
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return "My Name Is Elzero, My Age Is 38, I Live in Egypt";
  },
};
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

//02
// Method One
// Create Your Object Here
let objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = {};
objMethodTwo.property = "Method Two";
console.log(objMethodTwo["property"]); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = new Object();
objMethodThree.property = "Method Three";

console.log(objMethodThree["property"]); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.create(objMethodThree);
objMethodFour.property = "Method Four";

console.log(objMethodFour.property); // "Method Four"

//03
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({ a }, threeNums, twoNums);

console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

//04
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
console.log(objectLength);

let objectKeys = Object.keys(myFavGames);
console.log(objectKeys);

for (let i = 0; i < objectLength; i++) {
  let gameName = objectKeys[i];
  let gameData = myFavGames[gameName];
  console.log(`The Game Name Is ${gameName}`);
  console.log(`The Publisher Is ${gameData.publisher}`);
    console.log(`The Price Is ${gameData.price}`);

  //   // Check If Nested Object Has Property (bestThree)
    if (gameData.bestThree) {
      console.log("- Game Has Releases");
      console.log(`First => ${gameData.bestThree.one}`);
      console.log(`Second => ${gameData.bestThree.two}`);
      console.log(`Third => ${gameData.bestThree.three}`);
    }
    console.log("#".repeat(20));
  // }
}

/*
"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"
*/

//~~~~~~~~~~~~~~~~~~~~~~~~From 123 To 133~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//01
myset = new Set([10]);
myset.add(20).add(myset.size);
console.group(myset);
console.log([...myset].pop());

//02
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let myUniqueFriends = new Set(myFriends);
console.log(myUniqueFriends);

//03
let myMap = new Map([
  ["username", "Osama"],
  ["role", "Admin"],
  ["country", "Egypt"],
]);
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));

//04
let theNumber = 100020003000;

console.log(
  +[...new Set(Array.from(theNumber.toString()))].filter((e) => +e).join("")
);

//05
let theName = "Elzero";
console.log([...theName]);
console.log(theName.split(""));
console.log(Array.from(theName));
console.log(Object.assign([], theName));
let arr = [];
for (let char of theName) arr.push(char);
console.log(arr);

//06
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// Needed Output['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
console.log(chars.copyWithin(3));

let charss = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// Needed Output['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
console.log(charss.copyWithin(3, 4, 6));
console.log(charss.copyWithin(6));
console.log(charss.copyWithin(4));

let charsss = ["Z", "Y", "A", "D", "E", 10, 1];
// Needed Output ["Z", "Y", "Z", "Y", "A", "D", "E"]
console.log(charsss.copyWithin(2));

//07
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
// Needed Output [1, 2, 3, 4, 5, 6]

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
numsOne.push(...numsTwo);
console.log(numsOne);

//08
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Needed Output: 210
console.log(Math.max(...n1) * [...n1, ...n2].length);

//~~~~~~~~~~~~~~~~~~~~~~~~From 134 To 146 ~~~~~~~~~~~~~~~~~~~~~~~~~~~
//01
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let regex = /\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/;
console.log(regex.test(ip));

//02
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// Output// ['Os10O', 'OsO', 'Os100O']
let re = /Os\d+o/i;
console.log(re.test(specialNames));

//03
let phone = "+(995)-123 (4567)";
let phoneRE = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/;
console.log(phoneRE.test(phone));

//04
let testre = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
//  (/https?:\/\/) => s? => http or https , :\/\/ => // but \ for sepration
//  (?:[-\w]+\.)? => a non-capturing group , one or more of - or word characters, followed by . character , ? all this is optional
//  ([-\w]+) => capturing group , one or more of - or word characters
//  \.\w+ => dot and one or more word characters
//  (?:\.\w+)? => a non-capturing group , dot and one or more word chars , )? => optional
//  \/?.*  => matches "/" , ? optional , dot matches any charcter , * zero or more

//05
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let dateRE = /\d{2}\s?(-|\/)?\s?\d{2}\s?(-|\/)?\s?\d+/; // Write Pattern Here

console.log(date1.match(dateRE)); // "25/10/1982"
console.log(date2.match(dateRE)); // "25 - 10 - 1982"
console.log(date3.match(dateRE)); // "25 10 1982"
console.log(date4.match(dateRE)); // "25 10 82"

//06
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let urRE = /(https?:\/\/)?(www.)?\w{6}.org.?/; // Write Your Pattern Here

console.log(url1.match(urRE));
console.log(url2.match(urRE));
console.log(url3.match(urRE));
console.log(url4.match(urRE));
console.log(url5.match(urRE));

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));

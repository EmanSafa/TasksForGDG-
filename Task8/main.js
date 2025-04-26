//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`From 102 TO 110 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//01
// let peomptMsg = prompt(`Print Number From - To `);
// if (peomptMsg) {
//   let numbers = peomptMsg.split("-").map((num) => parseInt(num.trim()));
//   if (numbers.length === 2 && !numbers.some(isNaN)) {
//     /*
//      my way =>
//     let min = parseInt(numbers[0]);
//     let max = parseInt(numbers[1]);
//     if (min > max) {
//       let temp = min;
//       min = max;
//       max = temp;
//     }*/

//     //new way to me =>
//     let [min, max] = numbers.sort((a, b) => a - b);
//     //
//     let firstDiv = document.createElement("div");
//     for (let i = min; i <= max; i++) {
//       let numbersInbetween = document.createElement("p");
//       numbersInbetween.textContent = i;
//       firstDiv.appendChild(numbersInbetween);
//       firstDiv.classList.add("firstDiv");
//       document.body.appendChild(firstDiv);
//     }
//   }
// }

/*
//02
let popUp = document.querySelector(".welcome-popup");
let exitButton = document.querySelector(".welcome-popup button");

setTimeout(() => {
  popUp.classList.remove("disappear");
}, 5000);

exitButton.onclick = () => {
  popUp.classList.add("disappear");
};
*/

/*
//03
let firstCounter = document.querySelector(".spanOfFirstCounter");
function countdown() {
  firstCounter.innerHTML -= 1;
  if (firstCounter.innerHTML === "0") {
    clearInterval(counter1);
  }
}
let counter1 = setInterval(countdown, 1000);

*/

/*
//04
let secondCounter = document.querySelector(".spanOfSecondCounter");
function countdown() {
  secondCounter.innerHTML -= 1;
  if (secondCounter.innerHTML === "5") {
    location.assign("https://elzero.org/");
  }
}
let counter2 = setInterval(countdown, 1000);
*/

/*
//05
let thirdCounter = document.querySelector(".spanOfThirdCounter");
function countdown() {
  thirdCounter.innerHTML -= 1;
  if (thirdCounter.innerHTML === "5") {
    window.open(
      "https://elzero.org/",
      "_blank",
      "width=600,height=400,left=400,top=100"
    );
  }
  if (thirdCounter.innerHTML === "0") {
    clearInterval(counter3);
  }
}
let counter3 = setInterval(countdown, 1000);
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~From 111 TO 114 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//01

let fontSelection = document.getElementById("fontSelect");
let colorSelection = document.getElementById("colorSelect");
let fontSizeSelection = document.getElementById("sizeSelect");

let textdemo = document.querySelector(".demo-text");

if (window.localStorage.getItem("color")) {
  textdemo.style.color = window.localStorage.getItem("color");
  fontSelection.value = window.localStorage.getItem("color");
}
if (window.localStorage.getItem("font")) {
  textdemo.style.fontFamily = window.localStorage.getItem("font");
  colorSelection.value = window.localStorage.getItem("font");
}
if (window.localStorage.getItem("fontSize")) {
  textdemo.style.fontSize = window.localStorage.getItem("fontSize") + "px";
  fontSizeSelection.value = window.localStorage.getItem("fontSize");
}

colorSelection.addEventListener("change", function () {
  textdemo.style.color = this.value;
  window.localStorage.setItem("color", this.value);
  console.log(this.value);
});
fontSelection.addEventListener("change", function () {
  textdemo.style.fontFamily = this.value;
  window.localStorage.setItem("font", this.value);
  console.log(this.value);
});
fontSizeSelection.addEventListener("change", function () {
  textdemo.style.fontSize = this.value + "px";
  window.localStorage.setItem("fontSize", this.value);
  console.log(this.value);
});

//02
let username = document.getElementById("username");
let age = document.getElementById("age");
let email = document.getElementById("email");
let languageSelection = document.getElementById("language");

if (sessionStorage.getItem("input-name")) {
  username.value = sessionStorage.getItem("input-name");
}
if (sessionStorage.getItem("user-age")) {
  age.value = sessionStorage.getItem("user-age");
}
if (sessionStorage.getItem("user-Email")) {
  email.value = sessionStorage.getItem("user-Email");
}
if (sessionStorage.getItem("fav-Lang")) {
  languageSelection.value = sessionStorage.getItem("fav-Lang");
}
username.onblur = function () {
  sessionStorage.setItem("input-name", this.value);
};
age.onblur = function () {
  sessionStorage.setItem("user-age", this.value);
};
email.onblur = function () {
  sessionStorage.setItem("user-Email", this.value);
};
languageSelection.onblur = function () {
  sessionStorage.setItem("fav-Lang", this.value);
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~From 115 TO 122 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//01
let myNumbers = [1, 2, 3, 4, 5];
let t1 = document.querySelector(".t1");
let [aa, , , , ee] = myNumbers;
let result = aa * ee;
t1.textContent = result;

//02
let t2 = document.querySelector(".t2");
let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];
let [a, b, c, [d, e, [f, g]]] = mySkills;
let result2 = `My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`;
t2.textContent = result2;
// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//03
let t3 = document.querySelector(".t3");

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];
let aaa = arr3[1];
let bbb = arr3[2];
let ccc = arr1[0];
let result3 = `My Best Friends: ${aaa}, ${bbb}, ${ccc}`;
t3.textContent = result3;
// My Best Friends: Shady, Mahmoud, Ahmed

//04
let t4 = document.querySelector(".t4");
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};
const {
  age: aaaa,
  working: w,
  country: cccc,
  hobbies: [h1, , h3],
} = member;
let result4 = `My Age Is ${aaaa} And Iam ${
  w ? "" : "Not"
} Working <br/>I Live in ${cccc} <br/>My Hobbies: ${h1} And ${h3}`;
t4.innerHTML = result4;

//05
//PLEASE SENT ME RIGHT CODE FOR RIGHT OUTPUT
let t5 = document.querySelector(".t5");
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

const { title: t, developer: dd, releases: releasesobj } = game;
const {
  "Oath In Felghana": o,
  "Ark Of Napishtim": aaaaa,
  Origin: or,
} = releasesobj;
const [u, j] = o;
const { US: u_price, JAP: j_price } = aaaaa;

// My Favourite Games Style Is YS Style
// And I Love Falcom Games
// My Best Release Is Oath In Felghana It Released in USA & Japan
// Although I Love Ark Of Napishtim
// Ark Of Napishtim Price in USA Is 20 USD
// Ark Of Napishtim Price in Japan Is 10 USD
// Origin Price Is 30 USD

let result5 = `My Favourite Games Style Is ${t} Style <br/>And I Love ${dd} Games<br/>My Best Release Is ${o} It Released in ${u} & ${j}<br/>
Although I Love ${aaaaa}<br/>${aaaaa} Price in USA Is ${u_price}<br/>${aaaaa} Price in Japan Is ${j_price}<br/>Origin Price Is ${or}`;
t5.innerHTML = result5;

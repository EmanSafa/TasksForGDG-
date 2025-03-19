//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~From 86 To 93~~~~~~~~~~~~~~~~~~~~~~
const title1 = document.querySelector(".element");
const title2 = document.querySelector("#elzero");
const title3 = document.getElementById("elzero");
const title4 = document.getElementsByClassName("element")[0];
const title5 = document.querySelectorAll(".element")[0];
const title6 = document.querySelectorAll("#elzero")[0];
const title7 = document.getElementsByName("js")[0];
const title8 = document.getElementsByTagName("div")[0];
const title9 = document.querySelector("div");
const title10 = document.querySelectorAll("div")[0];
const title11 = document.querySelector('[name="js"]');
const title12 = document.querySelectorAll('[name="js"]')[0];
const title13 = document.body.firstChild.nextSibling;
const title14 = document.querySelector("[name='js']").closest("div");
console.log(title1);
console.log(title2);
console.log(title3);
console.log(title4);
console.log(title5);
console.log(title6);
console.log(title7);
console.log(title8);
console.log(title10);
console.log(title11);
console.log(title12);
console.log(title13);
console.log(title14);

//02
let task2Images = document.querySelectorAll(".task2 img");

for (let i = 0; i < task2Images.length; i++) {
  task2Images.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  task2Images[i].setAttribute("alt", "Elzero-logo");
}
console.log(task2Images[0]); //test

//03
let form1 = document.forms[0];
let input = document.getElementsByName("dollar")[0];
let changerDiv = document.querySelector(".result");

let changeToPound = () => {
  let dollarValue = parseFloat(input.value) || 0;
  let exchangeRate = 15.6;
  let egyptianValue = (dollarValue * exchangeRate).toFixed(2);
  changerDiv.innerHTML = `${dollarValue} USD Dollar = ${egyptianValue} Egyptian Pound`;
};

input.addEventListener("input", changeToPound);
changeToPound();

//04
let source = document.querySelector(".one");
let destination = document.querySelector(".two");
if (source.hasAttribute("title")) {
  source.setAttribute("title", "one");
  source.textContent = "One";
}
if (destination.hasAttribute("title")) {
  destination.setAttribute("title", "two");
  destination.textContent = "Two 2";
}
console.log(source);
console.log(destination);

//05
let task5Images = document.querySelectorAll(".task5 img");
for (let i = 0; i < task5Images.length; i++) {
  if (task5Images[i].hasAttribute("alt")) {
    task5Images[i].setAttribute("alt", "old");
  } else {
    task5Images[i].setAttribute("alt", "Elzero New");
  }
  console.log(task5Images[i]);
}

//06
let form2 = document.forms[1];
let numberOfElements = document.querySelector('input[name="elements"]');
let elementText = document.querySelector('input[name="texts"]');
let typeOfElement = document.querySelector('select[name="type"]');

let resultDisplay = document.querySelector(".results");

form2.onsubmit = function (e) {
  e.preventDefault();
  resultDisplay.innerHTML = "";
  const numElements = parseInt(numberOfElements.value);
  const text = elementText.value;

  const type = typeOfElement.value.toLowerCase();
  for (let i = 0; i < numElements; i++) {
    const newElement = document.createElement(type);
    newElement.textContent = text;
    newElement.className = "box";
    newElement.id = `id-${i}`;

    resultDisplay.appendChild(newElement);
  }
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~From 94 To 101~~~~~~~~~~~~~~~~~~~~~~
//01
let links = document.querySelectorAll("a");

links.forEach((link) => {
  if (link.classList.contains("open") && link.textContent.trim() === "ELzero") {
    window.onload = function () {
      link.click();
    };
  }
});

//02
let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector(".current");
let classLists = document.querySelector(".classes-list");
let classListsSpan = document.querySelector(".classes-list > span");

addInput.onblur = function () {
  let className = addInput.value.toLowerCase().trim();
  if (className) {
    className.split(/\s+/).forEach((cls) => {
      currentElement.classList.add(`${cls}-span`);
      let spanClass = document.createElement("span");
      spanClass.textContent = cls;
      spanClass.classList.add("class-item");
      classLists.appendChild(spanClass);
    });
    addInput.value = "";
  }
};
removeInput.onblur = function () {
  let nameTORemove = removeInput.value.toLowerCase().trim();
  if (nameTORemove) {
    nameTORemove.split(/\s+/).forEach((cls) => {
      currentElement.classList.remove(`${cls}-span`);
      let spans = classLists.querySelectorAll(".class-item");
      spans.forEach((span) => {
        if (nameTORemove === cls) {
          span.remove();
        }
      });
    });
    removeInput.value = "";
  }
};

//03
let t3Div = document.querySelector(".t3");
let t3p = t3Div.querySelector(" p");
let t3Element = t3Div.querySelector(".our-element");

t3p.remove();

let startDiv = document.createElement("div");
startDiv.title = "Start Elemet";
startDiv.setAttribute("data-value", "Start");
startDiv.textContent = "Start";
startDiv.classList.add("start");

let endtDiv = document.createElement("div");
endtDiv.title = "End Elemet";
endtDiv.setAttribute("data-value", "End");
endtDiv.classList.add("end");
endtDiv.textContent = "End";

t3Div.prepend(startDiv);
t3Div.append(endtDiv);

//04
let t4Div = document.querySelector(".t4");
let t4InnerDiv = t4Div.querySelector("div");
let t4span = t4InnerDiv.querySelector("span");

let word = t4span.nextElementSibling;
// t4Div.appendChild(word)

//05

let elements = document.querySelectorAll("div, span, p, article, section");

elements.forEach((ele) => {
  ele.addEventListener("click", function () {
    console.log(`This IS ${ele.tagName}`);
  });
});

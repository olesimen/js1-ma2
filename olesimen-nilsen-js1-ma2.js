// Question 1
const myFunctionExpression = function() {
    console.log("Ole Simen");
};

// Question 2
const clickbutton = document.querySelector(".btn");

clickbutton.addEventListener("click", function() {
    console.log("I was clicked");
});

/* 
Do we need to select the button using a variable first, or could we do it like this?

document.querySelector(".btn").addEventListener("click", function() {
    console.log("I was clicked");
});
*/

// Question 3
const inputFirstName = document.querySelector("#firstName");

inputFirstName.addEventListener("keydown", function(keyPress) {
    console.log(keyPress.key);
});

// Question 4
var hoverButton = document.querySelector("button");

hoverButton.addEventListener("mouseover", function() {
    hoverButton.classList.add("hover");
});

// Question 5
var hoverButton = document.querySelector("[data-animal='dog']");

hoverButton.addEventListener("mouseout", function() {
    hoverButton.classList.remove("hover");
});

// Question 6
const listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", function() {
        console.log(listItems[i].dataset.animal);
    });
}

// Question 7
const animal = "cow";

switch (animal) {
    case "cat":
        console.log("Meow");
        break;

    case "cow":
        console.log("Moo");
        break;

    case "bird":
        console.log("Tweet");
        break;

    default:
        console.log("Harrumph");
        break;
}

// Question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheepName) {
    console.log(sheepName);
});

// Question 9
const intervalId = setInterval(sayHello, 500);
let counter = 0;

function sayHello() {
    console.log("Hello");

    if (counter === 5) {
        clearInterval(intervalId);
    }

    counter++;
}

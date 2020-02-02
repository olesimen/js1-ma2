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
const hoverButton1 = document.querySelector("button");

hoverButton1.addEventListener("mouseover", function() {
    hoverButton1.classList.add("hover");
});

// Question 5
// Change const to let?
const hoverButton2 = document.querySelector("[data-animal='dog']");

hoverButton2.addEventListener("mouseout", function() {
    hoverButton2.classList.remove("hover");
});

// Question 6
const listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", function() {
        console.log(listItems[i].dataset.animal);
    });
}

// Question 7
// Not sure about this
const animal = "";

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

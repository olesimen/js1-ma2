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
const hoverButton2 = document.querySelector("[data-animal='dog']");

hoverButton2.addEventListener("mouseout", function() {
    hoverButton2.classList.remove("hover");
});

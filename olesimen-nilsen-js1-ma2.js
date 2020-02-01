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
const hoverButton = document.querySelector("button");

hoverButton.addEventListener("mouseover", function() {
    hoverButton.classList.add("hover");
});

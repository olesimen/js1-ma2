// Question 1
const myFunctionExpression = function() {
    console.log("Ole Simen");
};

// Question 2
const button = document.querySelector(".btn");

button.addEventListener("click", function() {
    console.log("I was clicked");
});

/* document.querySelector(".btn").addEventListener("click", function() {
    console.log("I was clicked");
});


Do we need to select the button using a variable first, or could we do like this?  */

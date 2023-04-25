// create a button element
const button = document.createElement("button");
button.innerHTML = "Click me";

// add an event listener to the button
button.addEventListener("click", function() {
  alert("Button clicked!");
});

// add the button to the HTML document
document.body.appendChild(button);

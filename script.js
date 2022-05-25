// thank you https://circletype.labwire.ca/ for the circular type!!!
console.log("ok");

// import CircleType from "https://cdnjs.cloudflare.com/ajax/libs/two.js/0.8.7/two.min.js";

// Instantiate `CircleType` with an HTML element.
const circleType = new CircleType(document.getElementById('myElement'));

// Set the text radius and direction. Note: setter methods are chainable.
circleType.radius(200).dir(1);

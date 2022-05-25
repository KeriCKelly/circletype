// thank you https://circletype.labwire.ca/ for the circular type!!!

import CircleType from "circletype.min.js";

// Instantiate `CircleType` with an HTML element.
const circleType = new CircleType(document.getElementById('myElement'));

// Set the text radius and direction. Note: setter methods are chainable.
circleType.radius(200).dir(1);


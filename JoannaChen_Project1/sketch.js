///////// THIRSTY //////////

//draw a line that represents a table/surface
//draw a glass cup filled up to the top with water
//every time the mouse is clicked
//a level of water will be subtracted
//until the glass is empty
//every time the mouse is clicked
//the empty glass will crack

function setup() {
  createCanvas(600, 600);
}

function draw() {
  glass();
}

//draws a glass cup
function glass() {
  ellipse(300, 200, 200, 30);
  line(200, 200, 230, 475);
  line(400, 200, 370, 475);
}
///////// THIRSTY //////////

//draw a line that represents a table/surface
//draw an empty cup
//every time the mouse is clicked
//a level of water will be added
//until the glass is full !
//thirsty meter to keep track of thirst

var waterX = 0;
var waterY = 0;
var counter = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  table();
  water(waterX, waterY);
  cup();
}

//draws line that depicts the surface table
function table() {
  fill(171, 108, 72); //brown
  rect(0, 400, 600, 200);
}

//fills glass with water to the top
function water(waterX, waterY) {
  fill(115, 231, 240, 120) //blue
  beginShape();
  noStroke();
  //vertex(201 + waterX, 200 + waterY);
  //vertex(399 - waterX, 200 + waterY);
  vertex(369 + waterX, 475 - waterY);
  vertex(231 - waterX, 475 - waterY);
  vertex(231, 475);
  vertex(369, 475);
  endShape();
}

//draws a glass cup
function cup() {
  strokeWeight(2);
  fill(255);
  stroke(200);
  //ellipse(300, 200, 200, 30);
  line(200, 200, 230, 475);
  line(400, 200, 370, 475);
  fill(115, 231, 240, 120);
  arc(300, 475, 140, 45, 0, PI, OPEN);
  //makes the cup look glassy
  fill(255, 100)
  noStroke();
  beginShape();
  vertex(201, 200);
  vertex(399, 200);
  vertex(369, 475);
  vertex(231, 475);
  endShape();
}

//when the spacebar is pressed, the water level will increase
function keyPressed() {
  if (keyCode == 32) {
    waterX += 1.1;
    waterY += 10;
  }
}
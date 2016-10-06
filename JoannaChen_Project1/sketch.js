///////// THIRSTY //////////

var waterX = 0;
var waterY = 0;
var stepX = 0;
var waterLevel = 0;

function setup() {
  background(255);
  createCanvas(600, 600);
}

function draw() {
  background(255);
  table();
  water(stepX, waterX, waterY);
  cup(stepX);
  quench();
  meter(waterLevel);
  reset();
  //moves glass of water
  if (keyIsDown(RIGHT_ARROW)) {
    stepX += 2;
  }
  if (keyIsDown(LEFT_ARROW)) {
    stepX -= 2;
  }
  //labels meter
  fill(0);
  textFont("Georgia");
  textSize(25);
  text("Water Meter", 50, 100);
}
//draws line that depicts the surface table
function table() {
  fill(171, 108, 72); //brown
  rect(0, 400, 600, 200);
}
//draws a glass cup
function cup(stepX) {
  strokeWeight(2);
  fill(255);
  stroke(200);
  ellipse(300 + stepX, 200, 200, 30);
  line(200 + stepX, 200, 230 + stepX, 475);
  line(400 + stepX, 200, 370 + stepX, 475);
  fill(115, 231, 240, 120);
  arc(300 + stepX, 475, 140, 45, 0, PI, OPEN);
  //makes the cup look glassy
  fill(255, 100)
  noStroke();
  beginShape();
  vertex(201 + stepX, 200);
  vertex(399 + stepX, 200);
  vertex(369 + stepX, 475);
  vertex(231 + stepX, 475);
  endShape();
  fill(220, 20);
  rect(365 + stepX, 250, 10, 60);
}
//fills glass with water to the top
function water(stepX, waterX, waterY) {
  fill(115, 231, 240, 100) //blue
  beginShape();
  noStroke();
  vertex(369 + waterX + stepX, 475 - waterY);
  vertex(231 - waterX + stepX, 475 - waterY);
  vertex(231 + stepX, 475);
  vertex(369 + stepX, 475);
  endShape();
}
//creates meter to measure water level
function meter(waterLevel) {
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(50, 25, 500, 50);
  fill(random(0, 255), random(0, 255), random(0, 255));
  rect(51, 25, 0 + waterLevel, 50);
  //smiley face
  fill(255, 214, 81); //yellow
  ellipse(523, 110, 50, 50); //face
  fill(0);
  ellipse(513, 103, 5, 5); //left eye
  ellipse(533, 103, 5, 5); //right eye
  noFill();
  arc(523, 117, 25, 10, 0, PI, OPEN) //SMILE :)

}
//when the spacebar is pressed
//the cup will be filled with water
function quench() {
  if (keyIsDown(32)) {
    waterX += .11;
    waterY += 1;
    waterLevel += 1.84;
  }
  //when the cup is full
  //then the user will be completely quenched
  if (waterY > 268) {
    fill(0);
    textFont("Georgia");
    textSize(40);
    text("QUENCHED!", 180, 150);
  }
}
//when the meter and the cup is full
//the meter will reset and the cup will become empty
function reset() {
  if (waterLevel > 500) {
    waterX = 0;
    waterY = 0;
    waterLevel = 0;
  }
}

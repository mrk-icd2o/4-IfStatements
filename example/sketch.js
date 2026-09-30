/*
   Description: Lesson 4 - If Statements example
   Author: Mr. Kowalczewski
   Date of last edit: September 23, 2026
*/

let xValue = 100;
let lineThickness = 50;

let name = "Mr K";

function setup() {
  createCanvas(600, 600);
}

function draw() {
  // re-draw the background at each repetition
  background(255);
  console.log('Hello There');
  // ----- Text -----
  textSize(20);
  text("Growing Line", 300, 200);
  text("Created by: " + name, 300, 250);

  //text("xValue = " + xValue, 300, 400);

  console.log("xValue = " + xValue);

  // ----- Growing Line -----
  strokeWeight(lineThickness);
  line(0, 300, xValue, 300);

  // xValue increases by one every time draw() loops
  xValue += 1;

  // lineThickness decreases by 0.1
  lineThickness = lineThickness - 0.1;

  // ----- if / else if / else -----
  // two conditions combined with && (both must be true)
  if (xValue > 300 && xValue < 400) {
    stroke(255, 0, 0);
  }
  else if (xValue < 600) {
    circle(width / 2, height / 2, 100, 100);
  }
  else {
    stroke(0);
  }
}

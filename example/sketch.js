/*
   Description: Custom Variables
   Author: Mr. Kowalczewski
   Date of last edit: September 19, 2025
*/

// global variables (outside of { })
let lineX = 100;
let lineWeight = 50;
let title = "Mr K's Program";
let titleX = 250;


function setup() {
  createCanvas(600, 600);
}


function draw() {
  background(255);
  // drawing a simple line
  strokeWeight(lineWeight);
  line(0, 300, lineX, 300);

  if(lineX > 200 && lineX < 300){
    stroke(255, 0, 0);
  }
  else if(lineX > 300 && lineX < 500){
    stroke(0, 255, 0);
  }
  else{
    stroke(0);
  }

  // if(keyIsPressed){
  //   circle(100, 100, 200, 200);
  // }

  if(key == 'a'){
    circle(100, 100, 200, 200);
  }


  // modifying the variables - draw() loops around!
  lineX = lineX + 1;
  lineWeight -= 0.1;

  fill(0, 255, 0);
  textSize(30);
  text(title, titleX, 100); // draws the string data (either a variable/constant or direct value) at coordinates (x, y)
  titleX -= 1;


  text("Hello", 250, 150);
  //text("lineX= " + lineX  , 250, 200);
  console.log("lineX = " + lineX);

}

let x = 0, y=0;
const spacing = 50;
const probability = 0.1;

function circles(){
  push();
  noFill();
  ellipse(x, y, spacing, spacing);
  pop();
}

function underbars(){
  line(x, y + spacing/2, x + spacing, y + spacing/2);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(color(66, 134, 244));
}

function draw() {
  stroke(255);
  strokeWeight(5);
  if(random() < probability){
    circles();
  } else {
    underbars();
  }
  x += spacing;
  if (x > windowWidth){
    x = 0; y += spacing;
  }
}

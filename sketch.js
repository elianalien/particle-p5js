let particle = []

function setup() {
  // put setup code here
  createCanvas(1280,720);
  background(220);
}

function draw() {
  //put drawing code here
  
}

function clearCanvas(){
    clear();
}

class Particle{
  
  constructor(){
    this.x = 500;
    this.y = 500;
  }

  show(){
    stroke(255)
    fill(122,100,52)
    ellipse(this.x, this.y, 20)
  }
}
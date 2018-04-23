let particles = []

function setup() {
  // put setup code here
  createCanvas(1280,720);
}

function draw() {
  background(0);

  // new particle created each frame and push to the array
  let p = new Particle()
  particles.push(p)

  // iterate backward to workaround jumping iteration after splice
  for (let i=particles.length-1; i >= 0; i--){
    particles[i].update()
    particles[i].show()

    // check if one particle is finished (the alpha is less than 0)
    if (particles[i].finished()){
      particles.splice(i,1)
    }
  }

}

function clearCanvas(){
    clear();
}

class Particle{
  
  constructor(){
    // initial coordinate
    this.x = 500;
    this.y = 500;

    // velocity
    this.vx = random(-1,1)
    this.vy = random(-5,-1)

    // transparency 
    this.alpha = 255
  }

  // update particle properties
  update(){
    // move towards velocity
    this.x += this.vx
    this.y += this.vy

    // update transparency 
    this.alpha -= 2.5
  }

  // check if the particle is finished
  finished(){
    // boolean, return true if alpha less than 0
    return this.alpha < 0;
  }

  // show function 
  show(){
    noStroke()
    fill(255,this.alpha)
    ellipse(this.x, this.y, 20)
  }
}
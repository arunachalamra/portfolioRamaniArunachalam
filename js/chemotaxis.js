var rain = [];
var xpos;
var ypos;

function setup() {
  var canvas = createCanvas(800, 800);

  for (let i = 0; i < 600; i++) {
    rain[i] = new Rain((int)(Math.random() * width), (int)(Math.random() * height));
  }
}

function draw() {
  background("#7DA5B9");
  fill("#003366");
  for (let i = 0; i < rain.length; i++) {
    rain[i].move();
    rain[i].show();
  }
}
class Rain {

  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    var xSpeed = (Math.random() * 3) - 2;
    var ySpeed = (Math.random() * 3) - 2;

    var yVelocity = .5;
    var xVelocity = .5;
  }

  move() {
    if (mouseX > this.xPos) {
      this.xPos += (int)(Math.random() * 7);
    } else if (mouseY < this.yPos) {
      this.xPos -= (int)(Math.random() * 7);
    }
  }
  show() {
    fill("#003366");
    ellipse(this.xPos, this.yPos, (int)((Math.random() * 10), (int)(Math.random() * 10)));
  }
}
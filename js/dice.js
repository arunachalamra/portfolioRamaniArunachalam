


function setup() {
    
    var canvas = createCanvas(1200, 820);
  
    //initializeFields();
    noLoop();
}

function draw() {
    // your code here
    background(30);
    for (var y = 0; y < 800; y += 400) {
        for (var x = 0; x < 800; x += 400) {
            var d = new Die(10 + x, 10 + y);
            d.roll();
            d.show();
        }
    }
    fill(255, 255, 255);
    var s = "This is your lucky number:";
    luckynumber = lucknumber.toString();
    var st = s.concat(luckynumber);
    text(st, 80,80);
}

function mousePressed() {
    redraw();
    //print("test");
}

class Die{

// variable declarations here
constructor(x, y) {
    // constructor
    // variable initializations here
    this.x = x;
    this.y = y;
    this.rol = int((Math.random() * 6)) + 1;
}

roll() {
    this.roll = int((Math.random() * 6)) + 1;
}

show() {
  var luckynumber= 0;
  var count = 0;
    fill(255, 255, 255);
    // rect(70, 70, 70, 70);
    rect(this.x, this.y, 100, 100, 15);
    if (this.roll == 1) {
        fill(20, 0, 0);
        ellipse(this.x + 50, this.y + 50, 15, 15);
        count+= this.roll;
    }
    if (this.roll == 2) {
        fill(0, 0, 0);
        ellipse(this.x + 25, this.y + 25, 15, 15);
        ellipse(this.x + 75, this.y + 75, 15, 15);
         count+= this.roll;
    }
    if (this.roll == 3) {
        fill(0, 0, 0);
        ellipse(this.x + 25, this.y + 25, 15, 15);
        ellipse(this.x + 50, this.y + 50, 15, 15);
        ellipse(this.x + 75, this.y + 75, 15, 15);
         count+= this.roll;
    }
    if (this.roll == 4) {
        fill(0, 0, 0);
        ellipse(this.x + 25, this.y + 25, 15, 15);
        ellipse(this.x + 75, this.y + 25, 15, 15);
        ellipse(this.x + 25, this.y + 75, 15, 15);
        ellipse(this.x + 75, this.y + 75, 15, 15);
         count+= this.roll;
    }
    if (this.roll == 5) {
        fill(0, 0, 0);
        ellipse(this.x + 25, this.y + 25, 15, 15);
        // 
        ellipse(this.x + 75, this.y + 25, 15, 15);
        ellipse(this.x + 50, this.y + 50, 15, 15);
        ellipse(this.x + 25, this.y + 75, 15, 15);
        ellipse(this.x + 75, this.y + 75, 15, 15);
         count+= this.roll;
    }
    if (this.roll == 6) {
        fill(0, 0, 0);
        ellipse(this.x + 25, this.y + 25, 15, 15);
        ellipse(this.x + 75, this.y + 25, 15, 15);
        ellipse(this.x + 25, this.y + 50, 15, 15);
        ellipse(this.x + 75, this.y + 50, 15, 15);
        ellipse(this.x + 25, this.y + 75, 15, 15);
        ellipse(this.x + 75,this. y + 75, 15, 15);
         count+= this.roll;
    }
    luckynumber = count % 4;
}


initializeFields() {
   const d = new Die(x,y);
    x = 0;
    y = 0;
    roll = 0;
}
}

var startX;
var startY;
var endX;
var endY;

function setup() {
createCanvas(400, 400);
strokeWeight(5);
background(255, 255, 255);
}

function draw() {
var r = int((Math.random() * 255));
var g = int((Math.random() * 255));
var b = int((Math.random() * 255));
stroke(r, g, b);
background(100);
endX = int((Math.random() * 10));
endY = int((Math.random() * 10)) - 9;
while (endX < 400) {
endX = startX + (int)(Math.random() * 10);
endY = startY + ((int)(Math.random() * 20) - 9);
line(startX, startY, endX, endY);
startX = endX;
startY = endY;
}
}

function mousePressed() {
startX = 0;
startY = 150;
endX = 0;
var endY = 150;
}
function setup() {
  	var canvas = createCanvas(500, 500);
     canvas.parent('sketch-holder');
	background(48,139,206);

	fill(250, 204, 0); 
	ellipse(100, 100, 100, 100);
 
}
function draw() {
	fill(0,250,0);
	stroke(10);
	rect(0,260,500,240); //grass
	fill(30,40,50);
	fill(255,0,255);
	rect(285,100,35,65);//body
	fill(229,194,152);
	ellipse(300,100,50,50);//head
	fill(255,255,255);
	ellipse(290,100,10,10);//left eye
	ellipse(310,100,10,10);//right eye
	fill(0,0,0);
	ellipse(292,100,5,5);//left pupil
	ellipse(312,100,5,5);//right pupil
	ellipse(300,115,10,5);//mouth
	line(315,120,330,160);//right arm
	line(285,120,270,160);//left arm
	fill(0,0,145);
	rect(285,165,15,95);//left leg
	rect(305,165,15,95);//right leg
	fill(0,0,255);
	ellipse(292,267,25,15);//left shoe
	ellipse(312,267,25,15);//right shoe
	textSize(15);
	text("ACSCompSciPandemic2020",20,420);
	text("Ramani Arunachalam",20,460);
}

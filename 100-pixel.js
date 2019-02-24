function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
	for(var a = 0; a < 100; a++){
		var x = random(width);
		var y = random(height);
		stroke(x, y, 100);
  	point(x, y);
	}
}

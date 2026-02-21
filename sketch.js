let people = [];

function setup() {
createCanvas(windowWidth, windowHeight);
for (let i = 0; i < 50; i++) {
people.push(new Person());
}
}

function draw() {
background(40);
for (let p of people) {
p.update();
p.show();
}
}

class Person {
constructor() {
this.x = random(400);
this.y = random(400);
this.speedX = random(-1, 1);
this.speedY = random(-1, 1);
}
update() {
this.x += this.speedX;
this.y += this.speedY;
if (this.x > width) this.x = 0;
if (this.x < 0) this.x = width;
if (this.y > height) this.y = 0;
if (this.y < 0) this.y = height;
}
show() {
fill(0, 200, 255);
noStroke();
circle(this.x, this.y, 10);
}
}

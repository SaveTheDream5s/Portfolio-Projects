let population = [];

function setup() {
createCanvas(windowWidth, windowHeight);
for (let i = 0; i < 100; i++) {
population.push({
x: random(windowWidth),
y: random(windowHeight),
vx: random(-2, 2),
vy: random(-2, 2)
});
}
}

function draw() {
background(30);
fill(0, 200, 255);
noStroke();

for (let p of population) {
circle(p.x, p.y, 10);
p.x += p.vx;
p.y += p.vy;

if (p.x < 0 || p.x > width) {
p.vx = p.vx * -1;
}
if (p.y < 0 || p.y > height) {
p.vy = p.vy * -1;
}
}
}

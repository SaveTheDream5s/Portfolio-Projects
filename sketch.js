let population = [];

function setup() {
createCanvas(windowWidth, windowHeight);
for (let i = 0; i < 100; i++) {
population.push({
x: random(width),
y: random(height),
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

}
}

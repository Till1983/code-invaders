var ship;
var enemies = [];
var blocks = [];
var shot;
var enemiesRows = 5;
var enemiesCols = 10;
var timePassed = 0;

function setup() {
  createCanvas(640, 480);
  ship = new Ship();
  shot = new Shot(width/2, height/2);
for (var j = 0; j < enemiesRows; j++) {
enemies [j] = [];
  for (var i = 0; i < enemiesCols; i++) {
  enemies[j][i]= new Enemy(i * 60 + 60, j * 40 + 20);
  }
}

  for (var i = 0; i < 6; i++) {
  blocks[i] = new Block(i * 80 + 80, 20);
  }
}

function draw() {
  background(60, 0, 255);
  ship.show();
  shot.show();
  shot.move();
  for (var j = 0; j < enemiesRows; j++) {
  for (var i = 0; i < enemiesCols; i++) {
    enemies[j][i].updatePos(ship.x + 60 * i - 200, j * 40 + timePassed/5);
  }
}
  for (var j = 0; j < enemiesRows; j++) {
  for (var i = 0; i < enemiesCols; i++) {
    enemies[j][i].show();
  }
}
  for (var i = 0; i < 6; i++) {
  blocks[i].show();
  }
  timePassed++;
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.move(-1);
  }
}

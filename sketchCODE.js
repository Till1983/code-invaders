var ship;
var enemies = [];
var bunkers = [];
var shots = [];
var ufo;
var enemiesRows = 5;
var enemiesCols = 10;
var timePassed = 0;
var enemyProgress = 1;
var enemyDirection = 1;
var enemyMovement = 0;
var gameWidth = 1000;
var gameHeight = 500;


function setup() {
	createCanvas(gameWidth, gameHeight);
	ship = new Ship();

	for (var i = 0; i < shots.length; i++) {
		shots = new Shot(ship.x, height);
	}

	for (var j = 0; j < enemiesRows; j++) {
		enemies[j] = [];
		for (var i = 0; i < enemiesCols; i++) {
			enemies[j][i] = new Enemy(i * 60 + 60, j * 40 + 20);
		}
	}

	for (var i = 0; i < 6; i++) {
		bunkers[i] = new Bunker(i * 100 + 250, 20);
	}
}


function draw() {
	background(60, 0, 255);
	ship.show();

	for (var i = 0; i < shots.length; i++) {
		shots[i].show();
		shots[i].move();
	}

	if (keyIsDown(LEFT_ARROW)) {
		ship.x -= 5;
	}
	if (keyIsDown(RIGHT_ARROW)) {
		ship.x += 5;
	}

	for (var j = 0; j < enemiesRows; j++) {
		for (var i = 0; i < enemiesCols; i++) {

			enemies[j][i].updatePos(60 * i + enemyMovement, j * 40 + enemyProgress);
			if (checkBorder(j, i) === true) {
				enemyProgress = enemyProgress + 10;
				enemyDirection = enemyDirection * -1;
			}
			if (enemies[j][i].dead === false) {
				enemies[j][i].show();
			}
			checkHit(j, i);
		}
	}

	for (var i = 0; i < 6; i++) {
		bunkers[i].show();
		checkBunkers(i);
	}

	enemyMovement = enemyMovement + (enemyDirection * enemyProgress / 100) + enemyDirection;
	timePassed++;

	console.log(enemyDirection);
	console.log(enemyMovement);
}


function keyPressed() {
	if (key === ' ') {
		shots.push(new Shot(ship.x, height));
	}
}


function checkBorder(j, i) {
	if ((enemies[j][i].x > gameWidth || enemies[j][i].x < 0) && (enemies[j][i].dead === false)) {
		return true;
	} else {
		return false;
	}
}

function checkBunkers(b){
for (var l = 0; l < shots.length; l++) {
		if (dist(shots[l].x, shots[l].y, bunkers[b].x, bunkers[b].y) < (shots[l].diameter / 2 + bunkers[b].width / 2)) {
			shots.splice(l, 1);
			system.log("Hit bunker " + b);
		}
	}
}


function checkHit(j, i) {
	for (var l = 0; l < shots.length; l++) {
		 if (dist(shots[l].x, shots[l].y, enemies[j][i].x, enemies[j][i].y) < (shots[l].diameter / 2 + enemies[j][i].width / 2)) {
			enemies[j][i].die();
			shots.splice(l, 1);
		}
	}
}

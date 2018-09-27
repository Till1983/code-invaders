var ship;
var enemies = [];
var bunkers = [];
var shot = [];
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
	shot = new Shot(width / 2, height / 2);
	for (var j = 0; j < enemiesRows; j++) {
		enemies[j] = [];
		for (var i = 0; i < enemiesCols; i++) {
			enemies[j][i] = new Enemy(i * 60 + 60, j * 40 + 20);
		}
	}

	for (var i = 0; i < 6; i++) {
		bunkers[i] = new Bunker(i * 80 + 80, 20);
	}
}

function draw() {
	background(60, 0, 255);
	ship.show();
	shot.show();
	shot.move();


	// insert loop for shot moving with the ship here!

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

		}
	}

	for (var i = 0; i < 6; i++) {
		bunkers[i].show();
	}
	enemyMovement = enemyMovement + (enemyDirection * enemyProgress / 100) + enemyDirection;
	timePassed++;

	console.log(enemyDirection);
	console.log(enemyMovement);


}

function keyPressed() {
	if (key === ' ') {
		var shot = new Shot(width / 2, height / 2);
		shot.push(shot);
	}
	if (keyCode === RIGHT_ARROW) {
		ship.move(1);
	} else if (keyCode === LEFT_ARROW) {
		ship.move(-1);
	}
}

function checkBorder(j, i) {
	//output("Checking" + enemies[j][i] + " Row = " + j + " Col = " + i + "xPos")
	if ((enemies[j][i].x > gameWidth || enemies[j][i].x < 0) && (enemies[j][i].dead === false)) {
		return true;
	} else {
		return false;
	}
}

function output(x) {
	console.log(x);
}

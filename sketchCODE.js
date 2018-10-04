var ship;
var enemies = [];
var bunkers = [];
var shots = [];
var enemyShots = [];
var ufo;
var enemiesRows = 5;
var enemiesCols = 10;
var timePassed = 0;
var enemyProgress = 1;
var enemyDirection = 1;
var enemyMovement = 0;
var gameWidth = 1000;
var gameHeight = 650;
var coolDown = -1;
var enemySprites = [];


function setup() {
    bg = loadImage("background/backround.png");


    for (var l = 1; l < 4; l++) {
        enemySprites[l] = loadImage("enemies/invader" + l + ".png");
    }


    //bunkerSprite = loadImage("bunkers are still missing!");

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
    background(bg);
    ship.show();

    for (var i = 0; i < shots.length; i++) {
        shots[i].show();
        shots[i].move();
    }

    for (var i = 0; i < enemyShots.length; i++) {
        enemyShots[i].show();
        enemyShots[i].move();
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
            if (checkBorder(j, i) === true && coolDown <= 0) {
                enemyProgress = enemyProgress + 10;
                enemyDirection = enemyDirection * -1;
                coolDown = 10;
            }
            if (enemies[j][i].dead === false) {
                enemies[j][i].show();
                if (random(0,100) < 0.1)
                {
                  enemyShoot(j,i);
                }
            }
            checkHit(j, i);
        }
    }

    for (var i = 0; i < 6; i++) {
        bunkers[i].show();
        checkBunkers(i);
    }

    enemyMovement = enemyMovement + (enemyDirection * enemyProgress / 50) + enemyDirection;
    timePassed++;

    coolDown--;

    console.log(enemyProgress);
    console.log(coolDown);
}


function keyPressed() {
    if (key === ' ') {
        shots.push(new Shot(ship.x, height));
    }
}

function enemyShoot(j, i)
{
  enemyShots.push(new enemyShot(enemies[j][i].x, enemies[j][i].y));
}

function checkBorder(j, i) {
    if ((enemies[j][i].x > gameWidth || enemies[j][i].x < 0) && (enemies[j][i].dead === false)) {
        return true;
    } else {
        return false;
    }
}




function checkBunkers(b) {
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
            if (enemies[j][i].dead === false) {
                enemies[j][i].die();
                shots.splice(l, 1);
            }
            console.log("An enemy would have been hit but its already dead")
        }
    }
}

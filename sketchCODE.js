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
var screenStart;
var screenMain;
var screenInstructions;
var screenGameOver;
var song;
var gameMode = 0;
var shotCoolDown = 0;

function preload() {
    song = loadSound("soundtrack.mp3");
    screenStart = loadImage("screens/first.png"); // to be updated
    screenMain = loadImage("background/backround.png");
    screenInstructions = loadImage("screens/second.png");
    screenGameOver = loadImage("screens/third.png");
}

function setup() {

    for (var l = 1; l < 4; l++) {
        enemySprites[l] = loadImage("enemies/invader" + l + ".png");
    }

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
        bunkers[i] = new Bunker(i * 100 + 250, gameHeight - 120);
    }

}


function draw() {

    if (gameMode === 0) {
        background(screenStart);
    } else if (gameMode === 2) {
        background(screenInstructions);
    } else if (gameMode === 3) {
        background(screenGameOver);
        song.stop();
    } else {

        background(screenMain);
        ship.outofbounds();
        ship.show();

        for (var i = 0; i < shots.length; i++) {
            shots[i].show();
            shots[i].move();
            if (shots[i].dead === true || checkBunkers(shots[i].x, shots[i].y, shots[i].diameter) === true) {
                shots.splice(i, 1);
            }

        }

        for (var i = 0; i < enemyShots.length; i++) {
            enemyShots[i].show();
            enemyShots[i].move();
            if (playerHit(enemyShots[i].x, enemyShots[i].y, enemyShots[i].diameter) === true) {
                gameMode = 3;
            }
            if (enemyShots[i].dead === true || checkBunkers(enemyShots[i].x, enemyShots[i].y, enemyShots[i].diameter) === true) {
                enemyShots.splice(i, 1);
            }

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
                    if (random(0, 100) < 0.1) {
                        enemyShoot(j, i);
                    }
                }
                checkHit(j, i);
                if (playerHit(enemies[j][i].x, enemies[j][i].y, enemies[j][i].width) === true) {
                    gameMode = 3;
                }
            }
        }

        for (var i = 0; i < 6; i++) {

            if (bunkers[i].dead === false) {
                bunkers[i].show();
            }


        }

        enemyMovement = enemyMovement + (enemyDirection * enemyProgress / 50) + enemyDirection;
        timePassed++;

        coolDown--;
        shotCoolDown++;
        //console.log(enemyProgress);
        //console.log(coolDown);
    }
}


function keyPressed() {
    if (key === ' ') {

        if (gameMode === 0) {
            gameMode = 1;
            song.play();
        } else if (gameMode === 1) {

            if (shotCoolDown > 30) {
                shots.push(new Shot(ship.x, height));
                shotCoolDown = 0;
            }
        }

    }
    if (keyCode === 73) {
        gameMode = 2;
    }
}

function enemyShoot(j, i) {
    enemyShots.push(new enemyShot(enemies[j][i].x, enemies[j][i].y));
}

function checkBorder(j, i) {
    if ((enemies[j][i].x > gameWidth || enemies[j][i].x < 0) && (enemies[j][i].dead === false)) {
        return true;
    } else {
        return false;
    }
}


function checkBunkers(x, y, d) {

    for (var l = 0; l < bunkers.length; l++) {
        if (dist(x, y, bunkers[l].x, bunkers[l].y) < (d / 2 + bunkers[l].diameter / 2) && bunkers[l].dead === false) {
            bunkers[l].shrink();
            return (true);
        }
    }
    return (false);
}


function playerHit(x, y, d) {
    if (dist(x, y, ship.x, ship.y) < (d / 2 + ship.diameter / 2)) {
        console.log("YOU GOT HIT");
        return (true);
    }
    return (false);
}

function checkHit(j, i) {
    for (var l = 0; l < shots.length; l++) {
        if (dist(shots[l].x, shots[l].y, enemies[j][i].x, enemies[j][i].y) < (shots[l].diameter / 2 + enemies[j][i].width / 2)) {
            if (enemies[j][i].dead === false) {
                enemies[j][i].die();
                shots.splice(l, 1);
            }
            //console.log("An enemy would have been hit but its already dead")
        }
    }
}

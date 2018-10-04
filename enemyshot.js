function enemyShot(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 10;
    this.dead = false;
    this.sprite = loadImage("enemyshot/1_enemyshot.png")

    this.show = function() {
        // fill(255);
        image(this.sprite, this.x, this.y, this.diameter, this.diameter);
    }

    this.move = function() {
        this.y = this.y + 15;
    }

    this.die = function() {
        this.dead = true;
    }
}

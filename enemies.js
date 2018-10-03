function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 15;
    this.dead = false;
    this.animation = 1;
    this.animCooldown = -1;


    this.show = function() {
        //fill(255, 0, 120);
        //imageMode(CENTER);
        image(enemySprites[this.animation], this.x - this.width / 2, this.y, this.width, this.height);
    }

    this.updatePos = function(x, y) {
        if (this.animCooldown < 0) {
            this.animate();
        }
        this.x = x;
        this.y = y;
        this.animCooldown--;
    }

    this.die = function() {
        this.dead = true;
    }

    this.animate = function() {
        if (this.animation >= 3) {
            this.animation = 1;
        } else {
            this.animation++;
        }
        this.animCooldown = 20;
    }
}

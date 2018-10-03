function Ship() {
    this.x = width / 2
    this.dead = false;
    this.sprite = loadImage("ship/playerModel.png");

    this.show = function() {
        //fill(this.sprite);
        //imageMode(CENTER);
        image(this.sprite, this.x - 15, height - 40, 30, 20);
    }

    this.move = function(dir) {
        this.x += dir * 3;
    }

    this.die = function() {
        this.dead = true;
    }
}

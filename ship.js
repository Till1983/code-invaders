function Ship() {
    this.x = width / 2;
    this.y = height - 40;
    this.diameter = 30;
    this.dead = false;
    this.sprite = loadImage("ship/playerModel.png");

    this.show = function() {
        //fill(this.sprite);
        //imageMode(CENTER);
        image(this.sprite, this.x - 15, this.y, this.diameter, this.diameter - 10);
    }

    this.move = function(dir) {
        this.x += dir * 3;
    }

    this.die = function() {
        this.dead = true;
    }
}

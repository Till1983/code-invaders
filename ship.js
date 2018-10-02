function Ship() {
  this.x = width/2
  this.dead = false;

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height - 20, 20, 20);
  }

  this.move = function(dir) {
    this.x += dir*3;
  }

  this.die = function() {
    this.dead = true;
  }
}

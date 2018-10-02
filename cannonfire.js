function Shot(x, y) {
  this.x = x;
  this.y = y;
  this.diameter = 10;
  this.dead = false;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  this.move = function() {
    this.y = this.y - 5;
  }

  this.die = function() {
    this.dead = true;
  }
}

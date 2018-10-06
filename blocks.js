function Bunker(x, y) {
  this.x = x;
  this.y = y;
  this.diameter = 38;
  this.sprite = loadImage("bunkers/BunkersTop1-.png");
  this.dead = false;

  this.show = function() {
    imageMode(CENTER);
    image(this.sprite, this.x, this.y, this.diameter, this.diameter);
    imageMode(CORNER);
  }

  this.shrink = function() {
    if (this.diameter > 5) {
    this.diameter = this.diameter - 5;
  }
  else {
    this.dead = true;
  }
  }
}

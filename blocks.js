function Bunker(x, y) {
  this.x = x;
  this.y = y;
  this.diameter = 38;

  this.show = function() {
    fill(240, 0, 240);
    rectMode(CENTER);
    rect(this.x, height-80, this.diameter, this.diameter);
  }
}

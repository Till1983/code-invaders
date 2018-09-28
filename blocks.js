function Bunker(x, y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    fill(240, 0, 240);
    rectMode(CENTER);
    rect(this.x, height-80, 38, 38);
  }
}

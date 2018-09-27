function Bunker(x, y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    fill(240, 0, 240);
    rect(this.x, height-80, 35, 35);
  }
}

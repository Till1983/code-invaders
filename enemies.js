function Enemy(x, y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    fill(255, 0, 120);
    ellipse(this.x, this.y, 20, 40);
  }

  this.updatePos = function(x, y) {
    this.x = x;
    this.y = y;
  }
}

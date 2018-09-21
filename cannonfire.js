function Shot(x, y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    fill(255, 0, 120);
    ellipse(this.x, this.y, 5, 5);
  }

  this.move = function() {
    this.y = this.y-1;
  }

}

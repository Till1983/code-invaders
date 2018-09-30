function Shot(x, y) {
  this.x = x;
  this.y = y;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 10, 10);
  }

  this.move = function() {
    this.y = this.y - 5;
  }

  this.push = function() {
    this.y = y;
  }
}

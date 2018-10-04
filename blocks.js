function Bunker(x, y) {
  this.x = x;
  this.y = y;
  this.diameter = 38;
  this.sprite = loadImage("bunkers/BunkersTop1-.png")

  this.show = function() {
    image(this.sprite, this.x, height - 120, this.diameter, this.diameter);
  }
}

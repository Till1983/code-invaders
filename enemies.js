function Enemy(x, y) {
  this.x = x;
  this.y = y;
  this.width = 20;
  this.height = 20;
  this.dead = false;

  this.show = function() {
    fill(255, 0, 120);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    //ellipse(this.x, this.y, 20, 40);
  }

  this.updatePos = function(x, y) {
    this.x = x;
    this.y = y;
}
    this.die = function() {
      this.dead = true;
    }

}

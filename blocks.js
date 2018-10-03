function Bunker(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 38;
    // insert here: this.sprite(foldername/filename.filetype)

    this.show = function() {
        fill(240, 0, 240);
        rectMode(CENTER);
        rect(this.x, height - 80, this.diameter, this.diameter); // insert 'this.sprite' before 'this.x',
        														                            //replace 'rect' with 'image', and delete line 8 and line 9
    }
}

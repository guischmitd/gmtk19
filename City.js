class City {
  constructor(rows, cols) {
    createCanvas(800, 800)
    this.buildings = []
    this.rows = rows
    this.cols = cols

    this.cellSize = min((width / (this.cols + (this.cols + 1) / 4)), (height / (this.rows + (this.rows + 1) / 4)))
    this.roadSize = (this.cellSize / 4)
  }

  draw() {
    background(211)

    // Draw corners (Debugging)
    for (var i = 0; i < this.rows + 1; i++) {
      for (var j = 0; j < this.cols + 1; j++) {
          fill(91)
          noStroke()

          let x = i * (this.cellSize + this.roadSize) + this.roadSize / 2;
          let y = j * (this.cellSize + this.roadSize) + this.roadSize / 2;

          ellipse(x, y, this.roadSize / 2);

    for (let building of this.buildings) {
      building.draw(this.cellSize, this.roadSize)
    }
      }
    }
  }
}

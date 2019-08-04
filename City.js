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
    for (let building of this.buildings) {
      building.draw(this.cellSize, this.roadSize)
    }
  }
}

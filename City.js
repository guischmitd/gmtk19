class City {
  constructor(rows, cols) {
    createCanvas(800, 600)
    this.buildings = []
    this.rows = rows
    this.cols = cols

    this.cellSize = (canvas.width / this.cols)
    this.roadSize = (this.cellSize / 4)
    this.cellSize -= this.roadSize * 2

  }

  draw() {
    background(211)
    for (let building of this.buildings) {
      building.draw(this.cellSize, this.roadSize)
    }
  }
}

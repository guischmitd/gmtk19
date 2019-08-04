class City {
  constructor(rows, cols) {
    createCanvas(800, 800)
    this.buildings = []
    this.rows = rows
    this.cols = cols

    this.cellSize = min((width / this.cols), (height / this.rows))
    this.roadSize = (this.cellSize / 4)
    this.cellSize -= this.roadSize
  }

  draw() {
    background(211)
    for (let building of this.buildings) {
      building.draw(this.cellSize, this.roadSize)
    }
  }
}

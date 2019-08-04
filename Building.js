class Building {
  constructor(tag, position, size, entrance) {
    this.tag = tag
    this.type = tag.split('_')[0];
    this.i = position[0]
    this.j = position[1]
    this.w = size[0]
    this.h = size[1]
    this.entrance = entrance
    this.strokeColor = color(128)

    if (this.type === 'house') {
      this.color = color(255, 220, 220);

    } else if (this.type === 'school') {
      this.color = color(245, 245, 218);

    } else if (this.type === 'hospital') {
      this.color = color(237, 237, 237);

    } else if (this.type === 'mall') {
      this.color = color(185, 220, 255);

    } else if (this.type === 'park') {
      this.color = color(142, 207, 124);
      this.strokeColor = color(86, 138, 72);

    } else {
      throw "Invalid type for new 'Building' object"
    }

  }

  draw(cellSize, roadSize) {
    let x = this.i * cellSize + (this.i + 1) * roadSize
    let y = this.j * cellSize + (this.j + 1) * roadSize

    let w = this.w * cellSize + roadSize * (this.w - 1)
    let h = this.h * cellSize + roadSize * (this.h - 1)

    rectMode(CORNER)
    fill(this.color)

    stroke(this.strokeColor)
    strokeWeight(roadSize / 6)
    strokeJoin(ROUND)

    rect(x, y, w, h)
  }
}

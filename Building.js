class Building {
  constructor(type, i, j, w, h, entrance) {
    this.type = type;
    this.i = i
    this.j = j
    this.entrance = entrance
    this.strokeColor = color(128)

    if (type === 'house') {
      this.w = 1;
      this.h = 1;
      this.color = color(255, 220, 220);

    } else if (this.type === 'school') {
      this.w = 2;
      this.h = 1;
      this.color = color(245, 245, 218);

    } else if (this.type === 'hospital') {
      this.w = 3;
      this.h = 2;
      this.color = color(237, 237, 237);

    } else if (this.type === 'mall') {
      this.w = 3;
      this.h = 3;
      this.color = color(185, 220, 255);

    } else if (this.type === 'park') {
      this.w = 1;
      this.h = 1;
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
    strokeWeight(roadSize / 8)

    rect(x, y, w, h)
  }
}

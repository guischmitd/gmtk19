class Agent {
  constructor() {
    this.x = random(0, 800);
    this.y = random(0, 600);
    console.log(this.x, this.y)
    this.w = 5;
    this.h = 5;
    this.stroke = color(0, 0, 0, 0)
    this.color = color(10, 128, 10)
  }

  draw() {
    fill(this.color)
    stroke(this.stroke)
    strokeWeight(5)
    rectMode(RADIUS)

    rect(this.x, this.y, this.w, this.h)
  }

  mouseOver() {
    return (mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h)
  }

  update() {

  }

}

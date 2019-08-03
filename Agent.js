class Agent {
  constructor(x, y, infected) {
    this.infected = boolean(infected);
    this.x = Math.random(0, 800);
    this.y = Math.random(0, 600);
    this.w = 5;
    this.h = 5;
    agent.stroke = false;
    agent.color = color(10, 128, 10)
  }

  draw() {
    rectMode(RADIUS)
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

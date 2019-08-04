class GameManager {
  constructor() {
    this.level = 0
    this.agents = []
    this.city = new City(10, 10)
  }

  nextLevel(citySpec, agentSpec) {
    this.level++
    this.city = generateCity(citySpec)
    console.log(this.city)
    this.generateAgents(agentSpec)

    console.log('Welcome to level ' + this.level + '!')
  }

  generateAgents(agentSpecs) {
    for (let i=0; i < agentSpecs.nAgents; i++) {
      this.agents.push(new Agent())
    }
  }

  show() {
    for (let agent of this.agents) {
      agent.draw()
    }
    this.city.draw()
  }

  clicked() {
    if (this.agents.length > 0) {
      for (let agent of this.agents) {
        if (agent.mouseOver()) {
          agent.infected = true;
          agent.stroke = true;
          break
        }

      }
    }
  }
}

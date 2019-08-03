class GameManager {
  constructor() {
    this.level = 0
    this.agents = []
    this.city = new City()
  }

  nextLevel() {
    this.level++
    this.city = this.generateCity(citySpec)
    this.agents = generateAgents(agentSpec)

    console.log('Welcome to level ' + this.level + '!')
  }

  generateAgents() {

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

let level = 0

function setup() {
  gameManager = new GameManager()
  agentSpec = new AgentSpec()

  city = new City(10, 10)
  city.buildings.push(new Building('mall', 0, 0))
  city.buildings.push(new Building('school', 3, 0))
  city.buildings.push(new Building('hospital', 0, 3))
  city.buildings.push(new Building('house', 0, 5))
  city.buildings.push(new Building('mall', 3, 3))
  city.buildings.push(new Building('park', 1, 5))
  city.buildings.push(new Building('park', 2, 5))
  city.buildings.push(new Building('park', 3, 2))
  city.buildings.push(new Building('park', 4, 2))

  gameManager.generateAgents(agentSpec)
}

function draw() {
  city.draw()
  gameManager.show()
}

function mouseClicked() {
  gameManager.clicked()
}

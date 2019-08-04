function setup() {
  gameManager = new GameManager()
  citySpec = new CitySpec(10, 10, 3, 3, 1)
  agentSpec = new AgentSpec()

  gameManager.nextLevel(citySpec, agentSpec)
}

function draw() {
  gameManager.show()
}

function mouseClicked() {
  gameManager.clicked()
}

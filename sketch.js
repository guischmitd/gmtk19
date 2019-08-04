function setup() {
  gameManager = new GameManager()
  citySpec = new CitySpec(9, 9, 2, 6, 1)
  agentSpec = new AgentSpec()

  gameManager.nextLevel(citySpec, agentSpec)
}

function draw() {
  gameManager.show()
}

function mouseClicked() {
  gameManager.clicked()
}

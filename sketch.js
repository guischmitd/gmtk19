function setup() {
  gameManager = new GameManager()
  citySpec = new CitySpec(9, 9, 3, 3, 3)
  agentSpec = new AgentSpec()

  gameManager.nextLevel(citySpec, agentSpec)
}

function draw() {
  gameManager.show()
}

function mouseClicked() {
  gameManager.clicked()
}

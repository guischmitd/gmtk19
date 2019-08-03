let level = 0

function setup() {
  gameManager = new GameManager()

  city = new City(10, 10)
  city.buildings.push(new Building('mall', 0, 0))
  city.buildings.push(new Building('school', 3, 0))
  city.buildings.push(new Building('hospital', 0, 3))
  city.buildings.push(new Building('house', 0, 5))
  city.buildings.push(new Building('mall', 3, 3))
}

function draw() {
  city.draw()
}

function mouseClicked() {
  gameManager.clicked()
}

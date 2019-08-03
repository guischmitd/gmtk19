function setup() {
  city = new City(10, 10)
  city.buildings.push(new Building('mall', 0, 0))
  city.buildings.push(new Building('school', 3, 0))
  city.buildings.push(new Building('hospital', 0, 3))
  city.buildings.push(new Building('house', 3, 2))
  city.buildings.push(new Building('mall', 3, 3))
}

function draw() {
  city.draw()
}

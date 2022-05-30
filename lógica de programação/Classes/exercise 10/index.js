class Spaceship {
  constructor(name, crewQuantity,) {
    this.name = name
    this.crewQuantity = crewQuantity
    this.isHitched = false
    this.entranceDoorsOpen = false
  }
  hitch() {
    this.isHitched = true
    this.entranceDoorsOpen = true
  }
}

function showMenu() {
  let chosenOption
  while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
    chosenOption = prompt("O que deseja fazer?\n" +
      "1- Engatar nave\n " +
      "2- Imprimir naves\n" +
      "3 - Sair do programa")
  }
  return chosenOption
}
function printSpaceshipList(spaceship) {
  let spaceshipList = ""
  spaceship.forEach((spaceship, index) => {
    spaceshipList += (index + 1) + "- " + spaceship.name +
      "(" + spaceship.crewQuantity + "tripulantes)\n"
  })
  alert(spaceshipList)
}

let hitchedSpaceships = []
let chosenOption

while (chosenOption != "3") {
  chosenOption = showMenu()
  switch (chosenOption) {
    case "1":
      let spaceshipToAdd = createSpaceShip()
      spaceshipToAdd.push(spaceshipToAdd)
      break
    case "2":
      printSpaceshipList(hitchedSpaceships)
      break
  }
}
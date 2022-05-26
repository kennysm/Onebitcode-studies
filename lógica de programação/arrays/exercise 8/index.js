const hitchedSpaceship = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
]

let crewGreatherThan9 = hitchedSpaceship.filter(spaceship => {
  return spaceship[1] > 9
}).map(spaceship => {
  return spaceship[0]
})

let ongoingHitchPlataform = hitchedSpaceship.findIndex(spaceship => {
  return spaceship[2] == false
})

let highLightedSpaceship = hitchedSpaceship.map(spaceship => {
  return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreatherThan9.join(", ")
message += "\nPlataform em processo de engate: " + (ongoingHitchPlataform + 1)
message += "\nEspaçonaves destacadas: " + highLightedSpaceship.join(", ")

alert(message)

//object
let spaceship = {
  name: "colossus",
  crewQuantity: 10,
  isHitched: false,
}
let { name: spaceshipName, crewQuantity } = spaceship
console.log(spaceshipName, crewQuantity)


//array
let spaceships = ["Colossus", "Ártemis", "Fênix"]

let [colossusm, artemis] = spaceships
console.log(colossus, artemis)
let distance = prompt("Qual a distância em anos luz?")
let options = prompt("Qual unidade gostaria de converter? \n1. Parsec(pc) \n2. Unidade astronômica(AU) \n3. Quilômetros(KM) \n \n(Digite o número da opção desejada)")
let chosenUnit
let convertdistance

switch (options) {
  case "1":
    chosenUnit = "Parsec"
    convertdistance = distance * 0.306601
    break
  case "2":
    chosenUnit = "Unidade astronômica"
    convertdistance = distance * 63241.1
    break
  case "3":
    chosenUnit = "Quilômetros"
    convertdistance = distance * 9.5 * Math.pow(10, 12)
    break
  default:
    chosenUnit = "Unidade não identificada"
    convertdistance = "Conversão fora do escopo"
}

alert("Distância em Anos-luz: " + distance + "\n" + chosenUnit + ": " + convertdistance)
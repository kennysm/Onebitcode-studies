let count = 0
let chosenOption = ""
let askName = prompt(" Qual é o nome da nave ?")
chosenOption = prompt("Você deseja entrar na dobra espacial? \n1. Sim \n2. Não")

while (chosenOption == "1") {
  count += 1
  prompt("Deseja realizar a próxima dobra \n1 - Sim\n2 - Não")
  chosenOption = prompt("Deseja realizar a próxima dobra \n1 - Sim\n2 - Não")
}
alert("Nave: " + askName + "\nQuantidade de dobras: " + count)




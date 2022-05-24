let askTheName = prompt("Qual o seu nome piloto")
let initialvelocity = 0
let askVelocity = prompt("A qual velocidade gostaria de acelerar a nave?")
let confirmation = confirm(" Estamos acelerando para " + askVelocity + "km/s")

if (confirmation) {
  initialvelocity = askVelocity
}
if (initialvelocity <= 0) {
  alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if (initialvelocity < 40) {
  alert("Você está devagar, podemos aumentar mais")
} else if (initialvelocity < 80) {
  alert("Parece uma boa velocidade para manter")
} else if (initialvelocity < 100) {
  alert("Velocidade alta.Considere diminuir")
} else {
  alert("Velocidade perigosa. Controle automático forçado")
}

alert("Piloto: " + askTheName + "\nVelocidade: " + initialvelocity + "km/s")

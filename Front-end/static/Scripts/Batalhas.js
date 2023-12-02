// Valores
var Life = 1000
var LifeAdv = 1000
var Stage = 0
var Invocar = document.createElement("img")
var InvocarName = document.createElement("h1")
var ATKP = Math.floor(Math.random() * 200)
var ATKADV = Math.floor(Math.random() * 200)
Protagonista.src = JSON.parse(localStorage.getItem("Avatar"))[0].ImagePersonagem
PersonagemName.innerText = JSON.parse(localStorage.getItem("Avatar"))[0].Name
// Functions
function ATK() {
  var DEFADV = 100
  var Computador = (LifeAdv -= ATKP) + DEFADV / 2
  var Jogador = (LifeAdv -= ATKADV) + DEFADV / 2
  document.getElementById("LifeAdvs").innerText = Computador
  document.getElementById("Life").innerText = Jogador
}

function INV() {
  Invocar.src = "https://i.pinimg.com/736x/8d/1d/2c/8d1d2ca0ee8958aa30b305718eaa74be.jpg"
  InvocarName.innerText = "Divino General Mahoraga"
  ATKP += 50
  Laço.append(Invocar, InvocarName)
}

function MAG() {
  var Buscar = JSON.parse(localStorage.getItem("Avatar"))
  var MagicsButton = `
  <button>${Buscar[0].Magia1}</button>
  <button>${Buscar[0].Magia2}</button>
  <button>${Buscar[0].Magia3}</button>
  <button>${Buscar[0].Magia4}</button>
  `
  Magics.innerHTML = MagicsButton
}

function EVO() {
  document.getElementById("Protagonista").src = "https://i.pinimg.com/564x/6b/4a/95/6b4a95311ad4f5239f4ce179908e4974.jpg"
}

function Carregar() {
  var Buscar = JSON.parse(localStorage.getItem("Avatar"))
  document.getElementById("Arma").innerText = Buscar[0].Arma
  document.getElementById("LaçoName").innerText = Buscar[0].Laço
  document.getElementById("Arma").innerText = Buscar[0].Arma
  document.getElementById("Form").innerText = Buscar[0].Forma
}

document.getElementById("Começar").addEventListener("click", function () {
  document.getElementById("Começar").style.display = "none"
})
document.onload = Carregar()
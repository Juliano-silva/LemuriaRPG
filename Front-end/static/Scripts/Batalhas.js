// Valores
var Life = 1000
var LifeAdv = 1000
var Stage = 0
var Invocar = document.createElement("img")
var InvocarName = document.createElement("h1")
var ATKP = Math.floor(Math.random() * 200) 
var ATKADV = Math.floor(Math.random() * 200)
// Functions
function ATK(){
    var DEFADV = 100
    var Computador = (LifeAdv -= ATKP) + DEFADV / 2
    var Jogador = (LifeAdv -= ATKADV) + DEFADV / 2
    document.getElementById("LifeAdvs").innerText = Computador
    document.getElementById("Life").innerText = Jogador
    console.log("Cu");
}

function INV(){
  Invocar.src = "https://i.pinimg.com/736x/8d/1d/2c/8d1d2ca0ee8958aa30b305718eaa74be.jpg"
  InvocarName.innerText = "Divine General Mahoraga"
  ATKP += 50 
  Laço.append(Invocar,InvocarName)
}

function MAG(){
  var MagicButton = document.createElement("button")
  MagicButton.innerText = "Fire Souls"
  Magics.append(MagicButton)
}

function EVO(){
  document.getElementById("Protagonista").src = "https://i.pinimg.com/564x/6b/4a/95/6b4a95311ad4f5239f4ce179908e4974.jpg"
}
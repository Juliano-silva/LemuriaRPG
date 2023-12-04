// Valores
var BuscarAvatar = JSON.parse(localStorage.getItem("Avatar"))
var Stage = parseInt(JSON.parse(localStorage.getItem("Configuration")).Stage || parseInt("0"))
document.getElementById("Stages").innerText = "Stage: " +  Stage
var sum = 0
// MyPerson
var Life = BuscarAvatar.LVLATRIBUTE.LifeMax
var ATKP = BuscarAvatar.LVLATRIBUTE.Ataque
var DefesaP = BuscarAvatar.LVLATRIBUTE.Defesa
var ManaP = BuscarAvatar.LVLATRIBUTE.ManaMax
var Invocar = document.createElement("img")
var InvocarName = document.createElement("h1")
Protagonista.src = BuscarAvatar.ImagePersonagem
PersonagemName.innerText = BuscarAvatar.Name
// MyEnemy
var LifeAdv = ATKAdv = DefesaAdv = ManaAdv = 0
sum += Life + ATKP + DefesaP + ManaP
LifeAdv = ATKAdv = DefesaAdv = ManaAdv = Math.floor(Math.random() * sum)
// Functions Person
function ATK() {
  var UPAR = Math.floor(Math.random() * 1)
  var Computador = (LifeAdv -= parseInt(ATKP))
  var Jogador = (Life -= parseInt(ATKAdv)) 
  document.getElementById("LifeAdvs").innerText = Computador
  document.getElementById("Life").innerText = Jogador
  // Morte ou Vitória
  if(Jogador < 0){
    location.reload()
    console.log("Jogador Morreu");
  }
  else if (Computador < 0){
    location.reload()
    console.log("Computador Morreu");
    Stage += 1
    var Avatar = JSON.parse(localStorage.getItem("Avatar"))
    Avatar.Dinheiro += parseInt(50)
    localStorage.Avatar = JSON.stringify(Avatar)
    var Config = JSON.parse(localStorage.getItem("Configuration"))
    Config.Stage = Stage
    localStorage.Configuration = JSON.stringify(Config)
    if(UPAR == 0){
      console.log("LVL UP");
    }else{
      console.log("Não Upou");
    }
  }else{
    console.log("Empate");
  }
}


function INV() {
  Invocar.src = "https://i.pinimg.com/736x/8d/1d/2c/8d1d2ca0ee8958aa30b305718eaa74be.jpg"
  // InvocarName.innerText = "Divino General Mahoraga"
  ATKP += Math.floor(Math.random() * (sum / 3))
  console.log(ATKP);
  Laço.append(Invocar, InvocarName)
}

function MAG() {
  var Buscar = JSON.parse(localStorage.getItem("Avatar"))
  var MagicsButton = `
  <button>${Buscar.Magia1}</button>
  <button>${Buscar.Magia2}</button>
  <button>${Buscar.Magia3}</button>
  <button>${Buscar.Magia4}</button>
  `
  Magics.innerHTML = MagicsButton
}

function EVO() {
  document.getElementById("Protagonista").src = "https://i.pinimg.com/564x/6b/4a/95/6b4a95311ad4f5239f4ce179908e4974.jpg"
}

function Carregar() {
  var Buscar = JSON.parse(localStorage.getItem("Avatar"))
  document.getElementById("Arma").innerText = Buscar.Arma
  document.getElementById("LaçoName").innerText = Buscar.Laço
  document.getElementById("Arma").innerText = Buscar.Arma
  document.getElementById("Form").innerText = Buscar.Forma
}

document.getElementById("Começar").addEventListener("click", function () {
  document.getElementById("Começar").style.display = "none"
})
document.onload = Carregar()